from scoda.app import app
from flask import render_template, request, flash, redirect, session, jsonify, url_for, make_response, Response
from flask_security import current_user
from werkzeug.utils import secure_filename
from .models.files import NewFileForm, EditFileForm, DeleteFileForm
from .models.wazi import WaziForm, MuniForm, MyDataForm, PivotForm
from .models.datasets import ExploreForm
from .models.user import UserSet, UserAnalysis, NewAnalysisForm
from .models import db
from .models import *
from io import StringIO
from pandas import read_sql_query
from datetime import datetime
from ckanapi import RemoteCKAN
from pandas.io.json import json_normalize
import pandas as pd
import gviz_api
import urlparse
import urllib2
import urllib
import json
import requests
import pprint
import os
import random
import string

from flask_mail import Message
from app import mail
from config import MAIL_DEFAULT_SENDER


def create_package(base_url, data=None, api_key=None):
    """Post a data dict to one of the actions of the CKAN action API.
    See the documentation of the action API, including each of the available
    actions and the data dicts they accept, here:
    http://docs.ckan.org/en/ckan-1.8/apiv3.html
    :param base_url: the base URL of the CKAN instance to post to,
        e.g. "http://datahub.io/"
    :type base_url: string
    :param action: the action to post to, e.g. "package_create"
    :type action: string
    :param data: the data to post (optional, default: {})
    :type data: dictionary
    :param api_key: the CKAN API key to put in the 'Authorization' header of
        the HTTP request (optional, default: None)
    :type api_key: string
    :returns: the dictionary returned by the CKAN API, a dictionary with three
        keys 'success' (True or False), 'help' (the docstring for the action
        posted to) and 'result' in the case of a successful request or 'error'
        in the case of an unsuccessful request
    :rtype: dictionary
    """

    if data is None:
        # Even if you don't want to post any data to the CKAN API, you still
        # have to send an empty dict.
        data = {}
    path = '/api/3/action/package_create'
    url = urlparse.urljoin(base_url, path)
    request = urllib2.Request(url)
    if api_key is not None:
        request.add_header('Authorization', api_key)
    try:
        response = urllib2.urlopen(request, urllib.quote(json.dumps(data)))
        # The CKAN API returns a dictionary (in the form of a JSON string)
        # with three keys 'success' (True or False), 'result' and 'help'.
        d = json.loads(response.read())
        assert d['success'] is True
        return d
    except urllib2.HTTPError, e:
        # For errors, the CKAN API also returns a dictionary with three
        # keys 'success', 'error' and 'help'.
        error_string = e.read()
        try:
            d = json.loads(error_string)
            if type(d) is unicode:
                # Sometimes CKAN returns an error as a JSON string not a dict,
                # gloss over it here.
                return {'success': False, 'help': '', 'error': d}
            assert d['success'] is False
            return d
        except ValueError:
            # Sometimes CKAN returns a string that is not JSON, lets gloss
            # over it.
            return {'success': False, 'error': error_string, 'help': ''}


def upload_resource(base_url, files, data=None, api_key=None):
    path = '/api/3/action/resource_create'
    r = requests.post(urlparse.urljoin(base_url, path),
                      data=data,
                      headers={"X-CKAN-API-Key": api_key},
                      files=files)
    return r.json()


def update_resource(base_url, files, data=None, api_key=None):
    path = '/api/3/action/resource_update'
    r = requests.post(urlparse.urljoin(base_url, path),
                      data=data,
                      headers={"X-CKAN-API-Key": api_key},
                      files=files)
    return r.json()


def getFromDict(datadict, maplist):
    for k in maplist:
        datadict = datadict[k]
    return datadict


