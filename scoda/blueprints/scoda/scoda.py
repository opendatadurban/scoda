from flask import render_template, Blueprint
import json
SCODA = Blueprint('SCODA',__name__)

# @SCODA.route('/')
# def index():
# 	return render_template("scoda.html")

@SCODA.route('/home')
@SCODA.route('/')
def home():
	return render_template("home.html")

@SCODA.route('/toolkit')
def toolkit():
	return render_template("toolkit.html")

@SCODA.route('/about-us')
def about():
	return render_template("about.html")

@SCODA.route('/socr')
def socr():
	return render_template("socr.html")