from flask import Flask
import jinja2
import os

app = Flask(__name__, static_folder='static')

env = 'production'
app.config['ENV'] = env
app.config.from_pyfile('config.py')

# app.config['SECURITY_USER_IDENTITY_ATTRIBUTES'] = ('name', 'email')

# CSRF protection
from flask_wtf.csrf import CsrfProtect

CsrfProtect(app)

# Database
from flask_sqlalchemy import SQLAlchemy

# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://scoda:scoda@localhost/scoda'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://klgbmkjzcikjgo:72da7f860dfd10584e1e0aa1f1a982418bde78d05fa8731ab745ad3c7b286e3b@ec2-54-225-240-168.compute-1.amazonaws.com:5432/d4mc5odij5h1se'
db = SQLAlchemy(app)

# Mail
from flask_mail import Mail

mail = Mail(app)

from flask_mobility import Mobility

mobility = Mobility(app)
