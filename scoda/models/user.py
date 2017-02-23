from ..app import db, app
from ..forms import Form
from flask import render_template

from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
    func,
    JSON
)
from sqlalchemy.orm import relationship
from flask_security import UserMixin, RoleMixin, Security, SQLAlchemyUserDatastore
from flask_security import LoginForm as Form
from wtforms.fields.html5 import EmailField
from wtforms import StringField, PasswordField, validators
from wtforms.validators import DataRequired, Length, InputRequired
from wtforms.widgets import TextArea


class User(db.Model, UserMixin):
    """
    A user who can login and use SCODA.
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    email = Column(String(50), index=True, nullable=False, unique=True)
    password = Column(String(100), default='')
    disabled = Column(Boolean, default=False)
    admin = Column(Boolean, default=False)

    created_at = Column(DateTime(timezone=True), index=True, unique=False, nullable=False, server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.current_timestamp())

    # associations
    roles = db.relationship('Role', secondary='roles_users', backref=db.backref('users', lazy='dynamic'))

    def __repr__(self):
        return "<User phone=%s>" % (self.phone,)

    # Flask-Security requires an active attribute
    @property
    def active(self):
        return not self.disabled

    @active.setter
    def active(self, value):
        self.disabled = not value

    @classmethod
    def create_defaults(self):
        from flask_security.utils import encrypt_password

        admin_user = User()
        admin_user.admin = True
        admin_user.email = "matthew@opendata.durban"
        admin_user.password = encrypt_password('admin')
        return [admin_user]


class Role(db.Model, RoleMixin):
    """
    Determines which features users can access.
    """
    __tablename__ = "roles"

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(80), unique=True)
    description = db.Column(db.String(255))

    def __unicode__(self):
        return unicode(self.name)

    @classmethod
    def create_defaults(self):
        return [
            Role(name='city', description='user can access city user panels'),
            Role(name='researcher', description='user can access researcher panel')
        ]


roles_users = db.Table('roles_users',
                       db.Column('user_id', db.Integer(), db.ForeignKey('users.id', ondelete='CASCADE')),
                       db.Column('role_id', db.Integer(), db.ForeignKey('roles.id', ondelete='CASCADE')))


class LoginForm(Form):
    email = EmailField('Email', validators=[InputRequired()])
    password = PasswordField('Password', validators=[InputRequired()])


class UserSet(db.Model):
    """
    A user's uploaded datasets
    """
    __tablename__ = "user_sets"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, index=True, nullable=False, unique=False)
    ds_name = Column(String(80), index=False, nullable=False, unique=False)
    ds_title = Column(String(80), index=False, nullable=False, unique=False)
    pk_id = Column(String(80), index=False, nullable=False, unique=False)
    file_id = Column(String(80), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Dataset='%s'>" % (self.ds_name)

    @classmethod
    def all(cls):
        return cls.query.order_by(UserSet.ds_name).all()


class UserAnalysis(db.Model):
    """
    A user's custom analyses
    """
    __tablename__ = "user_analyses"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, index=True, nullable=False, unique=False)
    ds_name = Column(String(80), index=False, nullable=False, unique=False)
    description = Column(String(300), index=False, nullable=False, unique=False)
    current = Column(JSON)
    previous = Column(JSON)

    def __repr__(self):
        return "<Analysis-'%s'>" % (self.ds_name)

    @classmethod
    def all(cls):
        return cls.query.order_by(UserAnalysis.ds_name).all()


class NewAnalysisForm(Form):
    ds_name = StringField('Filename', [validators.DataRequired()])
    description = StringField('Filename', [validators.DataRequired()], widget=TextArea())

    def __init__(self, *args, **kwargs):
        super(NewAnalysisForm, self).__init__(*args, **kwargs)

    def validate(self):
        return super(NewAnalysisForm, self).validate()

    def populate_obj(self, obj):
        super(NewAnalysisForm, self).populate_obj(obj)


class EmailForm(Form):
    description = StringField('Comment', [validators.DataRequired()], widget=TextArea())

    def __init__(self, *args, **kwargs):
        super(EmailForm, self).__init__(*args, **kwargs)

    def validate(self):
        return super(EmailForm, self).validate()

    def populate_obj(self, obj):
        super(EmailForm, self).populate_obj(obj)


# user authentication
user_datastore = SQLAlchemyUserDatastore(db, User, Role)
security = Security(app, user_datastore)
app.extensions['security'].render_template = render_template
