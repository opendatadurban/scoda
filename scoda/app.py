from flask import Flask
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

import sentry_sdk
from sentry_sdk.integrations.flask import FlaskIntegration
sentry_sdk.init(
    dsn=f"{app.config['SENTRY_DSN']}",
    integrations=[
        FlaskIntegration(),
    ],
    traces_sample_rate=1.0
    # Set traces_sample_rate to 1.0 to capture 100%
    # of transactions for performance monitoring.
    # We recommend adjusting this value in production.
)

# Mail
from flask_mail import Mail

mail = Mail(app)

from redis import Redis
from redis.cluster import RedisCluster
# redis_host = os.getenv(app.config['REDIS_HOST'], "")

redisClient = Redis.from_url(app.config['REDIS_URL'])
print(app.config['REDIS_URL'])