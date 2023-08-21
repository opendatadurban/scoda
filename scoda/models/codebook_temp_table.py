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
Temporary Indicator table
"""

class CbTempIndicators(db.Model):
    """
    A single data point (yearly value) of an indicator
    """
    __tablename__ = 'cb_temp_indicators'

    id = Column(Integer, autoincrement=True, primary_key=True)
    value = Column(Float)
    ds_name = Column(Text)
    re_name = Column(String)
    start_dt = Column(Integer)
    year = Column(Integer)
    indicator_id = Column(Integer, index=True, unique=True)

    def __repr__(self):
        return '<id {}>'.format(self.id)