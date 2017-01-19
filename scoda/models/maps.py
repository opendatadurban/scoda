from sqlalchemy.ext.declarative import declarative_base
from ..app import db
from ..forms import Form
from wtforms import StringField, validators, SelectField, SelectMultipleField
from sqlalchemy import func
from sqlalchemy.orm import relationship
from wtforms.widgets import TextArea
from geoalchemy2 import Geometry

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