@app.route('/my_datasets', methods=['GET', 'POST'])
def my_datasets():
    new_form = NewFileForm()
    edit_form = EditFileForm()
    delete_form = DeleteFileForm()
    is_submitted = 0
    if request.method == 'POST':
        if new_form.new_submitted.data:
            form = new_form
        elif edit_form.edit_submitted.data:
            form = edit_form
        elif delete_form.delete_submitted.data:
            form = delete_form

        if form.validate():

            if new_form.new_submitted.data:

                query = db.session.query(UserSet.ds_name).filter(UserSet.user_id == current_user.id).all()

                results = [str(r[0]) for r in query]

                if '%s-user-%s' % ('_'.join(str(form.ds_name.data).lower().split()), current_user.id) in results:

                    ds_name = '%s-user-%s-copy_code_%s' % ('_'.join(str(form.ds_name.data).lower().split()),
                                                           current_user.id,
                                                           ''.join(random.choice(string.ascii_lowercase) for _ in
                                                                   range(4)))
                    title = '%s - User - %s - Copy code %s' % (form.ds_name.data, current_user.id,
                                                                 ''.join(random.choice(string.ascii_lowercase) for _ in
                                                                         range(4)))

                else:
                    ds_name = '%s-user-%s' % ('_'.join(str(form.ds_name.data).lower().split()), current_user.id)
                    title = '%s - User - %s' % (form.ds_name.data, current_user.id)

                API = '2d59ff29-673d-4cb8-9233-daf0c353f158'
                url = 'http://almanac.opendata.durban'
                data = {"name": "%s" % ds_name,
                        "title": "%s" % title,
                        "owner_org": "explorer",
                        "private": "True",
                        "url": ""}

                response = create_package(base_url=url, data=data, api_key=API)

                files = [('upload', form.fileName.data)]
                data = {"package_id": "%s" % ds_name, "url": "", "id": response['result']['id'], "format": "csv",
                        "name": secure_filename(new_form.fileName.data.filename)}
                response = upload_resource(base_url=url, files=files, data=data, api_key=API)

                user_set = UserSet()
                user_set.ds_name = ds_name
                user_set.pk_id = ds_name
                user_set.file_id = response['result']['id']
                user_set.user_id = current_user.id
                user_set.ds_title = form.ds_name.data
                db.session.add(user_set)
                db.session.commit()

                return render_template('my_datasets/my_datasets.html', new_form=new_form, edit_form=edit_form,
                                       delete_form=delete_form, is_submitted=new_form.new_submitted.data)

            elif edit_form.edit_submitted.data:

                query = db.session.query(UserSet.pk_id, UserSet.file_id)\
                    .filter(UserSet.id == edit_form.ds_id.data).first()

                API = '2d59ff29-673d-4cb8-9233-daf0c353f158'
                url = 'http://almanac.opendata.durban'
                files = [('upload', form.fileName.data)]
                data = {"package_id": "%s" % query[0], "url": "", "id": "%s" % query[1]}

                response = update_resource(base_url=url, files=files, data=data, api_key=API)

                return render_template('my_datasets/my_datasets.html', new_form=new_form, edit_form=edit_form,
                                       delete_form=delete_form, is_submitted=edit_form.edit_submitted.data)

            elif delete_form.delete_submitted.data:

                query = db.session.query(UserSet.pk_id, UserSet.file_id) \
                    .filter(UserSet.id == delete_form.ds_id.data).first()

                API = '2d59ff29-673d-4cb8-9233-daf0c353f158'
                ua = 'http://almanac.opendata.durban)'

                demo = RemoteCKAN('http://almanac.opendata.durban', apikey=API,
                                  user_agent=ua)

                demo.action.dataset_purge(id=query[0])

                UserSet.query.filter(UserSet.id == delete_form.ds_id.data).delete()
                db.session.commit()

                return render_template('my_datasets/my_datasets.html', new_form=new_form, edit_form=edit_form,
                                       delete_form=delete_form, is_submitted=delete_form.delete_submitted.data)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    return render_template('my_datasets/my_datasets.html', new_form=new_form, edit_form=edit_form,
                           delete_form=delete_form, is_submitted=is_submitted)


