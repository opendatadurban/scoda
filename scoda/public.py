# -*- coding: utf-8 -*-

from scoda.app import app
from flask import request, url_for, redirect, flash, make_response, session, render_template, jsonify, Response, \
    send_file
from flask_security import current_user
from itertools import izip_longest
from sqlalchemy.sql import select
from sqlalchemy import func
from .models import db
from .models import *
from .models.user import UserAnalysis
from .models.datasets import ExploreForm
from .models.maps import MapForm, NightFormETH, NightFormJHB
from pandas import read_sql_query
import gviz_api
import geojson, json
import pandas as pd


def grouper(iterable, n, fillvalue=None):
    "Collect data into fixed-length chunks or blocks"
    # grouper('ABCDEFG', 3, 'x') --> ABC DEF Gxx"
    args = [iter(iterable)] * n
    return izip_longest(*args, fillvalue=fillvalue)


@app.route('/explore', methods=['GET', 'POST'])
def explore():
    analyses = []

    if current_user.is_authenticated:
        query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
            .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

        analyses = []

        for i in grouper(query, 4):
            analyses.append(i)

    session['explore'] = []
    form = ExploreForm()
    status = 200
    plot = 0
    tour = 1
    if request.method == 'POST':
        if form.validate():
            plot = 1
            tour = 2

            ind = form.indicator_id.data

            query = db.session.query(Region.re_name, DataPoint.year, DataSet.ds_name, DataPoint.value). \
                filter(DataPoint.indicator_id == ind).filter(DataPoint.dataset_id == DataSet.id). \
                filter(DataPoint.region_id == Region.id)

            indicator = Indicator.query.get(ind)

            df = read_sql_query(query.statement, query.session.bind)
            table = []
            years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]

            cities = [c.encode('utf-8') for c in cities]

            options_list = [{'optid': i, 'optname': d} for i, d in enumerate(datasets, start=1)]
            years_list = [{'optid': i, 'optname': 'Year: %s' % d} for i, d in enumerate(sorted(years), start=1)]

            plot_type = 1
            if (len(datasets) > 1) or (len(years) == 1):
                plot_type = 2

            colours = ['#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0', '#8bc34a',
                       '#ffeb3b', '#9e9e9e', '#3f51b5', '#e91e63']
            series = {i: {'color': colours[i]} for i in range(len(datasets))}
            view = range(2, len(datasets) + 2)
            view.insert(0, 0)

            minVal = min(map(float, list(df.value.unique())))
            maxVal = max(map(float, list(df.value.unique()))) * 1.1

            head = ['City', 'Year']
            for i in datasets:
                head.append(str(i))
            table.append(head)

            if plot_type == 1:
                df = df.iloc[:, (0, 1, 3)]

                schema = [('City', 'string'), ('Year', 'string'), ('%s' % datasets[0], 'number')]

                data_table = gviz_api.DataTable(schema)
                data_table.LoadData(df.values)
                table = data_table.ToJSon(columns_order=('City', '%s' % datasets[0], 'Year'))

            else:
                for c in cities:
                    for y in years:
                        row = [str(c), str(y)]
                        for d in datasets:
                            datapoint = df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]
                            if len(datapoint) == 0:
                                row.append(None)
                            else:
                                row.append(
                                    float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (
                                    df["ds_name"] == d), "value"]))
                        table.append(row)

            return render_template('explore/explore.html', form=form, plot=plot, table=table, colours=colours,
                                   year=str(max(years)), series=series, view=view, plot_type=plot_type, min=minVal,
                                   max=maxVal, cities=cities, options_list=options_list, years_list=years_list,
                                   tour=tour, indicator=indicator, analyses=analyses)
        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:
        return render_template('explore/explore.html', form=form, tour=tour)

    if not request.is_xhr:
        resp = make_response(
            render_template('explore/explore.html', form=form, plot=plot, tour=tour, analyses=analyses))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/demographics/<region_id>/<city_ward_code>/download', methods=['GET'])
