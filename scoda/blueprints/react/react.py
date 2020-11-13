from flask import render_template, Blueprint
import json
REACT = Blueprint('REACT',__name__)

@REACT.route('/')
@REACT.route('/hello')
def index():
	return render_template("index.html")


@REACT.route('/dexter')
def dexter():
	return render_template("dexter.html")

@REACT.route('/test_data')
def test_data():
	data = {
		"test_data":'Hellow From Flask'
	}
	data = json.dumps(data)
	print(data)
	return data