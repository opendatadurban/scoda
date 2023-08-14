from scoda.app import app,redisClient
from flask import request, url_for, redirect, flash, make_response, session, render_template, jsonify, Response
from flask_security import current_user
from itertools import product, zip_longest
from .models import *
from .models.user import UserAnalysis
from .models.datasets import ExploreForm
from pandas import read_sql_query,Series
import gviz_api
import json
import itertools
from .app import csrf

from sqlalchemy_searchable import search

def grouper(iterable, n, fillvalue=None):
    "Collect data into fixed-length chunks or blocks"
    # grouper('ABCDEFG', 3, 'x') --> ABC DEF Gxx"
    args = [iter(iterable)] * n
    return zip_longest(*args, fillvalue=fillvalue)

@app.route('/api/indicators-list/', defaults={'check': ''})
@app.route('/api/indicators-list/<check>', methods=['GET', 'POST'])
def api_indicators_list(check):
    remove_list = ['Poverty rate', 'Gini Coefficient', 'Gross Value Add', 'Exports', 'Multiple deprivation index',
                   'Human Development Index']
    if check == "codebook":
        redis_key = "testing-indicators"
        if redisClient.exists(redis_key):
            indicators_list = json.loads(redisClient.get(redis_key))
        else:
            indicators_list = [[str(c.id), c.ds_name] for c in
                               CbTempIndicators.query.all() if
                               c.ds_name not in remove_list]
            redisClient.set(redis_key, json.dumps(indicators_list))
    else:
        indicators_list = [[str(c.id), c.in_name] for c in Indicator.all() if c.in_name not in remove_list]
    return jsonify(indicators_list)


@app.route('/api/explore_new', methods=['GET', 'POST'])
def explore_new():
    ind = request.args.get('indicator_id') or 76
    city = request.args.get('city')
    avg_filter = request.args.get('average')
    year_filter = request.args.getlist('year')
    query = db.session.query(CbRegion.name.label('re_name'), CbDataPoint.start_dt,
                             CbIndicator.name.label('ds_name'), CbDataPoint.value,
                             CbDataPoint.end_dt). \
        filter(CbDataPoint.indicator_id == ind).filter(CbDataPoint.indicator_id == CbIndicator.id). \
        filter(CbDataPoint.region_id == CbRegion.id)
    if city:
        query = query.filter(CbRegion.name == city)
    if year_filter:
        years_db = db.session.query(CbYear.id).filter(CbYear.name.in_([int(yr) for yr in year_filter]))
        query = query.filter(CbDataPoint.year_start_id.in_([yr[0] for yr in years_db]))
    df = read_sql_query(query.statement, query.session.bind)

    df = df.rename(columns={'name': 're_name', 'name.1': 'ds_name'})
    if not query.first():
        # No data found
        return jsonify({})
    if df['start_dt'].iloc[0]:
        df["year"] = df["start_dt"].apply(lambda x: int(x.strftime('%Y')))
        df["start_dt"] = df["year"]
    elif df['end_dt'].iloc[0]:
        df["year"] = df["end_dt"].apply(lambda x: int(x.strftime('%Y')))
        df["start_dt"] = df["year"]
        del df["end_dt"]
    df = df.drop_duplicates()
    years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
    chart_data = []
    for y in years:
        labels = []
        values = []
        for c in cities:
            labels.append(c)
            for d in datasets:
                datapoint = df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]
                if len(datapoint) != 0:
                    values.append(
                        float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]) )
        chart_data.append(
            {
                'labels' :labels,
                'year': str(y),
                'values':values
            })
    return jsonify(chart_data)

@app.route('/api/stats', methods=['GET', 'POST'])
def indicator_stats():
    indicator_id = request.args.get('indicator_id')
    codebook = True
    if not indicator_id:
        return jsonify({"message": "Please choose an indicator"}), 404
    city = request.args.get('city')
    avg_filter = request.args.get('average')
    year_filter = request.args.getlist('year')
    if avg_filter:
        return IndicatorService().average_calculation(city=city,
                                                      indicator_id=indicator_id,
                                                      year_filter=year_filter,
                                                      temp_indicator_check=
                                                      True if request.args.getlist('temp_indicator') else False)
    return jsonify({"message": "No filters selected"}), 404

