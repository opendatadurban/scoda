from sqlalchemy.ext.declarative import declarative_base
from ..app import db
from ..forms import Form
from wtforms import StringField, validators, SelectField, SelectMultipleField
from sqlalchemy import func
from sqlalchemy.orm import relationship
from wtforms.widgets import TextArea
from wtforms.fields.html5 import DecimalRangeField
from geoalchemy2 import Geometry
from scoda.models import Region

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

class Area(db.Model):
    """
    A single enumerater area
    """
    __tablename__ = 'areas'

    id = Column(Integer, primary_key=True)
    sal_code = Column(Integer)
    ward_code = Column(Integer)
    city_ward_code = Column(Integer)
    region_id = Column(Integer, ForeignKey('regions.id'), index=True, nullable=False)
    data = Column(ARRAY(Float))
    geom = Column(Geometry('POLYGON'))

    region = relationship("Region", backref='area_region')

    def __repr__(self):
        return '<id {}>'.format(self.id)


class Ward(db.Model):
    """
    A municipal ward
    """
    __tablename__ = 'wards'

    id = Column(Integer, primary_key=True)
    ward_code = Column(Integer)
    city_ward_code = Column(Integer)
    region_id = Column(Integer, ForeignKey('regions.id'), index=True, nullable=False)
    data = Column(ARRAY(Float))
    geom = Column(Geometry('POLYGON'))

    region = relationship("Region", backref='ward_region')

    def __repr__(self):
        return '<id {}>'.format(self.id)


class Grid(db.Model):
    """
    A municipal ward
    """
    __tablename__ = 'grids'

    id = Column(Integer, primary_key=True)
    city_grid_id = Column(Integer, index=True, nullable=False)
    region_id = Column(Integer, ForeignKey('regions.id'), index=True, nullable=False)
    data = Column(ARRAY(Float))
    reference = Column(Float)
    geom = Column(Geometry('POLYGON'))

    region = relationship("Region", backref='grid_region')

    def __repr__(self):
        return '<id {}>'.format(self.id)


class MapForm(Form):

    city_ward_code = SelectField('Ward Number', [validators.Optional()])
    region_id = SelectField('Region', [validators.Optional()])
    year = SelectField('Year', [validators.Optional()])
    
    def __init__(self, *args, **kwargs):
        super(MapForm, self).__init__(*args, **kwargs)
        query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 1).order_by(Ward.city_ward_code).distinct()
        self.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all(),
                                                                                                        start=1)]
        self.city_ward_code.choices.insert(0, ('', 'View All'))
        self.region_id.choices = [[str(1), 'Johannesburg'], [str(4), 'EThekwini']]
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(1996, 2031))]

    def validate(self):
        #return self
        return super(MapForm, self).validate()

    def populate_obj(self, obj):
        super(MapForm, self).populate_obj(obj)


class NightFormJHB(Form):

    city_ward_code = SelectField('Ward Number', [validators.Optional()])
    region_id = SelectField('Region', [validators.Optional()])
    grid_bias = DecimalRangeField('Bias', places=1, default=0.5)
    year = SelectField('Year', [validators.Optional()])

    def __init__(self, *args, **kwargs):
        super(NightFormJHB, self).__init__(*args, **kwargs)
        query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 1).order_by(Ward.city_ward_code).distinct()
        self.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all(),
                                                                                                        start=1)]
        self.city_ward_code.choices.insert(0, ('', 'View All'))
        self.region_id.choices = [[str(1), 'Johannesburg']]
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(2016, 2017))]

    def validate(self):
        return super(NightFormJHB, self).validate()

    def populate_obj(self, obj):
        super(NightFormJHB, self).populate_obj(obj)


class NightFormETH(Form):

    city_ward_code = SelectField('Ward Number', [validators.Optional()])
    region_id = SelectField('Region', [validators.Optional()])
    year = SelectField('Year', [validators.Optional()])

    def __init__(self, *args, **kwargs):
        super(NightFormETH, self).__init__(*args, **kwargs)
        query = db.session.query(Ward.city_ward_code).filter(Ward.region_id == 4).order_by(Ward.city_ward_code).distinct()
        self.city_ward_code.choices = [[str(i), 'Ward %s' % row.city_ward_code] for i, row in enumerate(query.all(),
                                                                                                        start=1)]
        self.city_ward_code.choices.insert(0, ('', 'View All'))
        self.region_id.choices = [[str(4), 'EThekwini']]
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(2016, 2017))]

    def validate(self):
        return super(NightFormETH, self).validate()

    def populate_obj(self, obj):
        super(NightFormETH, self).populate_obj(obj)
