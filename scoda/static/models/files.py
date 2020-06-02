from ..app import db
from ..forms import Form
from wtforms import FileField, validators, SelectField, IntegerField, StringField
from wtforms.widgets import HiddenInput, TextArea
from .user import UserSet
from flask_security import current_user

from sqlalchemy import (
    Column,
    Date,
    Float,
    ForeignKey,
    Integer,
    String,
    Text,
    func,
    Boolean,
    event,
    ARRAY
)


class NewFileForm(Form):

    ds_name = StringField('Filename', [validators.DataRequired()])
    fileName = FileField('File')
    description = StringField('Filename', [validators.DataRequired()], widget=TextArea())
    new_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(NewFileForm, self).__init__(*args, **kwargs)

    def validate(self):
        return super(NewFileForm, self).validate()

    def populate_obj(self, obj):
        super(NewFileForm, self).populate_obj(obj)


class EditFileForm(Form):

    ds_id = SelectField('Dataset Name', [validators.DataRequired()])
    fileName = FileField('Filename', [validators.DataRequired()])
    edit_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(EditFileForm, self).__init__(*args, **kwargs)

        query = db.session.query(UserSet.id, UserSet.ds_title).filter(UserSet.user_id == current_user.id).order_by(UserSet.ds_title)

        self.ds_id.choices = [[str(i), str(n)] for i, n in query]

    def validate(self):
        return super(EditFileForm, self).validate()

    def populate_obj(self, obj):
        super(EditFileForm, self).populate_obj(obj)


class DeleteFileForm(Form):

    ds_id = SelectField('Dataset Name', [validators.DataRequired()])
    delete_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(DeleteFileForm, self).__init__(*args, **kwargs)

        query = db.session.query(UserSet.id, UserSet.ds_title).filter(UserSet.user_id == current_user.id).order_by(UserSet.ds_title)

        self.ds_id.choices = [[str(i), str(n)] for i, n in query]

    def validate(self):
        return super(DeleteFileForm, self).validate()

    def populate_obj(self, obj):
        super(DeleteFileForm, self).populate_obj(obj)