@app.route('/api/explore/', defaults={'check': ''})
@app.route('/api/explore/<check>', methods=['GET', 'POST'])
def api_explore(check):
    if request.args.get('indicator_id'):
        ind = request.args.get('indicator_id')
    else:
        ind = 76

    city = request.args.get('city')
    year_filter = request.args.getlist('year')
    print(ind)
    plot = 1
    print(check)
    # codebook query
    if check == "codebook":
        # query = db.session.query(CbRegion.name.label('re_name'), CbDataPoint.start_dt,
        #                          CbIndicator.name.label('ds_name'), CbDataPoint.value,
        #                          CbDataPoint.end_dt). \
        #     filter(CbDataPoint.indicator_id == ind).filter(CbDataPoint.indicator_id == CbIndicator.id). \
        #     filter(CbDataPoint.region_id == CbRegion.id)
        query = db.session.query(CbTempIndicators.re_name.label('re_name'), CbTempIndicators.start_dt,
                                 CbTempIndicators.ds_name.label('ds_name'), CbTempIndicators.value,
                                 CbTempIndicators.start_dt.label('end_dt')). \
            filter(CbTempIndicators.indicator_id == ind)
        if city:
            query = query.filter(CbTempIndicators.re_name == city)
        if year_filter:
            years_db = db.session.query(CbYear.id).filter(CbYear.name.in_([int(yr) for yr in year_filter]))
            query = query.filter(CbDataPoint.year_start_id.in_([yr[0] for yr in years_db]))
        if not query.first():
            return jsonify({})
        df = read_sql_query(query.statement, query.session.bind)
        df = df.rename(columns={'name': 're_name', 'name.1': 'ds_name'})
        if df['start_dt'].iloc[0]:
            df["year"] = df["start_dt"]
            df["start_dt"] = df["year"]
        elif df['end_dt'].iloc[0]:
            df["year"] = df["end_dt"]
            del df["end_dt"]

    else:
        query = db.session.query(Region.re_name, DataPoint.year, DataSet.ds_name, DataPoint.value). \
            filter(DataPoint.indicator_id == ind).filter(DataPoint.dataset_id == DataSet.id). \
            filter(DataPoint.region_id == Region.id)
        df = read_sql_query(query.statement, query.session.bind)
        print("In else")
    df = df.drop_duplicates()
    # print(app.root_path)
    # df.to_csv('%s/data/%s' % (app.root_path, "data_test.csv"), index=False)
    table = []
    table_plot = []
    years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
    cities = [c for c in cities]
    options_list = [{'optid': i, 'optname': d} for i, d in enumerate(datasets, start=1)]
    years_list = [{'optid': i, 'optname': 'Year: %s' % d} for i, d in enumerate(sorted(years), start=1)]

    plot_type = 1
    print(len(years))
    if (len(datasets) > 1) or (len(years) == 1):
        plot_type = 2

    colours = ['#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0', '#8bc34a',
               '#ffeb3b', '#9e9e9e', '#3f51b5', '#e91e63','#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0', '#8bc34a',
               '#ffeb3b', '#9e9e9e', '#3f51b5', '#e91e63']
    print(f"len(datasets):{len(datasets)}")
    series = {i: {'color': colours[i]} for i in range(len(datasets))}
    view = list(range(2, len(datasets) + 2))
    view.insert(0, 0)

    minVal = min(map(float, list(df.value.unique())))
    maxVal = max(map(float, list(df.value.unique()))) * 1.1

    head = ['City', 'Year']
    for i in datasets:
        head.append(str(i))
    table.append(head)
    table_plot.append(head)
    # print(f"df:{df}")
    if plot_type == 1:
        df_i = df.iloc[:, [0, 1, 3]]

        schema = [('City', 'string'), ('Year', 'string'), ('%s' % datasets[0], 'number')]

        data_table = gviz_api.DataTable(schema)
        data_table.LoadData(df_i.values)
        table_plot = data_table.ToJSon(columns_order=('City', '%s' % datasets[0], 'Year'))

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
                            df["ds_name"] == d), "value"].iloc[0]))
                table.append(row)
    else:
        for c in cities:
            for y in years:
                row = [str(c), str(y)]
                for d in datasets:
                    datapoint = df.loc[(df["re_name"] == c) & (df["year"] == y) & (df["ds_name"] == d), "value"]
                    if len(datapoint) == 0:
                        row.append(None)
                    else:
                        checks = df.loc[(df["re_name"] == c) & (df["year"] == y) & (
                            df["ds_name"] == d), "value"]
                        print(df.loc[(df["re_name"] == c) & (df["year"] == y) & (
                            df["ds_name"] == d), "value"].iloc[0])
                        if isinstance(checks,Series):
                            row.append(checks.iloc[0])
                        else:
                            row.append(checks)
                        print(f"c:{c} -"
                              f"y: {y} -"
                              f"d: {d}")
                        # row.append(
                        #     float(df.loc[(df["re_name"] == c) & (df["year"] == y) & (
                        #     df["ds_name"] == d), "value"].iloc[0]))
                table.append(row)
    yrs = ['Year'] + [str(y) for y in years[::-1]]
    payload = {"plot":plot, "table":table, "table_plot":table_plot,"colours":colours,"year":str(max(years)), "series":series,
             "view":view, "plot_type":plot_type,"min":minVal,"max":maxVal, "cities":cities, "options_list":options_list,
             "years_list":years_list, "years":yrs}
    return jsonify(payload)