@app.route('/constructor/<id>/time-series/<ds_id>/download', methods=['GET'])
def series_download(id, ds_id):
    analysis = UserAnalysis.query.get_or_404(id)

    s = json.loads(analysis.current)
    df = pd.DataFrame(s['table'], columns=s['head'])
    types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        df[col] = df[col].astype(str)

    dataset = s['head'][int(ds_id)]
    series = df.pivot(index='City', columns='Year', values=dataset)

    print series

    return Response(series.to_csv(), mimetype="text/csv",
                    headers={"Content-disposition": "attachment; filename=series.csv"})


@app.route('/constructor/<id>/time-series', methods=['GET', 'POST'])
def constructor_timeseries(id):
    analysis = UserAnalysis.query.get_or_404(id)
    form = PivotForm()

    s = json.loads(analysis.current)
    df = pd.DataFrame(s['table'], columns=s['head'])
    types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        df[col] = df[col].astype(str)

    form.ds_id.choices = [[str(i), str(n)] for i, n in enumerate(s['head'][2:], start=2)]

    if request.method == 'POST':
        if form.validate():
            dataset = s['head'][int(form.ds_id.data)]
            series = df.pivot(index='City', columns='Year', values=dataset)

            head = ['City'] + map(str, series.columns.values.tolist())

            table1 = [head]

            mins = []
            maxs = []

            for y, r in zip(df['City'].unique(), series.values.tolist()):
                table1.append([str(y)] + r)
                mins.append(min(r))
                maxs.append(max(r))

            Min = min(mins)
            Max = max(maxs) * 1.05

            series2 = df.pivot(index='Year', columns='City', values=dataset)
            head = ['Year'] + series2.columns.values.tolist()

            table2 = [head]

            for y, r in zip(df['Year'].unique(), series2.values.tolist()):
                table2.append([str(y)] + r)

            return render_template('constructor/constructor_timeseries.html', min=Min, max=Max, form=form, table1=table1, table2=table2,
                                   analysis_id=id, series_id=int(form.ds_id.data))

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    return render_template('constructor/constructor_timeseries.html', form=form, analysis_id=id)


@app.route('/constructor/new_analysis', methods=['GET', 'POST'])
def constructor_new():

    form = NewAnalysisForm()

    if request.method == 'POST':
        analysis = UserAnalysis()
        analysis.user_id = current_user.id
        analysis.ds_name = form.ds_name.data
        analysis.description = form.description.data
        db.session.add(analysis)
        db.session.commit()
        analysis_id = analysis.id

        return redirect('/constructor/%s' % analysis_id)

    return render_template('constructor/constructor_new.html', form=form)


@app.route('/constructor/<id>/download', methods=['GET'])
def constructor_download(id):
    analysis = UserAnalysis.query.get_or_404(id)
    s = json.loads(analysis.current)
    df = pd.DataFrame(s['table'], columns=s['head'])
    types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        df[col] = df[col].astype(str)

    return Response(df.to_csv(), mimetype="text/csv",
                    headers={"Content-disposition": "attachment; filename=data.csv"})


@app.route('/constructor/<id>/edit', methods=['POST'])
def constructor_mod(id):
    session['warning'] = 0
    data = StringIO(request.json['info'])
    head = [str(h) for h in list(request.json['head'])]
    df = pd.read_csv(data, sep=",", thousands=',', names=head)
    types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        df[col] = df[col].astype(str)

    for col in types[types == 'int64'].index:
        df[col] = df[col].astype(int)
    df = df.convert_objects(convert_numeric=True)

    analysis = UserAnalysis.query.get_or_404(id)
    if analysis.current in ['', None]:
        table = []

        for r in df.values.tolist():
            r[1] = int(r[1])
            table.append(r)

    else:
        s = json.loads(analysis.current)
        df_master = pd.DataFrame(s['table'], columns=s['head'])

        types = df_master.apply(lambda x: pd.lib.infer_dtype(x.values))
        for col in types[types == 'unicode'].index:
            df_master[col] = df_master[col].astype(str)

        df_master_new = pd.merge(df_master, df, on=['City', 'Year'])

        if df_master_new.empty:
            session['warning'] = 1
            return jsonify({'redirect': '/constructor/%s' % id})

        elif len(df_master_new.values.tolist()) != len(df_master.values.tolist()):
            session['warning'] = 2

        table = []

        for r in df_master_new.values.tolist():
            r[1] = int(r[1])
            table.append(r)

        head = s['head'] + head[2:]

    analysis.previous = analysis.current
    analysis.current = json.dumps({'table': table, 'head': head})
    db.session.commit()

    return jsonify({'redirect': '/constructor/%s' % id})


