from scoda.app import app
from flask import request, url_for, redirect, flash, make_response, session, render_template, jsonify
from .models import db
from .models import *
from .models.datasets import ExploreForm
from pandas import read_sql_query
import gviz_api
import re


@app.route('/explore', methods=['GET', 'POST'])
def explore():
    session['explore'] = []
    form = ExploreForm()
    status = 200
    plot = 0
    if request.method == 'POST':
        if form.validate():
            plot = 1

            ind = form.indicator_id.data
            query = db.session.query(Region.re_name, DataPoint.year, DataSet.ds_name, DataPoint.value).\
                filter(DataPoint.indicator_id == ind).filter(DataPoint.dataset_id == DataSet.id). \
                filter(DataPoint.region_id == Region.id)

            df = read_sql_query(query.statement, query.session.bind)
            table = []
            years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]

            cities = [c.encode('utf-8') for c in cities]

            plot_type = 1
            if len(datasets) > 1:
                plot_type = 2

            colours = ['#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0']
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
                            row.append(
                                float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]))
                        table.append(row)

            return render_template('explore/explore.html', form=form, plot=plot, table=table, colours=colours,
                                   year=str(max(years)), series=series, view=view, plot_type=plot_type, min=minVal,
                                   max=maxVal, cities=cities)
        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    else:
        return render_template('explore/explore.html', form=form)

    if not request.is_xhr:
        resp = make_response(render_template('explore/explore.html', form=form, plot=plot))

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
        if (param is not None) and (str(param) != '') and (i == 'year'):
            y = range(1996, 2018)
            kwargs[i] = y[int(param)]

        elif (param is not None) and (str(param) != ''):
            kwargs[i] = param

    print kwargs

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

    indicator_list = [(i, str(Indicator.query.filter_by(id=i).first().in_name)) for i in indicators]
    if 'indicator_id' not in session['explore']:
        indicator_list.insert(0, ('', 'Empty'))
    else:
        indicator_list.insert(1, ('', 'Empty'))

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
    return jsonify(response)
