from sqlalchemy.ext.declarative import declarative_base
from ..app import db
from ..forms import Form
from wtforms import StringField, validators, SelectField, SelectMultipleField
from sqlalchemy import func
from sqlalchemy.orm import relationship
from wtforms.widgets import TextArea
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
    A single enumerater area
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
        self.region_id.choices = [[str(c.id), c.re_name] for c in Region.query.filter(Region.id < 10).order_by(Region.id).distinct()]
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(1996, 2031))]

    def validate(self):
        return super(MapForm, self).validate()

    def populate_obj(self, obj):
        super(MapForm, self).populate_obj(obj)
