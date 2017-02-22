from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from flask_security import current_user
from .models import db
from .models.user import UserAnalysis
from itertools import izip_longest

def grouper(iterable, n, fillvalue=None):
    "Collect data into fixed-length chunks or blocks"
    # grouper('ABCDEFG', 3, 'x') --> ABC DEF Gxx"
    args = [iter(iterable)] * n
    return izip_longest(*args, fillvalue=fillvalue)

@app.route('/dashboard')
def city_dashboard():

    query = db.session.query(UserAnalysis.id, UserAnalysis.ds_name, UserAnalysis.description) \
        .filter(UserAnalysis.user_id == current_user.id).order_by(UserAnalysis.id.desc())

    analyses = []

    for i in grouper(query, 4):
        analyses.append(i)

    print analyses

    return render_template('city/city_dashboard.html', analyses=analyses)