@app.route('/api/indicator/<int:indicator_id>', methods=['GET', 'POST'])
def api_indicators(indicator_id):
    if not indicator_id:
        message = 'No indicator selected'
        resp = jsonify(response_message=message)
        resp.status_code = 404
        return resp
    # codebook query
    indicators = db.session.query(CbRegion.name.label('re_name'), CbDataPoint.start_dt.cast(Date),
                             CbIndicator.name.label('ds_name'), CbDataPoint.value,
                             CbDataPoint.end_dt.cast(Date)). \
        filter(CbDataPoint.indicator_id == indicator_id).filter(CbDataPoint.indicator_id == CbIndicator.id). \
        filter(CbDataPoint.region_id == CbRegion.id).all()
    if indicators:
        resp = jsonify(indicators)
        resp.status_code = 200
        return resp
    else:
        message = 'No indicator selected'
        resp = jsonify(response_message=message)
        resp.status_code = 404
        return resp

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
            print(query.all())
            indicator = Indicator.query.get(ind)

            df = read_sql_query(query.statement, query.session.bind)
            # df.to_csv('%s/data/%s' % (app.root_path, "data_test.csv"), index=False)
            table = []
            years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
            cities = [c for c in cities]

            options_list = [{'optid': i, 'optname': d} for i, d in enumerate(datasets, start=1)]
            years_list = [{'optid': i, 'optname': 'Year: %s' % d} for i, d in enumerate(sorted(years), start=1)]

            plot_type = 1
            if (len(datasets) > 1) or (len(years) == 1):
                plot_type = 2

            colours = ['#f44336', '#03a9f4', '#4caf50', '#ffc107', '#03a9f4', '#ff5722', '#9c27b0', '#8bc34a',
                       '#ffeb3b', '#9e9e9e', '#3f51b5', '#e91e63']
            series = {i: {'color': colours[i]} for i in range(len(datasets))}
            view = list(range(2, len(datasets) + 2))
            view.insert(0, 0)

            minVal = min(map(float, list(df.value.unique())))
            maxVal = max(map(float, list(df.value.unique()))) * 1.1

            head = ['City', 'Year']
            for i in datasets:
                head.append(str(i))
            table.append(head)
            print(df)
            # df.re_name = df.re_name.str.encode('utf-8')
            if plot_type == 1:
                df = df.iloc[:, [0, 1, 3]]

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
            yrs = ['Year'] + [str(y) for y in years[::-1]]
            return render_template('explore/explore.html', form=form, plot=plot, table=table, colours=colours,
                                   year=str(max(years)), series=series, view=view, plot_type=plot_type, min=minVal,
                                   max=maxVal, cities=cities, options_list=options_list, years_list=years_list,
                                   tour=tour, indicator=indicator, analyses=analyses, years=yrs)
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

