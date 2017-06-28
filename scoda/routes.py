from scoda.app import app
from flask import url_for, redirect, session, render_template, request
from flask_security import current_user
from scoda.models import db, User
import scoda.city
import scoda.researcher
from flask_wtf.csrf import CSRFError
from json import loads
from pandas.io.json import json_normalize
import pandas as pd
import gviz_api
import urllib2


def pyramid():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '663dd642-fbf3-4c5e-92e8-b76b07df2847'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('Category', 'string'), ('City', 'string'),
              ('Female', 'number'), ('Male', 'number'),
              ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('Category', 'City', 'Female',
                                            'Male', 'Year', 'ID'), order_by="City")
    return json


def finances():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '002a0d5d-d7c7-44e0-94b5-f9325477c3c6'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=100' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Color 1', 'number'), ('Color 2', 'number'),
              ('Expenditure', 'number'), ('Percentage', 'number'), ('Revenue', 'number'),
              ('Year', 'string'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    # json = data_table.ToJSon(columns_order=('City', 'Year', 'Expenditure',
    #                                         'Revenue', 'Percentage', 'Color 1',
    #                                         'Color 2', 'ID'))
    json = data_table.ToJSon(columns_order=('City', 'Percentage', 'Year'))

    return json


def motion():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = 'f47e6ba8-f65a-411d-806c-17acc26b51b0'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('GVA', 'number'), ('Gini Coefficient', 'number'),
              ('HDI', 'number'), ('Household Numbers', 'number'), ('Population Growth', 'number'),
              ('Unemployment', 'string'), ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Year', 'Population Growth',
                                            'Household Numbers', 'HDI', 'Gini Coefficient',
                                            'GVA', 'Unemployment'))

    return json


def households():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = 'dadc5d5d-a72f-4811-ad62-799980ca9eca'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('Census Year', 'number'), ('City', 'string'), ('Households', 'number'),
              ('Population', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Census Year', 'Population',
                                            'Households'))
    return json


def education():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = 'f2f2a37f-c000-49c1-8aa2-6dc7e20621ae'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Degrees', 'number'),
              ('Diploma or Certificate with Grade 12', 'number'), ('Diploma or Certificate without Grade 12', 'number'),
              ('No Formal Education', 'number'), ('Other Post-degrees', 'number'),
              ('Primary School', 'number'), ('Secondary School', 'number'),
              ('Total', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'No Formal Education',
                                            'Primary School', 'Secondary School',
                                            'Diploma or Certificate without Grade 12',
                                            'Diploma or Certificate with Grade 12', 'Degrees', 'Other Post-degrees'))
    return json


def energy():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '72d11985-94ea-42bc-a5b6-0662d8ff459c'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Coal', 'number'),
              ('Diesel', 'number'), ('Electricity', 'number'),
              ('Heavy Furnace Oil', 'number'), ('Jet Fuel and AvGas', 'number'),
              ('Liquid Petroleum Gas', 'number'), ('Paraffin', 'number'),
              ('Petrol', 'number'), ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Year', 'Coal',
                                            'Diesel', 'Electricity', 'Heavy Furnace Oil',
                                            'Jet Fuel and AvGas', 'Liquid Petroleum Gas', 'Paraffin',
                                            'Petrol'))
    return json


def water():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '0e4bee46-fabd-4d74-a9a2-42fb56984fe7'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Non-revenue Water', 'number'),
              ('Revenue Water', 'number'), ('Year', 'number'),
              ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Year', 'Non-revenue Water', 'Revenue Water'))
    return json


def economic():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '741a3fc9-9595-4907-b5c2-07c361c2df40'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)
    # dataFrame['Year'] = dataFrame['Year'].astype(str)

    schema = [('City', 'string'), ('Gross Value Added', 'number'),
              ('Year', 'string'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Gross Value Added', 'Year'))

    return json


def unemployment():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '7703662d-5da9-4723-a596-8d089dd19183'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Unemployment Rate', 'number'),
              ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('Year', 'City', 'Unemployment Rate'))

    return json


def electricity():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '93e78c69-1aae-44e6-9946-c0478b1f4639'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('City', 'string'), ('Electricity for lighting and other', 'number'),
              ('Electricity for lighting only', 'number'), ('Not using electricity', 'number'),
              ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Year', 'Electricity for lighting and other',
                                            'Electricity for lighting only', 'Not using electricity'))

    return json


def sanitation():
    API = '989e1c94-6dfd-4bc1-af04-9c64e59d96b3'
    ID = '92299119-da69-4ebd-a366-42006fe2b737'
    url = 'http://data.opendata.durban/api/action/datastore_search?resource_id=%s&limit=500' % ID
    req = urllib2.Request(url)
    req.add_header('Authorization', API)
    resp = urllib2.urlopen(req)
    content = loads(resp.read())

    dataFrame = json_normalize(content['result']['records'])

    types = dataFrame.apply(lambda x: pd.lib.infer_dtype(x.values))
    for col in types[types == 'unicode'].index:
        dataFrame[col] = dataFrame[col].astype(str)

    dataFrame = dataFrame.convert_objects(convert_numeric=True)

    schema = [('Access to sanitation', 'number'), ('Bucket Systems', 'number'),
              ('City', 'string'), ('Flush toilet', 'number'),
              ('No toilet', 'number'), ('Pit toilets', 'number'),
              ('Total households', 'number'), ('Ventilation Improved Pits', 'number'),
              ('Year', 'number'), ('ID', 'number')]

    data_table = gviz_api.DataTable(schema)
    data_table.LoadData(dataFrame.values)
    json = data_table.ToJSon(columns_order=('City', 'Year', 'Access to sanitation',
                                            'Bucket Systems', 'Flush toilet', 'No toilet',
                                            'Pit toilets', 'Ventilation Improved Pits', 'Total households'))

    return json


@app.route('/')
def home_public():
    json1 = pyramid()
    json2 = finances()
    json3 = motion()
    json4 = households()
    json5 = education()
    json6 = energy()
    json7 = water()
    json8 = economic()
    json9 = unemployment()
    json10 = electricity()
    json11 = sanitation()

    return render_template('index.html',
                           json1=json1, json2=json2, json3=json3,
                           json4=json4, json5=json5, json6=json6,
                           json7=json7, json8=json8, json9=json9,
                           json10=json10, json11=json11)


@app.route('/registered')
def home_user():
    if current_user.is_authenticated:
        if current_user.has_role('city'):
            return redirect(url_for('dashboard'))

        if current_user.has_role('researcher'):
            return redirect(url_for('researcher_dashboard'))

        return render_template('security/noperms.html')
    else:
        return redirect(url_for('security.login'))


@app.errorhandler(CSRFError)
def csrf_error(e):
    return render_template('errors/400.html', base=request.base_url), 400


@app.errorhandler(404)
def page_not_found(e):
    return render_template('errors/404.html'), 404


@app.errorhandler(500)
def server_error(e):
    return render_template('errors/500.html'), 500
