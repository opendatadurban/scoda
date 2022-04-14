from . import *  # noqa
from ..app import app
import pandas as pd
import datetime
import json

def seed_temp_indicators(db):
    df = pd.read_excel('%s/data/%s' % (app.root_path, "codebook-data/temp/indicators_db_seed.xlsx")). \
        fillna(value='')
    for index, row in df.iterrows():
        if row["value"] and not isinstance(row["value"], str):
            data_point = CbTempIndicators()
            data_point.value = row["value"]
            # Setup date start & end
            try:
                data_point.start_dt = int(row["start_dt"])
                data_point.year = int(row["year"])
            except Exception as e:
                print(e)
            data_point.re_name = row["re_name"]
            data_point.ds_name = row["ds_name"]
            data_point.indicator_id = row["indicator_id"]
            db.session.add(data_point)
        print(F" {row} updated")
    try:
        db.session.commit()
    except Exception as e:
        print(e)