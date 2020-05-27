from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from flask_security import current_user
from .models import db
from .models.user import UserAnalysis
from .models.files import UserSet
from itertools import zip_longest

def grouper(iterable, n, fillvalue=None):
    "Collect data into fixed-length chunks or blocks"
    # grouper('ABCDEFG', 3, 'x') --> ABC DEF Gxx"
    args = [iter(iterable)] * n
    return zip_longest(*args, fillvalue=fillvalue)

@app.route('/dashboard')
def city_dashboard():

    query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
        .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

    query2 = db.session.query(UserSet.id, UserSet.ds_title, UserSet.description).filter(UserSet.user_id == current_user.id).order_by(
        UserSet.ds_title)

    analyses = []

    datasets = []

    for i in grouper(query, 3):
        analyses.append(i)

    for i in grouper(query2, 3):
        datasets.append(i)

    return render_template('city/city_dashboard.html', analyses=analyses, datasets=datasets)