@app.route('/constructor/<id>/delete')
def constructor_delete(id):
    UserAnalysis.query.filter(UserAnalysis.id == id).delete()
    db.session.commit()
    return redirect(url_for('city_dashboard'))


@app.route('/constructor/<id>/revert')
def constructor_revert(id):
    analysis = UserAnalysis.query.get_or_404(id)
    analysis.current = analysis.previous
    analysis.previous = None
    db.session.commit()
    return redirect('/constructor/%s' % id)


@app.route('/constructor/<id>', methods=['GET', 'POST'])
def constructor(id):
    if 'warning' in session.keys():
        if session['warning'] == 3:
            pass
        else:
            if session['warning'] == 0:
                flash('Data successfully added to your analysis. You can undo this change by pressing the "Go Back" button.', 'error')
            elif session['warning'] == 1:
                flash('The data you have selected is incompatible with your table and cannot be added. Please ensure that the regions and years of new data match those of your existing table.', 'error')
            elif session['warning'] == 2:
                flash('Some of the data you have selected is incompatible with your table, some rows may have been removed. You can undo this change by pressing the "Go Back" button.', 'error')
    else:
        session['warning'] = 3

    warning = session['warning']
    session['warning'] = 3

    analysis = UserAnalysis.query.get_or_404(id)

    if analysis.current in ['', None]:
        head = ['City', 'Year']
        table_master = [head]

    else:
        s = json.loads(analysis.current)
        df = pd.DataFrame(s['table'], columns=s['head'])
        types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
        for col in types[types == 'unicode'].index:
            df[col] = df[col].astype(str)
        head = [str(h) for h in s['head']]
        table_master = [head]
        indices = [i for i, x in enumerate(list(df.dtypes)) if x == "int64"]
        for r in df.values.tolist():
            for j in indices:
                r[j] = int(r[j])
            table_master.append(r)

    explore_form = ExploreForm()
    wazi_form = WaziForm()
    muni_form = MuniForm()
    my_form = MyDataForm()
    session['explore'] = []
    session['wazi'] = []
    session['muni'] = []
    session['my'] = []
    wazi_form_open = 0
    muni_form_open = 0
    explore_form_open = 0
    my_form_open = 0
    plot = 0

    if request.method == 'POST':
        if explore_form.explore_submitted.data:
            form = explore_form
        elif wazi_form.wazi_submitted.data:
            form = wazi_form
        elif muni_form.muni_submitted.data:
            form = muni_form
        elif my_form.my_submitted.data:
            form = my_form

        if form.validate():
            if explore_form.explore_submitted.data:
                explore_form_open = 1

                ind = form.indicator_id.data
                query = db.session.query(Region.re_name, DataPoint.year, DataSet.ds_name, DataPoint.value). \
                    filter(DataPoint.indicator_id == ind).filter(DataPoint.dataset_id == DataSet.id). \
                    filter(DataPoint.region_id == Region.id)

                df = read_sql_query(query.statement, query.session.bind)
                table = []

                years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
                plot = 1
                plot_type = 1
                if (len(datasets) > 1) or (len(years) == 1):
                    plot_type = 2

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
                                datapoint = df.loc[
                                    (df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]
                                if len(datapoint) == 0:
                                    row.append(None)
                                else:
                                    row.append(
                                        float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d),
                                                     "value"]))
                            table.append(row)

                cities2 = [str(c) for c in cities]

                explore_form = ExploreForm()

                return render_template('constructor/constructor.html', muni_form=muni_form, wazi_form=wazi_form,
                                       my_form=my_form, cities=cities2, years=years, explore_form=explore_form,
                                       table=table, muni_form_open=muni_form_open,
                                       plot=plot, wazi_form_open=wazi_form_open, explore_form_open=explore_form_open,
                                       table_master=table_master, analysis_id=id)

            if wazi_form.wazi_submitted.data:
                wazi_form_open = 1
                wazi_form.wazi_submitted.data = 0

                with app.open_resource('static/WaziKeys.json') as f:
                    M = json.load(f)

                for ind, reg in enumerate(form.region.data):
                    new_datasets = []
                    values = []

                    query = db.session.query(WaziRegion.wazi_abr, WaziRegion.wazi_name, WaziRegion.re_name). \
                        filter(WaziRegion.id == reg).first()

                    r = requests.get('https://wazimap.co.za/profiles/municipality-%s-%s.json' % (query[0], query[1]))
                    keys = M[form.top_tier.data][form.lower_tier.data]['keys']

                    data = getFromDict(r.json(), keys)

                    if M[form.top_tier.data][form.lower_tier.data]['type'] == 'name':
                        new_datasets.append(data['name'])
                        values.append(data['values']['this'])

                    elif M[form.top_tier.data][form.lower_tier.data]['type'] == 'universe':
                        for k in sorted(data.keys()):
                            if k != 'metadata':
                                new_datasets.append(k)
                                values.append(data[k]['values']['this'])

                    if ind == 0:
                        table = []
                        head = ['City', 'Year']
                        for i in new_datasets:
                            head.append(str(i))
                        table.append(head)

                    row = [str(query[2]), str(2011)]
                    for i, d in enumerate(new_datasets):
                        row.append(values[i])
                    table.append(row)

                cities = list(set([str(t[0]) for t in table[1:]]))
                years = list(set([str(t[1]) for t in table[1:]]))

                wazi_form.lower_tier.choices = [[str(P), '%s' % " ".join(P.split('_')).title()] for P in
                                                M[form.top_tier.data]]

                plot = 1

                print cities

                return render_template('constructor/constructor.html', wazi_form=wazi_form, muni_form=muni_form,
                                       explore_form=explore_form, my_form=my_form, table=table, plot=plot,
                                       cities=cities, years=years, wazi_form_open=wazi_form_open,
                                       explore_form_open=explore_form_open, muni_form_open=muni_form_open,
                                       table_master=table_master, analysis_id=id)

            if muni_form.muni_submitted.data:
                muni_form_open = 1
                muni_form.muni_submitted.data = 0

                print form.region.data

                for yind, yr in enumerate(form.year.data):

                    for ind, reg in enumerate(form.region.data):

                        query = db.session.query(WaziRegion.wazi_abr, WaziRegion.re_name). \
                            filter(WaziRegion.id == reg).first()

                        year = range(2012, 2017)[int(yr)]

                        with app.open_resource('static/MuniKeys.json') as f:
                            M = json.load(f)

                        if form.top_tier.data == 'uifwexp':
                            r = requests.get('https://municipaldata.treasury.gov.za/api/cubes/%s/facts?cut=item.code:"%s"'
                                             '|demarcation.code:"%s"|financial_year_end.year:%s' % (form.top_tier.data,
                                                                                                    form.lower_tier.data,
                                                                                                    query[0],
                                                                                                    year)).json()
                        else:
                            r = requests.get('https://municipaldata.treasury.gov.za/api/cubes/%s/facts?cut=item.code:"%s"'
                                             '|demarcation.code:"%s"|financial_year_end.year:%s|amount_type.code:"%s"|'
                                             'period_length.length:"year"' % (
                                                 form.top_tier.data, form.lower_tier.data, query[0], year,
                                                 form.data_type.data)).json()

                        data = []
                        new_datasets = []
                        values = []
                        for i in r['data']:
                            if 'amount' in i.keys():
                                data.append(i['amount'])
                            if 'total_amount' in i.keys():
                                data.append(i['total_amount'])
                            if 'total_assets' in i.keys():
                                data.append(i['total_assets'])

                        for i, I in enumerate(data):
                            if I is None:
                                data[i] = 0

                        values.append(float(sum(data)))
                        new_datasets.append(form.lower_tier.data)

                        if yind == 0 and ind == 0:
                            table = []
                            head = ['City', 'Year']
                            for i in new_datasets:
                                head.append(str(i))
                            table.append(head)

                        row = [str(query[1]), str(year)]
                        for i, d in enumerate(new_datasets):
                            row.append(values[i])
                        table.append(row)

                cities = list(set([t[0] for t in table]))
                years = list(set([t[1] for t in table]))

                Set = []

                for n in M[form.top_tier.data].keys():
                    Set.append([n, M[form.top_tier.data][n]])

                muni_form.lower_tier.choices = sorted([[n, m] for n, m in Set])

                plot = 1

                return render_template('constructor/constructor.html', muni_form=muni_form, wazi_form=wazi_form,
                                       explore_form=explore_form, my_form=my_form, table=table, plot=plot,
                                       cities=cities, years=years, muni_form_open=muni_form_open,
                                       wazi_form_open=wazi_form_open, explore_form_open=explore_form_open,
                                       table_master=table_master, analysis_id=id)

            if my_form.my_submitted.data:
                my_form_open = 1
                my_form.my_submitted.data = 0

                query = db.session.query(UserSet.pk_id, UserSet.file_id) \
                    .filter(UserSet.id == my_form.ds_id.data).first()

                API = '2d59ff29-673d-4cb8-9233-daf0c353f158'
                url = 'http://almanac.opendata.durban/api/action/datastore_search?resource_id=%s&limit=100' % query[1]
                req = urllib2.Request(url)
                req.add_header('Authorization', API)
                resp = urllib2.urlopen(req)
                content = json.loads(resp.read())

                dataFrame = json_normalize(content['result']['records'])
                del dataFrame['_id']
                types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
                for col in types[types == 'unicode'].index:
                    dataFrame[col] = dataFrame[col].astype(str)

                dataFrame = dataFrame.convert_objects(convert_numeric=True)

                head = ['City', 'Year']
                for h in list(dataFrame.head(0)[2:]):
                    if h not in head:
                        head.append(str(h))
                table = [head]
                dataFrame = dataFrame[head]

                for r in dataFrame.values.tolist():
                    r[1] = int(r[1])
                    table.append(r)

                cities = list(set([t[0] for t in table]))
                years = list(set([t[1] for t in table]))
                cities2 = [str(c) for c in cities if c != 'City']

                plot = 1

                return render_template('constructor/constructor.html', my_form=my_form, muni_form=muni_form,
                                       wazi_form=wazi_form, explore_form=explore_form, table=table, plot=plot,
                                       cities=cities2, years=years, muni_form_open=muni_form_open,
                                       wazi_form_open=wazi_form_open, explore_form_open=explore_form_open,
                                       my_form_open=my_form_open, table_master=table_master, analysis_id=id)

        else:
            if request.is_xhr:
                status = 412
            else:
                flash('Please correct the problems below and try again.', 'warning')

    with app.open_resource('static/WaziKeys.json') as f:
        Wazi = json.load(f)

    wazi_form.top_tier.data = wazi_form.top_tier.choices[0]
    wazi_form.lower_tier.choices = [[str(P), '%s' % " ".join(P.split('_')).title()] for P in Wazi['child_households']]

    with app.open_resource('static/MuniKeys.json') as f:
        Muni = json.load(f)

    Set = []

    for n in Muni[muni_form.top_tier.choices[0][0]].keys():
        Set.append([n, Muni[muni_form.top_tier.choices[0][0]][n]])

    muni_form.top_tier.data = muni_form.top_tier.choices[0]
    muni_form.lower_tier.choices = sorted([[str(n), str(m)] for n, m in Set])

    return render_template('constructor/constructor.html', explore_form=explore_form, wazi_form=wazi_form, muni_form=muni_form,
                           my_form=my_form, table_master=table_master, analysis_id=id,
                           plot=plot, warning=warning)


