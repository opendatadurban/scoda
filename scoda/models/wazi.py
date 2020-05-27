from ..app import db
from scoda.app import app
from .datasets import WaziRegion
from flask_security import current_user
from ..forms import Form
from wtforms import validators, SelectField, SelectMultipleField, IntegerField
from wtforms.widgets import HiddenInput
from ..models.user import UserSet, UserAnalysis

import json


class WaziForm(Form):

    region = SelectMultipleField('Municipality', [validators.DataRequired()])
    top_tier = SelectField('Category', [validators.DataRequired()])
    lower_tier = SelectField('Sub-Category', [validators.DataRequired()], coerce=str)
    wazi_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(WaziForm, self).__init__(*args, **kwargs)

        self.region.choices = [[str(c.id), str(c.re_name)] for c in WaziRegion.all()]

        wazikeys = ['child_households', 'children', 'demographics', 'economics', 'education', 'elections', 'households',
                    'service_delivery']

        self.top_tier.choices = [[str(P), str('%s' % (" ".join(P.split('_')).title()))] for P in wazikeys]

        with app.open_resource('static/WaziKeys.json') as f:
            M = json.load(f)

        Set = []

        for m in wazikeys:
            for n in M[m].keys():
                Set.append(n)

        self.lower_tier.choices = [[str(P), '%s' % " ".join(P.split('_')).title()] for P in Set]

    def validate(self):
        return super(WaziForm, self).validate()

    def populate_obj(self, obj):
        super(WaziForm, self).populate_obj(obj)


class MuniForm(Form):

    region = SelectMultipleField('Municipality', [validators.DataRequired()])
    top_tier = SelectField('Cube', [validators.DataRequired()])
    lower_tier = SelectField('Category', [validators.DataRequired()], coerce=str)
    year = SelectMultipleField('Year', [validators.DataRequired()])
    data_type = SelectField('Year', [validators.DataRequired()])
    muni_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(MuniForm, self).__init__(*args, **kwargs)

        self.region.choices = [[str(c.id), str(c.re_name)] for c in WaziRegion.all()]

        with app.open_resource('static/MuniKeys.json') as f:
            M = json.load(f)

        munikeys = ['Aged Creditor Analysis', 'Aged Debtor Analysis', 'Balance Sheet', 'Capital Acquisition',
                    'Cash Flow', 'Income and Expenditure', 'Repairs and Maintenance',
                    'Unauthorised, Irregular, Fruitless and Wasteful Expenditure']

        self.top_tier.choices = [[str(P), str(m)] for P, m in zip(sorted(M.keys()), munikeys)]

        Set = []

        for m in M.keys():
            for n in M[m].keys():
                Set.append([n, M[m][n]])

        self.lower_tier.choices = [[n, m] for n, m in Set]
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(2012, 2017))]
        self.data_type.choices = [['AUDA', 'Audited Actual Budget'], ['ADJB', 'Adjusted Budget'], ['ORGB', 'Original Budget'] ]


    def validate(self):
        return super(MuniForm, self).validate()

    def populate_obj(self, obj):
        super(MuniForm, self).populate_obj(obj)


class MyDataForm(Form):
    ds_id = SelectField('Dataset Name', [validators.DataRequired()])
    my_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(MyDataForm, self).__init__(*args, **kwargs)

        query = db.session.query(UserSet.id, UserSet.ds_title).filter(UserSet.user_id == current_user.id).order_by(
            UserSet.ds_title)

        self.ds_id.choices = [[str(i), str(n)] for i, n in query]

    def validate(self):
        return super(MyDataForm, self).validate()

    def populate_obj(self, obj):
        super(MyDataForm, self).populate_obj(obj)


class PivotForm(Form):
    ds_id = SelectField('Dataset Name', [validators.DataRequired()])

    def __init__(self, *args, **kwargs):
        super(PivotForm, self).__init__(*args, **kwargs)

    def validate(self):
        return super(PivotForm, self).validate()

    def populate_obj(self, obj):
        super(PivotForm, self).populate_obj(obj)