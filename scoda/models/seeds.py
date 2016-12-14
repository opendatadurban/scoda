from . import *  # noqa
from ..app import app
import pandas as pd
from numpy import isnan

regions = {'City of Johannesburg': 1,
           'City of Tshwane': 2,
           'City of Cape Town': 3,
           'EThekwini Municipality': 4,
           'Ekurhuleni Municipality': 5,
           'Nelson Mandela Bay Municipality': 6,
           'Buffalo City Municipality': 7,
           'Mangaung Municipality': 8,
           'Msunduzi Municipality': 9,
           'Western Cape': 10,
           'Eastern Cape': 11,
           'Northern Cape': 12,
           'Free State': 13,
           'KwaZulu-Natal': 14,
           'North West': 15,
           'Gauteng': 16,
           'Mpumalanga': 17,
           'Limpopo': 18,
           'National': 19
           }

types = {'City': 1,
         'Province': 2,
         'National': 3
         }


dfi = pd.read_csv('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/Indicators.csv')
df = pd.read_csv('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/Manicured_final.csv')
mapping = {}
for i in range(0, len(dfi)):
    index = dfi.iloc[i][0]
    indicator = dfi.iloc[i][2]
    mapping[index] = indicator


def seed_db(db):
    """ Add seed entities to the database. """
    with app.app_context():
        for x in User.create_defaults():
            db.session.add(x)
        print 'Created user table...'
        for x in Role.create_defaults():
            db.session.add(x)
        print 'Created role table...'
        for x in DataSet.create_defaults():
            db.session.add(x)
        print 'Created dataset table...'
        for x in Indicator.create_defaults():
            db.session.add(x)
        print 'Created indicator table...'
        for x in Region.create_defaults():
            db.session.add(x)
        print 'Created region table...'
        for x in Type.create_defaults():
            db.session.add(x)
        print 'Created type table...'
        db.session.commit()
        print 'Populating datapoints...'
        for i in range(0, len(df)):
            dataset_id = df.iloc[i][0]
            indicator_id = mapping[df.iloc[i][0]]
            region_id = regions[df.iloc[i][1]]
            type_id = types[df.iloc[i][2]]
            for y, c in zip(range(1996, 2018), range(3, 25)):
                if isnan(df.iloc[i][c]):
                    pass
                else:
                    point = DataPoint()
                    value = df.iloc[i][c]
                    year = y
                    point.dataset_id = int(dataset_id)
                    point.indicator_id = int(indicator_id)
                    point.region_id = int(region_id)
                    point.type_id = int(type_id)
                    point.value = float(value)
                    point.year = int(year)
                    db.session.add(point)
        db.session.commit()