@app.route('/api-temp/explore/')
def api_explore_temp():
    indicator_id = request.args.get('indicator_id')
    city = request.args.get('city')
    year_filter = request.args.getlist('year')
    # non codebook query
    query = db.session.query(CbTempIndicators.re_name, CbTempIndicators.start_dt,
                             CbTempIndicators.ds_name, CbTempIndicators.value,
                             CbTempIndicators.year).filter(CbTempIndicators.indicator_id == indicator_id)
    if not query.first():
        return jsonify({})
    if city:
        query = query.filter(CbTempIndicators.re_name == city)
    if year_filter:
        query = query.filter(CbTempIndicators.year.in_([int(yr) for yr in year_filter]))
    df = read_sql_query(query.statement, query.session.bind)
    df = df.drop_duplicates()

    table = []
    years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
    cities = list(cities)
    options_list = [{'optid': i, 'optname': d} for i, d in enumerate(datasets, start=1)]

    minVal = min(map(float, list(df.value.unique())))
    maxVal = max(map(float, list(df.value.unique()))) * 1.1

    head = ['City', 'Year']
    for i in datasets:
        head.append(str(i))
    table.append(head)

    for c, y in product(cities, years):
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
    yrs = ['Year'] + [str(y) for y in years[::-1]]
    payload = {"table":table,"year":str(max(years)),"min":minVal,"max":maxVal,
               "cities":cities,
               "options_list":options_list,
              "years":yrs}
    return jsonify(payload)

@app.route('/search-api', methods=['GET', 'POST'])
def api_search():
    form = APIForm()
    if request.method == 'POST' and form.validate():

        print(request.data)
    return render_template('indicators-api/generate-api.html',form=form,form_url='/search-api')

@app.route('/api/codebook', methods=['GET', 'POST'])
@app.route('/api/codebook/<int:page>', methods=['GET', 'POST'])
@csrf.exempt
def api_codebook(page=1):
    codebook_redis = "codebook-api"
    store_in_redis = False
    if request.method == 'GET':
        if redisClient.exists(codebook_redis):
            result_list = json.loads(redisClient.get(codebook_redis))
            return jsonify(result_list)
        store_in_redis = True
    query = db.session.query(CbIndicator). \
        outerjoin(CbTheme, CbTheme.id == CbIndicator.theme_id). \
        outerjoin(CbSource, CbSource.id == CbIndicator.source_id). \
        outerjoin(CbUnit, CbUnit.id == CbIndicator.unit_id)

    if request.method == 'POST':
        data = request.get_json()
        print(f'data: {data}')
        if data['c88']:
            query = query.filter(CbIndicator.c88_theme.in_(data['c88']))

        if data['socr']:
            query = query.filter(CbIndicator.socr_theme.in_(data['socr']))

        if data['sdg']:
            query = query.filter(CbIndicator.sdg_theme.in_(data['sdg']))

        if data['search']:
            query = search(query, data['search'], sort=True)

    # else:
    #     query = query.limit(150).offset((page - 1) * 20)

    row_count = query.count()
    query = query.all()
    # query.sort(key=lambda x: x.code)

    result_list = [row_count]
    for day, dicts_for_group_code in itertools.groupby(query, key=lambda x:x.group_code):
        dicts_for_group_code = list(dicts_for_group_code)
        day_dict = {
            "id": str(dicts_for_group_code[0].id),
            "varCode": dicts_for_group_code[0].code,
            "groupCode": dicts_for_group_code[0].group_code,
            "indicator": dicts_for_group_code[0].name,
            "c88": dicts_for_group_code[0].c88_theme,
            "socr": dicts_for_group_code[0].socr_theme,
            "sdg": dicts_for_group_code[0].sdg_theme,
            "definition": dicts_for_group_code[0].definition,
            "source": dicts_for_group_code[0].source.name if dicts_for_group_code[0].source else None,
            "reportingResponsibility": dicts_for_group_code[0].reporting_responsibility,
            "notesOnCalculation": dicts_for_group_code[0].notes_on_calculation,
            "variableType": dicts_for_group_code[0].unit.name if dicts_for_group_code[0].unit else None,
            "frequencyOfCollection": dicts_for_group_code[0].frequency_of_collection,
            "automatibility": dicts_for_group_code[0].automatable,
            "granulity": dicts_for_group_code[0].granularity,
            "gathering_method": dicts_for_group_code[0].gathering_method,
            "expandability": dicts_for_group_code[0].expandable,
            "period": dicts_for_group_code[0].period,
            "unit_of_measurement": dicts_for_group_code[0].unit.name if dicts_for_group_code[0].unit else None,
            "source_link": dicts_for_group_code[0].url_link,
            "data_check":True if dicts_for_group_code[0].indicator_data else False
        }
        children = []
        dicts_for_group_code.pop(0)
        for d in dicts_for_group_code:
            child = {
                "id": str(d.id),
                "varCode": d.code,
                "groupCode": d.group_code,
                "indicator": d.name,
                "c88": d.c88_theme,
                "socr": d.socr_theme,
                "sdg": d.sdg_theme,
                "definition": d.definition,
                "source": d.source.name if d.source else None,
                "reportingResponsibility": d.reporting_responsibility,
                "notesOnCalculation": d.notes_on_calculation,
                "variableType": d.unit.name if d.unit else None,
                "frequencyOfCollection": d.frequency_of_collection,
                "automatibility": d.automatable,
                "granulity": d.granularity,
                "gathering_method": d.gathering_method,
                "expandability": d.expandable,
                "period": d.period,
                "unit_of_measurement": d.unit.name if d.unit else None,
                "source_link": d.url_link,
                "data_check": bool(d.indicator_data),
            }

            children.append(child)
        day_dict.update({"children": children})
        result_list.append(day_dict)
    if store_in_redis:
        redisClient.set(codebook_redis, json.dumps(result_list))
    return jsonify(result_list)

