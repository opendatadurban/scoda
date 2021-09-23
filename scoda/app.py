
from flask import Flask
import jinja2
import os
from whitenoise import WhiteNoise

app = Flask(__name__)
app.wsgi_app = WhiteNoise(app.wsgi_app)
my_static_folders = (
    'scoda/static/public/',
    'scoda/static/dist/css/',
    'scoda/static/dist/img/',
    'scoda/static/dist/js/',
)
for static in my_static_folders:
    app.wsgi_app.add_files(static)

# disable on production when using white noise
# app = Flask( __name__, static_folder='static')

# setup configs
env = os.environ.get('FLASK_ENV', 'development')

app.config['ENV'] = env
app.config.from_pyfile('config/%s.cfg' % env)
# app.config['SECURITY_USER_IDENTITY_ATTRIBUTES'] = ('name', 'email')

# CSRF protection
from flask_wtf.csrf import CsrfProtect

csrf = CsrfProtect(app)

# Database
from flask_sqlalchemy import SQLAlchemy

# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://scoda:scoda@localhost/scoda'
db = SQLAlchemy(app)
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Mail
from flask_mail import Mail

mail = Mail(app)

from flask_mobility import Mobility

mobility = Mobility(app)

