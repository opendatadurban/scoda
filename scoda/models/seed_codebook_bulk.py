from . import *  # noqa
from ..app import app
import pandas as pd
import datetime
import json
CHUNK_SIZE = 20000
def seed_codebook_data(db):

    df = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/sacn_socr_variables_20200817_scoda.xlsx")). \
        fillna(value='')

    print("Processing Metadata")
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

    for data in df["year_end"].astype(str).unique():
        if data:
            year_end = CbYear()
            year_end.name = int(data)
            db.session.add(year_end)
    db.session.commit()

    print("Seeding DataPoints & Indicators")
    try:
        records = []
        for index, row in df.iterrows():
            indicator_name = str(row["Indicator_name"]).strip()
            indicator = db.session.query(CbIndicator).filter(CbIndicator.code == str(row["Indicator_code"]).strip()).first()
            if not indicator:
                print(F"No indicator:{indicator_name}")
                indicator = CbIndicator()
                indicator.name = indicator_name
                indicator.code = str(row["Indicator_code"]).strip()
                indicator.comments = str(row["comments"]).strip()
                source_id = db.session.query(CbSource.id).filter(CbSource.name == str(row["source"]).strip()).first()
                indicator.source_id = source_id[0]
                theme_id = db.session.query(CbTheme.id).filter(CbTheme.name == str(row["theme"]).strip()).first()
                indicator.theme_id = theme_id[0]
                unit_id = db.session.query(CbUnit.id).filter(CbUnit.name == str(row["unit"]).strip()).first()
                indicator.unit_id = unit_id[0]
                db.session.add(indicator)
                db.session.flush()
            if row["value"] and not isinstance(row["value"], str):
                data_point = CbDataPoint()
                data_point.value = row["value"]
                # Setup date start & end
                try:
                    if row["year_start"]:
                        date_start = datetime.date(int(row["year_start"]), int(row["month_start"]) if row["month_start"] else 1,
                                                   int(row["day_start"]) if row["day_start"] else 1)
                        data_point.start_dt = date_start
                        data_point.year_start_id = db.session.query(CbYear.id).filter(
                            CbYear.name == int(row["year_start"])).first()[0]
                    if row["year_end"]:
                        date_end = datetime.date(int(row["year_end"]), int(row["month_end"]) if row["month_end"] else 1, int(row["day_end"]) if row["day_end"] else 1)
                        data_point.end_dt = date_end
                        data_point.year_end_id = db.session.query(CbYear.id).filter(
                            CbYear.name == int(row["year_end"])).first()[0]
                except Exception as e:
                    print(F"Error processing year for indicator: {indicator_name} Error{e}")
                data_point.indicator_id = indicator.id
                region_id = db.session.query(CbRegion.id).filter(CbRegion.name == str(row["region_name"]).strip()).first()
                data_point.region_id = region_id[0]
                region_type_id = db.session.query(CbRegionType.id).filter(CbRegionType.name == str(row["region_type"]).strip()).first()
                data_point.region_type_id = region_type_id[0]
                records.append(data_point)
                if len(records) > CHUNK_SIZE:
                    db.session.bulk_save_objects(records)
                    db.session.commit()
                    records.clear()
                # db.session.add(data_point)
            print(F"{indicator_name} Data Seeded")
        db.session.bulk_save_objects(records)
        db.session.commit()
    except Exception as e:
        print(F"Error processing DataPoints & Indicators: Error{e}")

