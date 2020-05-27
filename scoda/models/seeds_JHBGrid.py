from . import *  # noqa
from ..app import app
import pandas as pd
from numpy import genfromtxt, zeros, sum
import geojson
from geomet import wkt

def seed_db(db):
    """ Add JHB grid seed entities to the database. """
    with app.app_context():

        data = geojson.load(open('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/JHB_Grid.json'))

        data2 = genfromtxt('C:/Users/Wasim/Documents/GitHub/scoda/scoda/data/jhbgridmodel.csv', delimiter=',',
                           skip_header=1)

        print('Populating JHB grid data...')
        for D, poly in zip(data2, data['features']):
                print(D[1:])
                grid = Grid()
                grid.city_grid_id = D[1]
                grid.region_id = 1
                grid.data = list(D[12:])
                grid.reference = float(D[6])
                polygon = wkt.dumps(poly['geometry'], decimals=6)
                grid.geom = polygon
                db.session.add(grid)

        db.session.flush()
        db.session.commit()
        del data
        del data2
