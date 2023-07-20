from . import *  # noqa
from ..app import app
import pandas as pd
import datetime
import json

def seed_temp_indicators(db):
    df = pd.read_excel('%s/data/%s' % (app.root_path, "inflation_DB_ckan.xlsx")). \
        fillna(value='')
    indicator_list = []
    for data in df["indicator_name"].unique():
        indicator_list.append(data)

    print(indicator_list)
    for index, row in df.iterrows():
        if row["value"] and not isinstance(row["value"], str):
            data_point = CbTempIndicators()
            data_point.value = row["value"]
            # Setup date start & end
            try:
                datess = datetime.datetime.strptime(row["temporal"], '%Y-%m-%d')
                data_point.start_dt = int(datess.year)
                data_point.year = int(datess.year)
            except Exception as e:
                print(e)
            data_point.re_name = row["class_name"]
            data_point.ds_name = row["indicator_name"]
            data_point.indicator_id = indicator_list.index(row["indicator_name"]) + 1
            db.session.add(data_point)
        print(F" {index} updated")
    try:
        db.session.commit()
    except Exception as e:
        print(e)