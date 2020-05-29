from flask import render_template, Blueprint
import json
SCODA = Blueprint('SCODA',__name__)

@SCODA.route('/')
@SCODA.route('/scoda')
def index():
	return render_template("scoda.html")

@SCODA.route('/test_data')
def test_data():
	data = {
		"test_data":'Hellow From Flask'
	}
	data = json.dumps(data)
	print(data)
	return data