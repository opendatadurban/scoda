from . import *  # noqa
from ..app import app
import pandas as pd
from numpy import genfromtxt, zeros, sum, nan_to_num, isnan
import geojson
from geomet import wkt

def seed_db(db):
    """ Add JHB grid seed entities to the database. """
    with app.app_context():

        data = geojson.load(open('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/ETH_Grid.json'))

        data2 = nan_to_num(genfromtxt('C:/Users/mrade_000/Documents/GitHub/scoda/scoda/data/ethgridplot.csv', delimiter=',',
                           skip_header=1))

        print 'Populating ETH grid data...'
        for D, poly in zip(data2, data['features']):
                grid = Grid()
                grid.city_grid_id = D[1]
                grid.region_id = 4
                grid.data = [float(D[19])]
                grid.reference = float(D[18])
                polygon = wkt.dumps(poly['geometry'], decimals=6)
                grid.geom = polygon
                db.session.add(grid)

        db.session.flush()
        db.session.commit()
        del data
        del data2
