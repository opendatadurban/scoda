from flask import render_template, Blueprint
import json
SCODA = Blueprint('SCODA',__name__)

@SCODA.route('/')
def index():
	return render_template("scoda.html")

@SCODA.route('/socr')
def socr():
	return render_template("socr.html")