def seed_indicator_data(db):
    df = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/Full_codebook_circular_88_SOCR_new.xlsx")). \
        fillna(value='')
    print("Seeding Unique Columns")

    for data in df["SDG_theme"].unique():
        if data:
            sdg_theme = CbSDGTheme()
            sdg_theme.name = data.strip()
            db.session.add(sdg_theme)

    for data in df["SOCR_theme"].unique():
        if data:
            socr_theme = CbTheme()
            socr_theme.name = data.strip()
            db.session.add(socr_theme)

    for data in df["C88_theme"].unique():
        if data:
            c88_theme = CbCircularTheme()
            c88_theme.name = data.strip()
            db.session.add(c88_theme)

    for data in df["VarType"].unique():
        if data:
            value_type = CbValueType()
            value_type.name = data.strip()
            db.session.add(value_type)

    for data in df["Source"].unique():
        if data:
            source = CbSource()
            source.name = data.strip()
            db.session.add(source)

    for data in df["Unit_of_measurement"].unique():
        if data:
            unit = CbUnit()
            unit.name = data.strip()
            db.session.add(unit)
    db.session.commit()
    records_indicator_data = []
    print("Seeding Indicators")
    for index, row in df.iterrows():
        if str(row["Indicator_short_name"]).strip() != "":
            indicator_code = str(row["Variable_Code"]).strip()
            # indicator = db.session.query(CbIndicator).filter(CbIndicator.code == indicator_code).first()
            # if not indicator:
            indicator = CbIndicator()
            indicator.code = str(row["Variable_Code"]).strip()
            indicator.name = str(row["Indicator_short_name"]).strip()
            # db.session.flush()
            message = F"Indicator  {indicator.name} created"
            # else:
            #     message = F"Indicator  {indicator.name} Updated"
            indicator.group_code = str(row["Indicator_Group"]).strip()
            indicator.sub_number = str(row["Sub_Number"]).strip()
            indicator.in_codebook = str(row["In_Codebook"]).strip()
            indicator.c88_theme = str(row["C88_theme"]).strip()
            indicator.socr_theme = str(row["SOCR_theme"]).strip()
            indicator.sdg_theme = str(row["SDG_theme"]).strip()
            indicator.indicator_formula = str(row["Indicator_formula"]).strip()
            indicator.notes_on_calculation = str(row["Notes_on_calculation"]).strip()
            indicator.frequency_of_collection = str(row["Frequency_of_collection"]).strip()
            indicator.readiness = str(row["Readiness"]).strip()
            indicator.reporting_responsibility = str(row["Reporting_responsibility"]).strip()
            indicator.reporting_requirement = str(row["Reporting_requirement"]).strip()
            indicator.definition = str(row["Definition"]).strip()
            indicator.data_prep = str(row["Data_Prep"]).strip()
            indicator.url_link = str(row["URL_Link"]).strip()
            indicator.period = str(row["Period"]).strip()
            indicator.source_gather = str(row["Source_Gather"]).strip()
            indicator.validation_comments = str(row["Validation_Comments"]).strip()
            indicator.comments = str(row["Comments"]).strip()

            indicator.automatable = str(row["Automatable"]).strip()
            indicator.expandable = str(row["Expandable"]).strip()
            indicator.granularity = str(row["Granularity"]).strip()
            indicator.gathering_method = str(row["Gathering_Method"]).strip()
            # Association data below
            theme_id = db.session.query(CbTheme.id).filter(CbTheme.name == str(row["SOCR_theme"]).strip()).first()
            indicator.theme_id = theme_id
            c88_theme_id = db.session.query(CbCircularTheme.id).filter(CbCircularTheme.name == str(row["C88_theme"]).strip()).first()
            indicator.circular_theme_id = c88_theme_id
            sdg_theme_id = db.session.query(CbSDGTheme.id).filter(CbSDGTheme.name == str(row["SDG_theme"]).strip()).first()
            indicator.sdg_theme_id = sdg_theme_id
            source_id = db.session.query(CbSource.id).filter(CbSource.name == str(row["Source"]).strip()).first()
            indicator.source_id = source_id
            value_type_id = db.session.query(CbValueType.id).filter(CbValueType.name == str(row["VarType"]).strip()).first()
            indicator.value_type_id = value_type_id
            unit_id = db.session.query(CbUnit.id).filter(CbUnit.name == str(row["Unit_of_measurement"]).strip()).first()
            indicator.unit_id = unit_id
            records_indicator_data.append(indicator)
            # db.session.add(indicator)
            print(message)
            if len(records_indicator_data) > CHUNK_SIZE:
                db.session.bulk_save_objects(records_indicator_data)
                db.session.commit()
                records_indicator_data.clear()
    db.session.bulk_save_objects(records_indicator_data)
    db.session.commit()

# def seed_total_households_municipality(db):
#     indicators = db.session.query(CbIndicator).filter(CbIndicator.name == "Total number of households in the municipality").all()
#     df = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/municipality_households.xlsx")). \
#         fillna(value='')
#     records_households=[]
#     for indicator in indicators:
#         if not indicator.indicator_data:
#             for index, row in df.iterrows():
#                 if row["value"] and not isinstance(row["value"], str):
#                     data_point = CbDataPoint()
#                     data_point.value = row["value"]
#                     # Setup date start & end
#                     try:
#                         date_start = datetime.date(int(row["year_start"]), int(row["month_start"]), int(row["day_start"]))
#                         data_point.start_dt = date_start
#                         date_end = datetime.date(int(row["year_end"]), int(row["month_end"]), int(row["day_end"]))
#                         data_point.end_dt = date_end
#                     except Exception as e:
#                         print(e)
#                     data_point.indicator_id = indicator.id
#                     region_id = db.session.query(CbRegion.id).filter(CbRegion.name == str(row["region_name"]).strip())
#                     data_point.region_id = region_id
#                     region_type_id = db.session.query(CbRegionType.id).filter(CbRegionType.name == str(row["region_type"]).strip())
#                     data_point.region_type_id = region_type_id
#                     # db.session.add(data_point)
#                     records_households.append(data_point)
#                     if len(records_households) > CHUNK_SIZE:
#                         db.session.bulk_save_objects(records_households)
#                         db.session.commit()
#                         records_households.clear()
#             print(F" {indicator.name} - {indicator.id} updated")
#     try:
#         db.session.bulk_save_objects(records_households)
#         db.session.commit()
#     except Exception as e:
#         print(e)
# Next up
def create_themes(db):
    """"Use this to create additional theme tables"""
    df_new = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/Full_codebook_circular_88_SOCR.xlsx")). \
        fillna(value='')
    for data in df_new["C88_theme"].unique():
        if data:
            c_theme = CbCircularTheme()
            c_theme.name = data.strip()
            db.session.add(c_theme)
    for data in df_new["SDG_theme"].unique():
        if data:
            sdg_theme = CbSDGTheme()
            sdg_theme.name = data.strip()
            db.session.add(sdg_theme)
    indicator = CbIndicator()
    row = {}
    sdg_theme_id = db.session.query(CbSDGTheme.id).filter(CbSDGTheme.name == str(row["SDG_theme"]).strip())
    indicator.sdg_theme_id = sdg_theme_id
    c_theme_id = db.session.query(CbCircularTheme.id).filter(CbCircularTheme.name == str(row["C88_theme"]).strip())
    indicator.circular_theme_id = c_theme_id