from ..app import db
from ..forms import Form
from wtforms import StringField, validators
from sqlalchemy import func
from wtforms.widgets import TextArea

from sqlalchemy import (
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    func,
    Boolean,
    event,
)

class DataSet(db.Model):
    __tablename__ = 'datasets'

    id = Column(Integer, autoincrement=True, primary_key=True)
    dataset_id = Column(Integer, ForeignKey('authors.id'), index=True, nullable=False)
    indicator_id = db.Column(db.String(50))
    phone_number = db.Column(db.String(10))
    initiate_problem = db.Column(db.String(1024))
    timestamp = db.Column(db.DateTime(timezone=True), index=True, unique=False, nullable=False,
                          server_default=func.now())

    def __repr__(self):
        return '<id {}>'.format(self.id)


class DataForm(Form):
    class Meta:
        model = DataSet

    name = StringField('', [validators.Length(max=50), validators.DataRequired()])
    phone_number = StringField('', [validators.Length(min=10, max=10), validators.DataRequired()])
    initiate_problem = StringField('', [validators.Length(max=1024),
                                                                    validators.DataRequired()], widget=TextArea())

    def __init__(self, *args, **kwargs):
        super(InitiateForm, self).__init__(*args, **kwargs)

    def validate(self):
        return super(InitiateForm, self).validate()

    def populate_obj(self, obj):
        super(InitiateForm, self).populate_obj(obj)
