from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from .models import db
from .models import *


@app.route('/city')
def city_dashboard():
    return render_template('city/city.html')
