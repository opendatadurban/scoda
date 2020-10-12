from . import *  # noqa
from ..app import app
import pandas as pd
import datetime


def seed_codebook_data(db):

    df = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/sacn_socr_variables_20200817_scoda.xlsx")). \
        fillna(value='')
    print("Seeding Unique Columns")

    for data in df["unit"].unique():
        if data:
            unit = CbUnit()
            unit.name = data.strip()
            db.session.add(unit)

    for data in df["region_name"].unique():
        if data:
            region = CbRegion()
            region.name = data.strip()
            db.session.add(region)

    for data in df["region_type"].unique():
        if data:
            region_type = CbRegionType()
            region_type.name = data.strip()
            db.session.add(region_type)

    for data in df["theme"].unique():
        if data:
            theme = CbTheme()
            theme.name = data.strip()
            db.session.add(theme)

    for data in df["source"].unique():
        if data:
            source = CbSource()
            source.name = data.strip()
            db.session.add(source)

    for data in df["value_type"].unique():
        if data:
            value_type = CbValueType()
            value_type.name = data.strip()
            db.session.add(value_type)

    # indicator_code = df["Indicator_code"].unique()
    # indicator_name = df["Indicator_name"].unique()
    # print(indicator_code)
    # print(indicator_name)
    # indicator_data = list(zip(indicator_code, indicator_name))
    # for data in indicator_data:
    #     if data:
    #         value_type = CbValueType()
    #         value_type.name = data
    #         db.session.add(value_type)
    db.session.commit()

    print("Seeding DataPoints & Indicators")
    try:
        for index, row in df.iterrows():
            indicator_name = str(row["Indicator_name"]).strip()
            indicator = db.session.query(CbIndicator).filter(CbIndicator.name == indicator_name).first()
            if not indicator:
                indicator = CbIndicator()
                indicator.name = indicator_name
                indicator.code = str(row["Indicator_code"]).strip()
                indicator.comments = str(row["comments"]).strip()
                source_id = db.session.query(CbSource.id).filter(CbSource.name == str(row["source"]).strip())
                indicator.source_id = source_id
                theme_id = db.session.query(CbTheme.id).filter(CbTheme.name == str(row["theme"]).strip())
                indicator.theme_id = theme_id
                unit_id = db.session.query(CbUnit.id).filter(CbUnit.name == str(row["unit"]).strip())
                indicator.unit_id = unit_id
                db.session.add(indicator)
                db.session.flush()
            if row["value"] and not isinstance(row["value"], str):
                data_point = CbDataPoint()
                data_point.value = row["value"]
                # Setup date start & end
                try:
                    date_start = datetime.date(int(row["year_start"]), int(row["month_start"]), int(row["day_start"]))
                    data_point.start_dt = date_start
                    date_end = datetime.date(int(row["year_end"]), int(row["month_end"]), int(row["day_end"]))
                    data_point.end_dt = date_end
                except Exception as e:
                    print(e)
                data_point.indicator_id = indicator.id
                region_id = db.session.query(CbRegion.id).filter(CbRegion.name == str(row["region_name"]).strip())
                data_point.region_id = region_id
                region_type_id = db.session.query(CbRegionType.id).filter(CbRegionType.name == str(row["region_type"]).strip())
                data_point.region_type_id = region_type_id
                db.session.add(data_point)
            print(F"{indicator_name} Indicator Seeded")
        db.session.commit()
    except Exception as e:
        print(e)