class IndicatorService():

    def __init__(self):
        self.safe = 1

    def df_temp_query(self,city:str,year_filter,indicator_id:int):
        # non codebook query
        query = db.session.query(CbTempIndicators.re_name, CbTempIndicators.start_dt,
                                 CbTempIndicators.ds_name, CbTempIndicators.value,
                                 CbTempIndicators.year).filter(CbTempIndicators.indicator_id == indicator_id)
        if city:
            query = query.filter(CbTempIndicators.re_name == city)
        if year_filter:
            query = query.filter(CbTempIndicators.year.in_([int(yr) for yr in year_filter]))
        df = read_sql_query(query.statement, query.session.bind)
        df = df.drop_duplicates()
        return df

    def df_query(self,city:str,year_filter,indicator_id:int):
        query = db.session.query(CbRegion.name.label('re_name'), CbDataPoint.start_dt,
                                 CbIndicator.name.label('ds_name'), CbDataPoint.value,
                                 CbDataPoint.end_dt). \
            filter(CbDataPoint.indicator_id == indicator_id).filter(CbDataPoint.indicator_id == CbIndicator.id). \
            filter(CbDataPoint.region_id == CbRegion.id)
        if city:
            query = query.filter(CbRegion.name == city)
        if year_filter:
            try:
                if not year_filter[0] == "all":
                    years_db = db.session.query(CbYear.id).filter(CbYear.name.in_([int(yr) for yr in year_filter]))
                    query = query.filter(CbDataPoint.year_start_id.in_([yr[0] for yr in years_db]))
            except Exception as e:
                print(e)
        df = read_sql_query(query.statement, query.session.bind)

        df = df.rename(columns={'name': 're_name', 'name.1': 'ds_name'})
        if not query.first():
            # No data found
            return df
        if df['start_dt'].iloc[0]:
            df["year"] = df["start_dt"].apply(lambda x: int(x.strftime('%Y')))
            df["start_dt"] = df["year"]
        elif df['end_dt'].iloc[0]:
            df["year"] = df["end_dt"].apply(lambda x: int(x.strftime('%Y')))
            df["start_dt"] = df["year"]
            del df["end_dt"]
        df = df.drop_duplicates()
        return df

    def average_calculation(self,city:str,year_filter,indicator_id:int,temp_indicator_check:bool):
        if temp_indicator_check:
            df = self.df_temp_query(city=city,indicator_id=indicator_id,year_filter=year_filter)
        else:
            df = self.df_query(city=city,indicator_id=indicator_id,year_filter=year_filter)
        if df.empty:
            return jsonify({"message": "No data found"}), 400
        if not year_filter:
            df = df.loc[df['year'] == df['year'].max()]
        years, cities, datasets = [list(df.year.unique()), list(df.re_name.unique()), list(df.ds_name.unique())]
        total_average = df['value'].sum() / len(cities)  / len(years)
        yearly_average_list =[]
        for y in years:
            year_data = df.loc[df['year'] == y]
            yearly_average = year_data['value'].sum() / len(cities)
            yearly_average_list.append({'year':str(y),'city_average':round(yearly_average,2)})
        return jsonify({'indicators':datasets,
                        'total_average':round(total_average,2),
                        'yearly_averages':yearly_average_list,
                        'cities':cities})