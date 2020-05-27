from . import *  # noqa
from ..app import app
import pandas as pd
from numpy import isnan, sort, genfromtxt, zeros, sum
import geojson
from sqlalchemy import func
from geomet import wkt

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

themes = {'Demographics': 1,
          'Productive': 2,
          'Sustainable': 3,
          'Inclusive': 4,
          'Well-governed': 5
          }

dfi = pd.read_csv('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/Indicators.csv')
df = pd.read_csv('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/Manicured_final.csv')
dfm = pd.read_csv('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/Indicators_Metadata.csv').\
    fillna(value='Unspecified')

def seed_db(db):
    """ Add seed entities to the database. """
    with app.app_context():
        for x in User.create_defaults():
            db.session.add(x)
        print ('Created user table...')
        for x in Role.create_defaults():
            db.session.add(x)
        print ('Created role table...')
        for x in DataSet.create_defaults():
            db.session.add(x)
        print ('Created dataset table...')
        # for x in Indicator.create_defaults():
        #     db.session.add(x)
        for x in dfm.values.tolist():
            ind = Indicator()
            ind.in_name = x[0]
            ind.unit = x[1]
            ind.definition = x[2]
            ind.theme = x[3]
            ind.sub_theme = x[4]
            ind.source = x[5]
            ind.frequency = x[6]
            db.session.add(ind)
        print ('Created indicator table...')
        for x in Region.create_defaults():
            db.session.add(x)
        print ('Created region table...')
        for x in WaziRegion.create_defaults():
            db.session.add(x)
        print ('Created Wazi-region table...')
        for x in Type.create_defaults():
            db.session.add(x)
        print ('Created type table...')
        for x in Theme.create_defaults():
            db.session.add(x)

        print ('Created theme table...')
        db.session.flush()
        db.session.commit()
        print ('Populating datapoints...')

        mapping = {}
        mapping_theme = {}
        for i in range(0, len(dfi)):
            index = dfi.iloc[i][0]
            indicator = dfi.iloc[i][2]
            theme = dfi.iloc[i][3]
            mapping[index] = indicator
            mapping_theme[index] = theme

        for i in range(0, len(df)):
            dataset_id = df.iloc[i][0]
            indicator_id = mapping[df.iloc[i][0]]
            region_id = regions[df.iloc[i][1]]
            type_id = types[df.iloc[i][2]]
            theme_id = mapping_theme[df.iloc[i][0]]
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
                    point.theme_id = int(theme_id)
                    point.value = float(value)
                    point.year = int(year)
                    db.session.add(point)

        db.session.flush()
        db.session.commit()

        data = geojson.load(open('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/metro_salc_geo.json'))

        data2 = genfromtxt('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/jhbpopests_clean.csv', delimiter=',')

        parser = {}
        for i, I in enumerate(sort(list(set(data2[:, 2])))):
            parser[int(I)] = {}
            parser[int(I)]['includes'] = []
            parser[int(I)]['city_ref'] = i

        for i in range(len(data2)):
            parser[int(data2[i, 2])]['includes'].append(data2[i, 1])

        parser2 = {}

        for i in data2:
            parser2[int(i[1])] = list(i[21:])

        print ('Populating city enumerator GIS data...')
        for poly in data['features']:
            if poly['properties']['dc_mdb_c'] == 'JHB':
                area = Area()
                for i in parser:
                    if int(poly['properties']['sal_code']) in parser[i]['includes']:
                        area.ward_code = i
                        area.city_ward_code = parser[i]['city_ref'] + 1

                area.sal_code = int(poly['properties']['sal_code'])
                area.region_id = 1
                area.data = parser2[int(poly['properties']['sal_code'])]
                polygon = wkt.dumps(poly['geometry'], decimals=6)
                area.geom = polygon
                db.session.add(area)
            else:
                pass
        db.session.flush()
        db.session.commit()
        del data
        del data2

        print ('Populating city ward GIS data...')
        data3 = geojson.load(open('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/MunicipalWards2016.json', 'r'))

        for i in data3['features']:
            if 'Johannesburg' in i['properties']['MunicName']:
                ward = Ward()
                ward.ward_code = int(i['properties']['WardID'])
                ward.city_ward_code = int(i['properties']['WardNo'])
                ward.region_id = 1

                D = zeros((len(parser[int(i['properties']['WardID'])]['includes']), 35))
                for j, J in enumerate(parser[int(i['properties']['WardID'])]['includes']):
                    D[j, :] = parser2[J]
                ward.data = list(sum(D, axis=0))

                ward.geom = wkt.dumps(i['geometry'], decimals=6)
                db.session.add(ward)
        db.session.flush()
        db.session.commit()
        del data3


