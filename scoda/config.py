import os

basedir = os.path.abspath(os.path.dirname(__file__))

DEBUG = False
TESTING = False
SQLALCHEMY_TRACK_MODIFICATIONS = False
CSRF_ENABLED = True
SECRET_KEY = os.environ['SECRET_KEY']
MAIL_SERVER = os.environ['MAIL_SERVER']
MAIL_DEFAULT_SENDER = os.environ['MAIL_DEFAULT_SENDER']
MAIL_USERNAME = os.environ['MAIL_USERNAME']
MAIL_PASSWORD = os.environ['MAIL_PASSWORD']
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True

# Flask-Security config
SECURITY_URL_PREFIX = "/user"
SECURITY_PASSWORD_HASH = "sha256_crypt"
SECURITY_PASSWORD_SALT = "sha256_crypt"
# SECURITY_USER_IDENTITY_ATTRIBUTES = 'name'

# Flask-Security admin
# SECURITY_EMAIL_SENDER = MAIL_DEFAULT_SENDER
# Flask-Security URLs, overridden because they don't put a / at the end
SECURITY_LOGIN_URL = "/login/"
SECURITY_REGISTER_URL = "/register/"
SECURITY_LOGOUT_URL = "/logout/"
SECURITY_CHANGE_URL = "/change-password/"
SECURITY_RESET_URL = "/forgot-password"
SECURITY_POST_LOGIN_VIEW = "/dashboard"
SECURITY_POST_REGISTER_VIEW = "/login/"

# Flask-Security email subject lines
SECURITY_EMAIL_SUBJECT_REGISTER = "Welcome to SCODA"
SECURITY_EMAIL_SUBJECT_PASSWORD_RESET = "Password reset instructions for your SCODA account"
SECURITY_EMAIL_SENDER = "admin@opendata.durban"

# Flask-Security features
SECURITY_RECOVERABLE = True
SECURITY_CHANGEABLE = True
SECURITY_REGISTERABLE = True
SECURITY_SEND_REGISTER_EMAIL = False