@app.route('/constructor/<id>/plot', methods=['GET'])
def constructor_vis(id):

    analysis = UserAnalysis.query.get_or_404(id)

    plot = 1

    if analysis.current in ['', None]:
        head = ['City', 'Year']
        table_master = [head]
        plot = 2

    else:
        s = json.loads(analysis.current)
        df = pd.DataFrame(s['table'], columns=s['head'])
        types = df.apply(lambda x: pd.lib.infer_dtype(x.values))
        for col in types[types == 'unicode'].index:
            df[col] = df[col].astype(str)
        head = [str(h) for h in s['head']]
        table_master = [head]
        indices = [i for i, x in enumerate(list(df.dtypes)) if x == "int64"]
        mins = []
        maxs = []
        for r in df.values.tolist():
            for j in indices:
                r[j] = int(r[j])
            table_master.append(r)
            mins.append(min(r[2:]))
            maxs.append(max(r[2:]))

        cities = [c.encode('utf-8') for c in df['City'].unique()]
        years = [str(c) for c in df['Year'].unique()]
        colours = ['#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0', '#8bc34a',
                   '#ffeb3b', '#9e9e9e', '#3f51b5', '#e91e63']
        series = {i: {'color': colours[i]} for i in range(len(head[2:]))}

    view = range(2, len(head))
    view.insert(0, 0)

    minVal = min(mins)
    maxVal = max(maxs) * 1.1

    return render_template('constructor/constructor_vis.html', table=table_master, analysis_id=id,
                           cities=cities, colours=colours, series=series, min=minVal, max=maxVal,
                           view=view, year=years)


