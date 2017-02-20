from . import *  # noqa
from ..app import app
import pandas as pd
from numpy import genfromtxt, zeros, sum
import geojson
from geomet import wkt

def seed_db(db):
    """ Add ETH seed entities to the database. """
    with app.app_context():

        data = geojson.load(open('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/metro_salc_geo.json'))

        data2 = genfromtxt('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/exporteth.csv', delimiter=',',
                           skip_header=1)

        parser = {}
        for i, I in enumerate(range(59500001, 59500111)):
            parser[int(I)] = {}
            parser[int(I)]['includes'] = []
            parser[int(I)]['city_ref'] = i - 1

        for i in range(len(data2)):
            parser[int(data2[i, 2])]['includes'].append(data2[i, 1])

        parser2 = {}

        for i in data2:
            parser2[int(i[1])] = list(i[18:])

        print 'Populating ETH enumerator GIS data...'
        for poly in data['features']:
            if poly['properties']['dc_mdb_c'] == 'ETH':
                area = Area()
                for i in parser:
                    if int(poly['properties']['sal_code']) in parser[i]['includes']:
                        area.ward_code = i
                        area.city_ward_code = parser[i]['city_ref'] + 1

                area.sal_code = int(poly['properties']['sal_code'])
                area.region_id = 4
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

        print 'Populating ETH ward GIS data...'
        data3 = geojson.load(open('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/MunicipalWards2016.json', 'r'))

        for i in data3['features']:
            if 'eThekwini' in i['properties']['MunicName']:
                ward = Ward()
                ward.ward_code = int(i['properties']['WardID'])
                ward.city_ward_code = int(i['properties']['WardNo'])
                ward.region_id = 4

                D = zeros((len(parser[int(i['properties']['WardID'])]['includes']), 35))
                for j, J in enumerate(parser[int(i['properties']['WardID'])]['includes']):
                    D[j, :] = parser2[J]
                ward.data = list(sum(D, axis=0))

                ward.geom = wkt.dumps(i['geometry'], decimals=6)
                db.session.add(ward)
        db.session.flush()
        db.session.commit()
