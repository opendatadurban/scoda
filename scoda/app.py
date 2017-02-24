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

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
app.config['SECRET_KEY'] = os.environ['SECRET_KEY']
app.config['MAIL_SERVER'] = os.environ['MAIL_SERVER']
app.config['MAIL_DEFAULT_SENDER'] = os.environ['MAIL_DEFAULT_SENDER']
app.config['MAIL_USERNAME'] = os.environ['MAIL_USERNAME']
app.config['MAIL_PASSWORD'] = os.environ['MAIL_PASSWORD']
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://scoda:scoda@localhost/scoda'
db = SQLAlchemy(app)

# Mail
from flask_mail import Mail

mail = Mail(app)
