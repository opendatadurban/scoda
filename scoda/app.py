from flask import Flask
import jinja2

app = Flask(__name__, static_folder='static')
tmpl_dir = '%s/templates' % app.root_path
app.jinja_loader = jinja2.FileSystemLoader(tmpl_dir)

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
db = SQLAlchemy(app)

# Mail
from flask_mail import Mail

mail = Mail(app)
