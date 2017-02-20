# -*- coding: utf-8 -*-

from scoda.app import app
from flask import request, url_for, redirect, flash, make_response, session, render_template, jsonify
from .models import db
from .models import *
from .models.datasets import ExploreForm
from .models.maps import MapForm
from pandas import read_sql_query
import gviz_api
import geojson, json


@app.route('/explore', methods=['GET', 'POST'])
def explore():
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

            query = db.session.query(Region.re_name, DataPoint.year, DataSet.ds_name, DataPoint.value).\
                filter(DataPoint.indicator_id == ind).filter(DataPoint.dataset_id == DataSet.id). \
                filter(DataPoint.region_id == Region.id)

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
            view = range(2, len(datasets)+2)
            view.insert(0, 0)

            minVal = min(map(float, list(df.value.unique())))
            maxVal = max(map(float, list(df.value.unique()))) * 1.1

            head = ['city', 'year']
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
                                    float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]))
                        table.append(row)

            return render_template('explore/explore.html', form=form, plot=plot, table=table, colours=colours,
                                   year=str(max(years)), series=series, view=view, plot_type=plot_type, min=minVal,
                                   max=maxVal, cities=cities, options_list=options_list, years_list=years_list,
                                   tour=tour)
        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:
        return render_template('explore/explore.html', form=form, tour=tour)

    if not request.is_xhr:
        resp = make_response(render_template('explore/explore.html', form=form, plot=plot, tour=tour))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/demographics', methods=['GET', 'POST'])
def demographics():
    session['demo'] = []
    form = MapForm()
    status = 200
    tour = 1
    geometries = {}
    if request.method == 'POST':
        if form.validate():
            tour = 0
            # query = db.session.query(Area.geom.ST_AsGeoJSON(), Area.data)
            year = int(form.year.data)
            year_ind = range(1996, 2031)

            if form.city_ward_code.data == '':

                query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code).\
                    filter(Ward.region_id == form.region_id.data)

                geometries = {"type": "FeatureCollection",
                              "features": []}
                for g in query:
                    d = json.loads(g[0])
                    geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][year]),
                                                                                     "name": 'Ward %s' % g[2],
                                                                                     "year": year_ind[year]},
                                              "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

            else:
                query = db.session.query(Area.geom.ST_AsGeoJSON(), Area.data, Area.city_ward_code) \
                    .filter(Area.city_ward_code == form.city_ward_code.data)\
                    .filter(Area.region_id == form.region_id.data)

                geometries = {"type": "FeatureCollection",
                              "features": []}

                for g in query:
                    d = json.loads(g[0])
                    geometries['features'].append(
                        {"type": "Feature", "properties": {"density": round(g[1][year]),
                                                           "name": 'Area %s' % g[2],
                                                           "year": year_ind[year]},
                         "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

            return render_template('demographics/demographics.html', form=form, geometries=geometries, tour=tour)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:
        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)
        geometries = {"type": "FeatureCollection",
                      "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][0]),
                                                                             "name": 'Ward %s' % g[2],
                                                                             "year": 1996},
                                           "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        return render_template('demographics/demographics.html', form=form, geometries=geometries, tour=tour)

    if not request.is_xhr:
        query = db.session.query(Ward.geom.ST_AsGeoJSON(), Ward.data, Ward.city_ward_code). \
            filter(Ward.region_id == 1)
        geometries = {"type": "FeatureCollection",
                      "features": []}

        for g in query:
            d = json.loads(g[0])
            geometries['features'].append({"type": "Feature", "properties": {"density": round(g[1][0]), "name": g[2],
                                                                             "year": 1996},
                                           "geometry": {"type": "Polygon", "coordinates": d['coordinates']}})

        resp = make_response(render_template('demographics/demographics.html', form=form, geometries=geometries, tour=tour))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})


@app.route('/_parse_data', methods=['GET'])
def parse_data():
    kwargs = {}
    for i in ['dataset_id', 'indicator_id', 'region_id', 'type_id', 'theme_id', 'year']:
        param = request.args.get(i)
        if (i == 'year'):
            if (str(param) != 'Empty') and (param is not None) and (str(param) != ''):
                print param
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

    dataset_list = [(i, str(DataSet.query.filter_by(id=i).first().ds_name)) for i in datasets]
    if 'dataset_id' not in session['explore']:
        dataset_list.insert(0, ('', 'Empty'))
    else:
        dataset_list.insert(1, ('', 'Empty'))

    response['dataset'] = dataset_list

    indicator_list = [[i[0], str(Indicator.query.filter_by(id=i).first().in_name)] for i in indicators]

    if 'indicator_id' not in session['explore']:
        indicator_list.insert(0, ('', 'Empty'))
        response['ind_ready'] = 0
    else:
        indicator_list.insert(1, ('', 'Empty'))
        response['ind_ready'] = 1

    response['indicator'] = indicator_list
    region_list = [(i, str(Region.query.filter_by(id=i).first().re_name)) for i in regions]

    if 'region_id' not in session['explore']:
        region_list.insert(0, ('', 'Empty'))
    else:
        region_list.insert(1, ('', 'Empty'))

    response['region'] = region_list

    type_list = [(i, str(Type.query.filter_by(id=i).first().ty_name)) for i in types]

    if 'type_id' not in session['explore']:
        type_list.insert(0, ('', 'Empty'))
    else:
        type_list.insert(1, ('', 'Empty'))

    response['type'] = type_list

    theme_list = [(i, str(Theme.query.filter_by(id=i).first().th_name)) for i in themes]

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

    print response['indicator']

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

    print ward_list

    response['wards'] = ward_list

    return jsonify(response)
