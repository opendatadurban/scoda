from scoda.app import app
from flask import request, url_for, redirect, flash, make_response, session, render_template, jsonify
from .models import db
from .models import *
from .models.datasets import ExploreForm
from pandas import read_sql_query
import gviz_api

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
            query = db.session.query(DataPoint.year, DataPoint.value, DataPoint.region_id.name).filter(DataPoint.indicator_id == ind)
            regions = {c.id: c.name for c in Region.all()}
            df = read_sql_query(query.statement, query.session.bind)
            df['region_id'] = df['region_id'].apply(lambda x: regions[x])

            schema = [('Year', 'number'), ('Value', 'number'),
                      ('City', 'string'), ('ID', 'number')]

            data_table = gviz_api.DataTable(schema)
            data_table.LoadData(dataFrame.values)
            json = data_table.ToJSon(columns_order=('Category', 'City', 'Female',
                                                    'Male', 'Year', 'ID'), order_by="City")


            return render_template('explore/explore.html', form=form, plot=plot)
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

    dataset_list = [(i, str(DataSet.query.filter_by(id=i).first().name)) for i in datasets]
    if 'dataset_id' not in session['explore']:
        dataset_list.insert(0, ('', 'Empty'))
    else:
        dataset_list.insert(1, ('', 'Empty'))

    response['dataset'] = dataset_list

    indicator_list = [(i, str(Indicator.query.filter_by(id=i).first().name)) for i in indicators]
    if 'indicator_id' not in session['explore']:
        indicator_list.insert(0, ('', 'Empty'))
    else:
        indicator_list.insert(1, ('', 'Empty'))

    response['indicator'] = indicator_list

    region_list = [(i, str(Region.query.filter_by(id=i).first().name)) for i in regions]

    if 'region_id' not in session['explore']:
        region_list.insert(0, ('', 'Empty'))
    else:
        region_list.insert(1, ('', 'Empty'))

    response['region'] = region_list

    type_list = [(i, str(Type.query.filter_by(id=i).first().name)) for i in types]

    if 'type_id' not in session['explore']:
        type_list.insert(0, ('', 'Empty'))
    else:
        type_list.insert(1, ('', 'Empty'))

    response['type'] = type_list

    theme_list = [(i, str(Theme.query.filter_by(id=i).first().name)) for i in themes]

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
