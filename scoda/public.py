from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from .models import db
from .models import *


@app.route('/scoda')
def public():
    return render_template('home/home.html')