def demographics_download(region_id, city_ward_code):
    region = Region.query.get(region_id).re_name

    if city_ward_code == 'None':
        query = db.session.query(Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == region_id).all()

        df = pd.DataFrame()
        df['Year'] = range(1996, 2031)
        for g in query:
            df['%s - Ward %s' % (region, g[1])] = list(g[0])

    else:
        query = db.session.query(Ward.data, Ward.city_ward_code) \
            .filter(Ward.city_ward_code == city_ward_code) \
            .filter(Ward.region_id == region_id).all()

        df = pd.DataFrame()
        df['Year'] = range(1996, 2031)
        for g in query:
            df['%s - Ward %s' % (region, g[1])] = list(g[0])

    return Response(df.to_csv(index=False), mimetype="text/csv",
                    headers={"Content-disposition": "attachment; filename=demographics.csv"})


@app.route('/demographics', methods=['GET', 'POST'])
def demographics():
    analyses = []

    if current_user.is_authenticated:
        query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
            .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

        analyses = []

        for i in grouper(query, 4):
            analyses.append(i)

    session['demo'] = []

    if 'maps' not in session.keys():
        session['maps'] = {0: {}, 1: {}}

    form1 = MapForm(prefix='form1', region_id='1', year=1)

    status = 200
    tour = 1
    geometries1 = {}

    forms = [form1]
    if request.method == 'POST':

        if all(f.validate() for f in forms):

            for f, F in enumerate(forms):
                for field in F:
                    if str(field.data) == 'None':
                        field.data = session['maps'][str(f)][field.name[6:]]
                    else:
                        session['maps'][str(f)][field.name[6:]] = field.data

            tour = 0
            # query = db.session.query(Area.geom.ST_AsGeoJSON(), Area.data)
            year1 = int(form1.year.data)
            year_ind1 = range(1996, 2031)

            if form1.city_ward_code.data == '':

                query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
                    filter(Ward.region_id == form1.region_id.data)

                geometries1 = {"type": "FeatureCollection",
                               "features": []}
                for g in query:
                    d = json.loads(g[0])

                    if year1 == 0:
                        flow = 0
                    else:
                        flow = round(g[1][year1] - g[1][year1 - 1])

                    geometries1['features'].append({"type": "Feature", "properties": {"density": round(g[1][year1]),
                                                                                      "flow": flow,
                                                                                      "name": 'Ward %s' % g[2],
                                                                                      "year": year_ind1[year1]},
                                                    "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.data).filter(Ward.region_id == form1.region_id.data).all()
                region = db.session.query(Region.re_name).filter(Region.id == form1.region_id.data).first()

                results = []

                for r in query:
                    row = [val for val in list(r)[0]]
                    results.append(row)

                df = pd.DataFrame(results).fillna(value=0)

                table1 = [['Year', '%s' % str(region[0])]]

                for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
                    table1.append([str(y), val])

                m1 = 1.05 * max(df.sum(axis=0).tolist())

            else:
                query = db.session.query(Area.geom.ST_AsGeoJSON(), Area.data, Area.city_ward_code) \
                    .filter(Area.city_ward_code == form1.city_ward_code.data) \
                    .filter(Area.region_id == form1.region_id.data)

                geometries1 = {"type": "FeatureCollection",
                               "features": []}

                for g in query:
                    d = json.loads(g[0])

                    if year1 == 0:
                        flow = 0
                    else:
                        flow = round(g[1][year1] - g[1][year1 - 1])

                    geometries1['features'].append(
                        {"type": "Feature", "properties": {"density": round(g[1][year1]),
                                                           "flow": flow,
                                                           "name": 'Area %s' % g[2],
                                                           "year": year_ind1[year1]},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.data).filter(Ward.city_ward_code == form1.city_ward_code.data). \
                    filter(Ward.region_id == form1.region_id.data).first()

                region = db.session.query(Region.re_name).filter(Region.id == form1.region_id.data).first()
                region2 = db.session.query(Ward.city_ward_code).filter(Ward.city_ward_code == form1.city_ward_code.data) \
                    .first()

                results = []

                for r in query:
                    row = [val for val in list(r)]
                    results.append(row)

                df = pd.DataFrame(results).fillna(value=0)

                table1 = [['Year', '%s - Ward %s' % (str(region[0]), str(region2[0]))]]

                for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
                    table1.append([str(y), val])

                m1 = 1.05 * max(df.sum(axis=0).tolist())

            query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == form1.region_id.data).order_by(
                Ward.city_ward_code).distinct()

            form1.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all()
                                                                                                             , start=1)]
            form1.city_ward_code.choices.insert(0, ('', 'View All'))

            return render_template('demographics/demographics.html', form1=form1, geometries1=geometries1,
                                   table1=table1, tour=tour, max1=m1, region1=form1.region_id.data,
                                   ward1=form1.city_ward_code.data, analyses=analyses)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:

        session['maps'][0] = {'city_ward_code': '', 'region_id': 1, 'year': 1}
        session['maps'][1] = {'city_ward_code': '', 'region_id': 4, 'year': 1}

        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)

        geometries1 = {"type": "FeatureCollection",
                       "features": []}

        geometries2 = {"type": "FeatureCollection",
                       "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries1['features'].append({"type": "Feature", "properties": {"density": round(g[1][1]),
                                                                              "flow": round(g[1][1] - g[1][0]),
                                                                              "name": 'Ward %s' % g[2],
                                                                              "year": 1997},
                                            "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        query = db.session.query(Ward.data).filter(Ward.region_id == 1).all()

        results = []

        for r in query:
            row = [val for val in list(r)[0]]
            results.append(row)

        df = pd.DataFrame(results).fillna(value=0)

        table1 = [['Year', 'Johannesburg']]

        for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
            table1.append([str(y), val])

        m = 1.05 * max(df.sum(axis=0).tolist())

        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 4)

        for g in query:
            d = json.loads(g[0])
            geometries2['features'].append({"type": "Feature", "properties": {"density": round(g[1][1]),
                                                                              "flow": round(g[1][1] - g[1][0]),
                                                                              "name": 'Ward %s' % g[2],
                                                                              "year": 1997},
                                            "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        query = db.session.query(Ward.data).filter(Ward.region_id == 4).all()

        results = []

        for r in query:
            row = [val for val in list(r)[0]]
            results.append(row)

        df = pd.DataFrame(results).fillna(value=0)

        table2 = [['Year', 'EThekwini']]

        for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
            table2.append([str(y), val])

        m2 = 1.05 * max(df.sum(axis=0).tolist())

        return render_template('demographics/demographics.html', form1=form1, geometries1=geometries1,
                               tour=tour, table1=table1, max1=m, region1=1, ward1=None, ward2=None, analyses=analyses
                               )

    if not request.is_xhr:
        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)
        geometries1 = {"type": "FeatureCollection",
                       "features": []}

        geometries2 = {"type": "FeatureCollection",
                       "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries1['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

            geometries2['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        query = db.session.query(Ward.data).filter(Ward.region_id == 1).all()

        results = []

        for r in query:
            row = [val for val in list(r)[0]]
            results.append(row)

        df = pd.DataFrame(results).fillna(value=0)

        table1 = [['Year', 'Johannesburg']]

        for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
            table1.append([str(y), val])

        m = 1.05 * max(df.sum(axis=0).tolist())

        resp = make_response(render_template('demographics/demographics.html', form1=form1,
                                             geometries1=geometries1, table1=table1,
                                             tour=tour, max1=m, region1=1,
                                             ward1=None, analyses=analyses))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/nightlights_jhb', methods=['GET', 'POST'])
def demographics_night_jhb():
    analyses = []

    if current_user.is_authenticated:
        query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
            .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

        analyses = []

        for i in grouper(query, 4):
            analyses.append(i)

    session['night'] = []

    form = NightFormJHB()
    status = 200
    tour = 1

    if request.method == 'POST':

        if form.validate():

            tour = 0

            if form.city_ward_code.data == '':

                query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference). \
                    filter(Grid.region_id == 1)

                geometries = {"type": "FeatureCollection",
                              "features": []}

                bias_ind = [x / 10.0 for x in range(5, 21, 1)].index(float(form.grid_bias.data))

                for g in query:

                    d = json.loads(g[0])

                    geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][bias_ind] - g[3]),
                                                                                     "name": 'Grid %s' % g[2],
                                                                                     "year": 2016},
                                                   "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 1).order_by(
                    Ward.city_ward_code).distinct()

                form.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in
                                               enumerate(query.all()
                                                         , start=1)]
                form.city_ward_code.choices.insert(0, ('', 'View All'))

                return render_template('demographics/demographics_night.html', form=form, geometries=geometries,
                                       bias_val=form.grid_bias.data)

            else:

                w = db.session.query(Ward.id).filter(Ward.city_ward_code == form.city_ward_code.data)\
                    .filter(Ward.region_id == 1).first()

                w = Ward.query.get(w[0])

                query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference) \
                    .filter(Grid.geom.intersects(w.geom))

                geometries = {"type": "FeatureCollection",
                              "features": []}

                bias_ind = [x / 10.0 for x in range(5, 21, 1)].index(float(form.grid_bias.data))

                for g in query:
                    d = json.loads(g[0])

                    geometries['features'].append(
                        {"type": "Feature", "properties": {"density": round(g[1][bias_ind] - g[3]),
                                                           "name": 'Grid %s' % g[2],
                                                           "year": 2016},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code)\
                    .filter(Ward.city_ward_code == form.city_ward_code.data).filter(Ward.region_id == 1)

                geometries2 = {"type": "FeatureCollection",
                               "features": []}

                for g in query:
                    d = json.loads(g[0])

                    geometries2['features'].append(
                        {"type": "Feature", "properties": {"density": 0,
                                                           "name": 'Ward %s' % form.city_ward_code.data,
                                                           "year": 2016},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 1).order_by(
                    Ward.city_ward_code).distinct()

                form.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all()
                                                                                                                , start=1)]
                form.city_ward_code.choices.insert(0, ('', 'View All'))

                return render_template('demographics/demographics_night.html', form=form, geometries=geometries,
                                   bias_val=form.grid_bias.data, geometries2=geometries2, ward=form.city_ward_code.data)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:

        query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference). \
            filter(Grid.region_id == 1)

        geometries = {"type": "FeatureCollection",
                      "features": []}

        for g in query:
            d = json.loads(g[0])

            geometries['features'].append({"type": "Feature", "properties": {"density": g[1][0] - g[3],
                                                                             "name": 'Grid %s' % g[2],
                                                                             "year": 2016},
                                           "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        return render_template('demographics/demographics_night.html', form=form, bias_val=0.5, geometries=geometries,
                               analyses=analyses)

    if not request.is_xhr:
        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)
        geometries1 = {"type": "FeatureCollection",
                       "features": []}

        geometries2 = {"type": "FeatureCollection",
                       "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries1['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

            geometries2['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        query = db.session.query(Ward.data).filter(Ward.region_id == 1).all()

        results = []

        for r in query:
            row = [val for val in list(r)[0]]
            results.append(row)

        df = pd.DataFrame(results).fillna(value=0)

        table1 = [['Year', 'Johannesburg']]

        for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
            table1.append([str(y), val])

        m = 1.05 * max(df.sum(axis=0).tolist())

        resp = make_response(render_template('demographics/demographics.html', form1=form1, form2=form2,
                                             geometries1=geometries1, geometries2=geometries2, table1=table1,
                                             table2=table1, tour=tour, max1=m, max2=m, region1=1, region2=1,
                                             ward1=None, ward2=None, analyses=analyses))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/nightlights_eth', methods=['GET', 'POST'])
def demographics_night_eth():
    analyses = []

    if current_user.is_authenticated:
        query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
            .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

        analyses = []

        for i in grouper(query, 4):
            analyses.append(i)

    session['night'] = []

    form = NightFormETH()
    status = 200
    tour = 1

    if request.method == 'POST':

        if form.validate():

            tour = 0

            if form.city_ward_code.data == '':

                query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference). \
                    filter(Grid.region_id == 4)

                geometries = {"type": "FeatureCollection",
                              "features": []}

                for g in query:

                    d = json.loads(g[0])

                    geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][0]-g[3]),
                                                                                     "name": 'Grid %s' % g[2],
                                                                                     "year": 2016},
                                                   "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 4).order_by(
                    Ward.city_ward_code).distinct()

                form.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in
                                               enumerate(query.all()
                                                         , start=1)]
                form.city_ward_code.choices.insert(0, ('', 'View All'))

                return render_template('demographics/demographics_night_ETH.html', form=form, geometries=geometries)

            else:

                w = db.session.query(Ward.id).filter(Ward.city_ward_code == form.city_ward_code.data)\
                    .filter(Ward.region_id == 4).first()

                w = Ward.query.get(w[0])

                query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference) \
                    .filter(Grid.geom.intersects(w.geom)).filter(Grid.region_id == 4)

                geometries = {"type": "FeatureCollection",
                              "features": []}

                for g in query:
                    d = json.loads(g[0])

                    geometries['features'].append(
                        {"type": "Feature", "properties": {"density": round(g[1][0]-g[3]),
                                                           "name": 'Grid %s' % g[2],
                                                           "year": 2016},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code)\
                    .filter(Ward.city_ward_code == form.city_ward_code.data).filter(Ward.region_id == 4)

                geometries2 = {"type": "FeatureCollection",
                               "features": []}

                for g in query:
                    d = json.loads(g[0])

                    geometries2['features'].append(
                        {"type": "Feature", "properties": {"density": 0,
                                                           "name": 'Ward %s' % form.city_ward_code.data,
                                                           "year": 2016},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

                query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 4).order_by(
                    Ward.city_ward_code).distinct()

                form.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all()
                                                                                                                , start=1)]
                form.city_ward_code.choices.insert(0, ('', 'View All'))

                return render_template('demographics/demographics_night_ETH.html', form=form, geometries=geometries,
                                   geometries2=geometries2, ward=form.city_ward_code.data)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:

        query = db.session.query(Grid.geom.ST_AsGeoJSON(), Grid.data, Grid.city_grid_id, Grid.reference). \
            filter(Grid.region_id == 4)

        geometries = {"type": "FeatureCollection",
                      "features": []}

        for g in query:
            d = json.loads(g[0])

            geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][0]-g[3]),
                                                                             "name": 'Grid %s' % g[2],
                                                                             "year": 2016},
                                           "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        return render_template('demographics/demographics_night_ETH.html', form=form, geometries=geometries,
                               analyses=analyses)

    if not request.is_xhr:
        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)
        geometries1 = {"type": "FeatureCollection",
                       "features": []}

        geometries2 = {"type": "FeatureCollection",
                       "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries1['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

            geometries2['features'].append(
                {"type": "Feature", "properties": {"density": round(g[1][0]), "flow": 0, "name": g[2],
                                                   "year": 1996},
                 "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        query = db.session.query(Ward.data).filter(Ward.region_id == 1).all()

        results = []

        for r in query:
            row = [val for val in list(r)[0]]
            results.append(row)

        df = pd.DataFrame(results).fillna(value=0)

        table1 = [['Year', 'Johannesburg']]

        for y, val in zip(range(1996, 2031), df.sum(axis=0).tolist()):
            table1.append([str(y), val])

        m = 1.05 * max(df.sum(axis=0).tolist())

        resp = make_response(render_template('demographics/demographics.html', form1=form1, form2=form2,
                                             geometries1=geometries1, geometries2=geometries2, table1=table1,
                                             table2=table1, tour=tour, max1=m, max2=m, region1=1, region2=1,
                                             ward1=None, ward2=None, analyses=analyses))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/return-land/')
def land_gen():

    return send_file('data/Ethekwini_Region_Data.xlsx', as_attachment=True)


@app.route('/_parse_data', methods=['GET'])
def parse_data():
    kwargs = {}
    for i in ['dataset_id', 'indicator_id', 'region_id', 'type_id', 'theme_id', 'year']:
        param = request.args.get(i)
        if (i == 'year'):
            if (str(param) != 'Empty') and (param is not None) and (str(param) != ''):
                kwargs[i] = int(param)
            else:
                pass

        elif (param is not None) and (str(param) != ''):
            kwargs[i] = param

    session['explore'] = [i for i in kwargs]

    datasets = db.session.query(DataPoint.dataset_id).filter_by(**kwargs).distinct()
    indicators = db.session.query(DataPoint.indicator_id).filter_by(**kwargs).distinct()
    regions = db.session.query(DataPoint.region_id).filter_by(**kwargs).distinct()
    types = db.session.query(DataPoint.type_id).filter_by(**kwargs).distinct()
    themes = db.session.query(DataPoint.theme_id).filter_by(**kwargs).distinct()
    years = db.session.query(DataPoint.year).filter_by(**kwargs).distinct()

    response = {}

    remove_list = ['Poverty rate', 'Gini Coefficient', 'Gross Value Add', 'Exports', 'Multiple deprivation index',
                   'Human Development Index']

    dataset_list = [(i[0], str(DataSet.query.filter_by(id=i).first().ds_name)) for i in datasets if
                    str(DataSet.query.filter_by(id=i).first().ds_name) not in remove_list]
    if 'dataset_id' not in session['explore']:
        dataset_list.insert(0, ('', 'Empty'))
    else:
        dataset_list.insert(1, ('', 'Empty'))

    response['dataset'] = dataset_list

    indicator_list = [[i[0], str(Indicator.query.filter_by(id=i).first().in_name)] for i in indicators if
                      str(Indicator.query.filter_by(id=i).first().in_name) not in remove_list]

    if 'indicator_id' not in session['explore']:
        indicator_list.insert(0, ('', 'Empty'))
        response['ind_ready'] = 0
    else:
        indicator_list.insert(1, ('', 'Empty'))
        response['ind_ready'] = 1

    response['indicator'] = indicator_list
    region_list = [(i[0], str(Region.query.filter_by(id=i).first().re_name)) for i in regions]

    if 'region_id' not in session['explore']:
        region_list.insert(0, ('', 'Empty'))
    else:
        region_list.insert(1, ('', 'Empty'))

    response['region'] = region_list

    type_list = [(i[0], str(Type.query.filter_by(id=i).first().ty_name)) for i in types]

    if 'type_id' not in session['explore']:
        type_list.insert(0, ('', 'Empty'))
    else:
        type_list.insert(1, ('', 'Empty'))

    response['type'] = type_list

    theme_list = [(i[0], str(Theme.query.filter_by(id=i).first().th_name)) for i in themes]

    if 'theme_id' not in session['explore']:
        theme_list.insert(0, ('', 'Empty'))
    else:
        theme_list.insert(1, ('', 'Empty'))

    response['theme'] = theme_list

    year_list = [(str(i), str(y[0])) for i, y in enumerate(sorted(years))]

    if 'year' not in session['explore']:
        year_list.insert(0, ('', 'Empty'))
    else:
        year_list.insert(1, ('', 'Empty'))

    response['year'] = year_list

    return jsonify(response)


@app.route('/_parse_demo', methods=['GET'])
def parse_demo():
    kwargs = {}
    for i in ['region_id', 'ward_id']:
        param = request.args.get(i)
        if (param is not None) and (str(param) != ''):
            kwargs[i] = param

    session['demo'] = [i for i in kwargs]

    wards = db.session.query(Ward.city_ward_code).filter_by(**kwargs).distinct().order_by(Ward.city_ward_code)

    response = {}

    ward_list = [(str(i[0]), 'Ward %s' % Ward.query.filter_by(id=i).first().city_ward_code) for i in wards]

    if 'ward_id' not in session['demo']:
        ward_list.insert(0, ('', 'View All'))
    else:
        ward_list.insert(1, ('', 'View All'))

    response['wards'] = ward_list

    return jsonify(response)
