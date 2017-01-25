from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from .models import db
from .models import *


@app.route('/researcher')
def researcher_dashboard():
    return render_template('researcher/researcher.html')
