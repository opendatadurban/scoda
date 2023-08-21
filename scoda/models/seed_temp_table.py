from . import *  # noqa
from ..app import app
import pandas as pd
CHUNK_SIZE = 100000
records_households = []

def seed_temp_indicators(db):
    # df = pd.read_excel('%s/data/%s' % (app.root_path, "inflation_DB_ckan.xlsx")). \
    #     fillna(value='')
    df = pd.read_parquet('%s/data/%s' % (app.root_path, "World_Bank_Gender_Stats_Employment_Time_Use.parquet"), engine='pyarrow')
    indicator_list = []
    for data in df["indicator_name"].unique():
        indicator_list.append(data)
        indicator = Indicator()
        indicator.in_name = data.strip()
        db.session.add(indicator)
        db.session.commit()
    for index, row in df.iterrows():
        if row["Value"] and not isinstance(row["Value"], str):
            data_point = CbTempIndicators()
            data_point.value = row["Value"]
            year_data = row["temporal"]
            # Setup date start & end
            try:
                # datess = datetime.datetime.strptime(year_data, '%Y-%m-%d')
                data_point.start_dt = int(year_data)
                data_point.year = int(year_data)
            except Exception as e:
                print(e)
            data_point.re_name = row["class_name"]
            data_point.ds_name = row["indicator_name"].strip()
            data_point.indicator_id = indicator_list.index(row["indicator_name"]) + 1
            records_households.append(data_point)
            if len(records_households) > CHUNK_SIZE:
                db.session.bulk_save_objects(records_households)
                db.session.commit()
                records_households.clear()
        print(F" {index} updated")
    try:
        db.session.bulk_save_objects(records_households)
        db.session.commit()
    except Exception as e:
        print(e)