@app.route('/_parse_wazi', methods=['GET'])
def parse_wazi():
    kwargs = {}

    M = json.load(open('%s/data/WaziKeys.json' % os.path.abspath(os.path.dirname(__file__)), 'r'))

    for i in ['top_tier']:
        param = request.args.get(i)
        if (param is not None) and (str(param) != ''):
            kwargs[i] = param

    session['wazi'] = [i for i in kwargs]

    response = {}

    options_list = [[str(P), '%s' % " ".join(P.split('_')).title()] for P in M[kwargs['top_tier']]]

    response['lower_tier'] = options_list

    return jsonify(response)


@app.route('/_parse_muni', methods=['GET'])
def parse_muni():
    kwargs = {}

    M = json.load(open('%s/data/MuniKeys.json' % os.path.abspath(os.path.dirname(__file__)), 'r'))

    for i in ['top_tier']:
        param = request.args.get(i)
        if (param is not None) and (str(param) != ''):
            kwargs[i] = param

    session['muni'] = [i for i in kwargs]

    response = {}

    N = M[kwargs['top_tier']].keys()
    P = [M[kwargs['top_tier']][n] for n in N]
    options_list = [[str(n), str(p)] for n, p in zip(N, P)]

    response['lower_tier'] = options_list

    return jsonify(response)


@app.route('/_push_to_table', methods=['GET'])
def parse_analysis():
    kwargs = {}

    M = json.load(open('%s/data/MuniKeys.json' % os.path.abspath(os.path.dirname(__file__)), 'r'))

    for i in ['top_tier']:
        param = request.args.get(i)
        if (param is not None) and (str(param) != ''):
            kwargs[i] = param

    session['muni'] = [i for i in kwargs]

    response = {}

    N = M[kwargs['top_tier']].keys()
    P = [M[kwargs['top_tier']][n] for n in N]
    options_list = [[str(n), str(p)] for n, p in zip(N, P)]

    response['lower_tier'] = options_list

    return jsonify(response)


@app.route('/email-test', methods=['GET'])
def test_email():
    msg = Message('Test Email', sender=MAIL_DEFAULT_SENDER, recipients=['mattadendorff@gmail.com'])
    msg.body = 'Test body'
    mail.send(msg)

    return redirect(url_for('city_dashboard'))
