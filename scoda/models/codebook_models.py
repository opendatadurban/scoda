from ..app import db
from ..forms import Form
from wtforms import StringField, validators, SelectField, SelectMultipleField, IntegerField
from sqlalchemy import func
from sqlalchemy.orm import relationship
from wtforms.widgets import TextArea, HiddenInput

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
DateTime
)
from sqlalchemy_utils.types import TSVectorType
from sqlalchemy_searchable import make_searchable
make_searchable(db.metadata)
# configure_mappers()  # IMPORTANT!
""""
Code Book Database additions - Basically SCODA 2.0
Added CB to all the models so we know it's the new codebook tables
"""

class CbDataPoint(db.Model):
    """
    A single data point (yearly value) of an indicator
    """
    __tablename__ = 'cb_datapoints'

    id = Column(Integer, autoincrement=True, primary_key=True)
    value = Column(Float, nullable=False)
    start_dt = Column(Date, index=True)
    end_dt = Column(Date, index=True)

    indicator_id = Column(Integer, ForeignKey('cb_indicators.id'), index=True)
    region_id = Column(Integer, ForeignKey('cb_regions.id'), index=True)
    region_type_id = Column(Integer, ForeignKey('cb_region_type.id'), index=True)

    # Associations
    indicator = relationship("CbIndicator")
    region = relationship("CbRegion")
    region_type = relationship("CbRegionType")

    def __repr__(self):
        return '<id {}>'.format(self.id)

class CbIndicator(db.Model):
    """
    The indicator a data point can belong to
    """
    __tablename__ = "cb_indicators"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    code = Column(String, nullable=False, unique=True)
    comments = Column(String, nullable=True)
    # Additional Meta data
    group_code = Column(String, nullable=True)
    in_codebook = Column(String, nullable=True)
    sub_number = Column(String, nullable=True)
    c88_theme  = Column(String, nullable=True)
    socr_theme  = Column(String, nullable=True)
    sdg_theme  = Column(String, nullable=True)
    definition  = Column(String, nullable=True)
    reporting_responsibility  = Column(String, nullable=True)
    notes_on_calculation  = Column(String, nullable=True)
    indicator_formula  = Column(String, nullable=True)
    frequency_of_collection  = Column(String, nullable=True)
    readiness  = Column(String, nullable=True)
    reporting_requirement  = Column(String, nullable=True)

    search_vector = Column(TSVectorType('name'))

    unit_id = Column(Integer, ForeignKey('cb_unit.id'), index=True)
    source_id = Column(Integer, ForeignKey('cb_source.id'), index=True)
    theme_id = Column(Integer, ForeignKey('cb_theme.id'), index=True)
    sdg_theme_id = Column(Integer, ForeignKey('cb_sdg_theme.id'), index=True)
    circular_theme_id = Column(Integer, ForeignKey('cb_circular_theme.id'), index=True)

    unit = relationship("CbUnit")
    source = relationship("CbSource")
    theme = relationship("CbTheme")
    sdg_theme_rel = relationship("CbSDGTheme")
    circular_theme = relationship("CbCircularTheme")

    def __repr__(self):
        return "<CbIndicator='%s'>" % (self.name)

    @classmethod
    def all(cls):
        return cls.query.order_by(CbIndicator.in_name).all()


class CbRegion(db.Model):
    """
    The geographic region the data point belongs to
    """
    __tablename__ = "cb_regions"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Region='%s'>" % (self.re_name)

    @classmethod
    def all(cls):
        return cls.query.order_by(CbRegion.re_name).all()

class CbRegionType(db.Model):
    """
    The geographic region the data point belongs to
    """
    __tablename__ = "cb_region_type"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Region='%s'>" % (self.re_name)


class CbValueType(db.Model):
    """
    The Value Type of the data point
    """
    __tablename__ = "cb_value_type"

    id = Column(Integer, primary_key=True)
    name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbValueType='%s'>" % (self.re_name)

    @classmethod
    def all(cls):
        return cls.query.order_by(CbValueType.re_name).all()

class CbUnit(db.Model):
    """
    The Value Type of the data point
    """
    __tablename__ = "cb_unit"

    id = Column(Integer, primary_key=True)
    name = Column(String(150), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbIndicatorUnit='%s'>" % (self.name)

class CbTheme(db.Model):
    """
    The Theme of an Indicator
    """
    __tablename__ = "cb_theme"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbTheme='%s'>" % (self.name)

class CbSDGTheme(db.Model):
    """
    The Theme of an Indicator
    """
    __tablename__ = "cb_sdg_theme"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbSDGTheme='%s'>" % (self.name)

class CbCircularTheme(db.Model):
    """
    The Theme of an Indicator
    """
    __tablename__ = "cb_circular_theme"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbCircularTheme='%s'>" % (self.name)

class CbSource(db.Model):
    """
    The Source of an Indicator
    """
    __tablename__ = "cb_source"

    id = Column(Integer, primary_key=True)
    name = Column(String, index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<CbSource='%s'>" % (self.name)