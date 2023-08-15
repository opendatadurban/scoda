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
)


class DataPoint(db.Model):
    """
    A single data point (yearly value) of an indicator
    """
    __tablename__ = 'datapoints'

    id = Column(Integer, autoincrement=True, primary_key=True)
    dataset_id = Column(Integer, ForeignKey('datasets.id'), index=True, nullable=False)
    indicator_id = Column(Integer, ForeignKey('indicators.id'), index=True, nullable=False)
    region_id = Column(Integer, ForeignKey('regions.id'), index=True, nullable=False)
    type_id = Column(Integer, ForeignKey('types.id'), index=True, nullable=False)
    theme_id = Column(Integer, ForeignKey('themes.id'), index=True, nullable=False)
    value = Column(Float, unique=False, nullable=False)
    year = Column(Integer, index=True, unique=False, nullable=False)

    # Associations
    dataset = relationship("DataSet", backref='dataset')
    indicator = relationship("Indicator")
    region = relationship("Region", backref='region')
    type = relationship("Type")
    theme = relationship("Theme")

    def __repr__(self):
        return '<id {}>'.format(self.id)


class DataSet(db.Model):
    """
    The dataset a data point belongs to
    """
    __tablename__ = "datasets"

    id = Column(Integer, primary_key=True)
    ds_name = Column(String(80), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Dataset='%s'>" % (self.ds_name)

    @classmethod
    def create_defaults(self):
        text = """
        Population size
        Population density
        Households
        Population growth rate
        Female population
        Male population
        Sex ratio
        Dependency ratio
        Child population
        Youth population
        Adult population
        Elderly population
        Net migration rate
        International immigrants rate
        Indigent
        Poverty rate
        Gini Coefficient
        Life expectancy - Male
        Life expectancy - Female
        Gross Value Add
        Exports
        Imports
        Household income
        Cost of living
        Economically active population
        Employment Absorption Rate
        Employment
        Unemployment Rate
        Vulnerable population unemployment
        Human Development Index
        Fixed-landline connections per 100,000
        Mobile connections per 100,000
        Internet connections per 100,000
        Water availability
        Water consumption
        Non-revenue water
        Water losses
        Risk Score - blue drop
        Risk score - green drop
        Energy supply - Petrol
        Energy supply - Diesel
        Energy supply - Coal
        Energy supply - Paraffin
        Energy supply - LPG
        Energy supply - HFO
        Energy supply - JetFuel + AvGas
        Energy consumption (GJ)
        Energy intensity - Residential
        Energy intensity - Commercial
        Energy intensity - Industrial
        Energy intensity - Transport
        Energy intensity - Government
        Energy intensity - Agriculture
        Renewable energy
        Energy losses
        Green house gas emissions
        Waste recycling (tonnes)
        Residential fuel combustion - heating - coal
        Residential fuel combustion - heating - wood
        Residential fuel combustion - cooking - coal
        Residential fuel combustion - cooking - wood
        Open Space
        Energy use - Residential
        Energy use - Commercial
        Energy use - Industrial
        Energy use - Transport
        Energy use - Government
        Energy use - Agriculture
        Energy use - Losses
        Emissions - Residential
        Emissions - Commercial
        Emissions - Industrial
        Emissions - Transport
        Emissions - Government
        Emissions - Agriculture
        Emissions - Losses
        Emissions - All fuels excl aviation and marine
        Male learner enrolment- primary
        Female learner enrolment- primary
        Male learner enrolment- secondary
        Female learner enrolment- secondary
        Learner-educator ratio
        Completion rate - primary school 2011
        Completion rate - secondary school 2011
        Literacy rates
        Matric pass rate
        Hospital beds - public sector
        Mortality - under 5 years per 1000
        Multiple deprivation index
        Dwelling type - formal
        Dwelling type - informal
        Dwelling type - traditional
        Dwelling tenure - owned + paid
        Dwelling tenure - owned + not paid
        Dwelling tenure - rented
        Dwelling tenure - occupied + no rent
        Informal shelter growth
        Housing Affordability Ratio
        Housing Affordability Index
        Transport passengers - Train
        Transport passengers - Bus
        Transport passengers - Taxi
        Transport passengers - Car / Truck driver
        Transport passengers - Car / Truck passenger
        Transport passengers - Walk only
        Transport passengers - Other
        Motor vehicle ownership
        Inpatient bed utilisation rate
        Educational level - no schooling
        Educational level - some primary
        Educational level - completed primary
        Educational level - some secondary
        Educational level - grade 12 / std 9
        Educational level - higher education
        Educational level - other
        Educational level - total
        Municipal management vacancies
        Municipal posts - Community and Social Services
        Municipal posts - Finance and Administration
        Municipal posts - Electricity
        Municipal posts - Environmental Protection
        Municipal posts - Health
        Municipal posts - Public Safety
        Municipal posts - Road Transport
        Municipal posts - Sport and Recreation
        Municipal posts - Waste Management
        Municipal posts - Waste Water Management
        Municipal posts - Water
        Municipal posts - Other
        Municipal staff vacancies
        Voter turnout - Local
        Voter Turnout - National
        Access to water - Piped in dwelling
        Access to water - Piped in yard
        Access to water - Communal within 200m
        Access to water - Communal more than 200m
        Access to water - No piped
        Access to sanitation - Flush toilet
        Access to sanitation - VIPs
        Access to sanitation - Pit toilet
        Access to sanitation - Bucket System
        Access to sanitation - No toilet
        Access to electricity - Lighting only
        Access to electricity - Lighting and other
        Access to electricity - Not using
        Access to refuse removal - Weekly by authority
        Access to refuse removal - Less than weekly by authority
        Access to refuse removal - Community removal
        Access to refuse removal - Personally removed
        Access to refuse removal - No removal
        Clinics - provincial
        External audit
        Informal settlements
        Residential rates
        Business rates
        Services levy
        Grants
        Capital grants & transfers
        Operating surplus
        Debtors
        Bad Debt
        Remuneration costs
        Liabilities
        Cash position
        Acid test ratio
        Debt to income ratio
        Current ratio
        Debt ratio
        Budget funding
        Wasteful expenditure
        Operating expenditure - Employee related
        Operating expenditure - Remuneration of councillors
        Operating expenditure - Bad debt
        Operating expenditure - Repairs and maintenance
        Operating expenditure - Bulk purchase
        Operating expenditure - Other operating
        Operating expenditure - Total
        Operating expenditure - Ave annual growth
        Operating expenditure - Repairs and maintenance growth
        Affordability of municipal bills - Municipal Bill
        Affordability of municipal bills - Benchmark income
        Affordability of municipal bills - Municipal bill as percent of income
        Affordability of municipal bills - change since 2010
        Voter turnout- local
        Voter registration - local
        """

        dataset = []
        for s in text.strip().split("\n"):
            i = DataSet()
            i.ds_name = s.strip()
            dataset.append(i)

        return dataset

    @classmethod
    def all(cls):
        return cls.query.order_by(DataSet.ds_name).all()


class Indicator(db.Model):
    """
    The indicator a data point can belong to
    """
    __tablename__ = "indicators"

    id = Column(Integer, primary_key=True)
    in_name = Column(Text, nullable=False, unique=True)
    unit = Column(String(80), nullable=True, unique=False)
    definition = Column(String(400), nullable=True, unique=False)
    theme = Column(String(80), nullable=True, unique=False)
    sub_theme = Column(String(80), nullable=True, unique=False)
    source = Column(String(500), nullable=True, unique=False)
    frequency = Column(String(80), nullable=True, unique=False)

    def __repr__(self):
        return "<Indicator='%s'>" % (self.in_name)

    @classmethod
    def create_defaults(self):
        text = """
        Population size
        Population density
        Households
        Population growth rate
        Female population
        Male population
        Sex ratio
        Dependency ratio
        Child population
        Youth population
        Adult population
        Elderly population
        Net migration rate
        International immigrants rate
        Indigent
        Poverty rate
        Gini Coefficient
        Life expectancy
        Gross Value Add
        Exports
        Imports
        Household income
        Cost of living
        Economically active population
        Employment Absorption Rate
        Employment
        Unemployment Rate
        Vulnerable population unemployment
        Human Development Index
        Fixed-landline connections per 100,000
        Mobile connections per 100,000
        Internet connections per 100,000
        Water availability
        Water consumption
        Non-revenue water
        Water losses
        Risk Score - blue drop
        Risk score - green drop
        Energy supply
        Energy consumption (GJ)
        Energy intensity
        Renewable energy
        Energy losses
        Green house gas emissions
        Waste recycling (tonnes)
        Residential fuel combustion
        Open Space
        Energy use
        Emissions
        Learner enrolment - primary
        Learner enrolment - secondary
        Learner-educator ratio
        Completion rate - primary school
        Completion rate - secondary school
        Literacy rates
        Matric pass rate
        Hospital beds - (public sector)
        Mortality - under 5 years per 1000
        Multiple deprivation index
        Dwelling type
        Dwelling tenure
        Informal shelter growth
        Housing Affordability Ratio
        Housing Affordability Index
        Transport passengers
        Motor vehicle ownership
        Inpatient bed utilisation rate
        Educational level
        Municipal management vacancies
        Municipal posts
        Municipal staff vacancies
        Voter turnout - Local
        Voter Turnout - National
        Access to water
        Access to sanitation
        Access to electricity
        Access to refuse removal
        Clinics - provincial
        External audit
        Informal settlements
        Residential rates
        Business rates
        Services levy
        Grants
        Capital grants & transfers
        Operating surplus
        Debtors
        Bad Debt
        Remuneration costs
        Liabilities
        Cash position
        Acid test ratio
        Debt to income ratio
        Current ratio
        Debt ratio
        Budget funding
        Wasteful expenditure
        Operating expenditure
        Affordability of municipal bills
        Voter turnout- local
        Voter registration - local
        """

        indicator = []
        for s in text.strip().split("\n"):
            i = Indicator()
            i.in_name = s.strip()
            indicator.append(i)

        return indicator

    @classmethod
    def all(cls):
        return cls.query.order_by(Indicator.in_name).all()


class Region(db.Model):
    """
    The geographic region the data point belongs to
    """
    __tablename__ = "regions"

    id = Column(Integer, primary_key=True)
    re_name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Region='%s'>" % (self.re_name)

    @classmethod
    def create_defaults(self):
        text = """
        Johannesburg
        Tshwane
        Cape Town
        EThekwini
        Ekurhuleni
        Nelson Mandela Bay
        Buffalo City
        Mangaung
        Msunduzi
        Western Cape
        Eastern Cape
        Northern Cape
        Free State
        KwaZulu-Natal
        North West
        Gauteng
        Mpumalanga
        Limpopo
        National
        """

        region = []
        for s in text.strip().split("\n"):
            i = Region()
            i.re_name = s.strip()
            region.append(i)

        return region

    @classmethod
    def all(cls):
        return cls.query.order_by(Region.re_name).all()


class WaziRegion(db.Model):
    """
    The geographic region the data point belongs to
    """
    __tablename__ = "wazi_regions"

    id = Column(Integer, primary_key=True)
    re_name = Column(String(50), index=True, nullable=False, unique=True)
    wazi_name = Column(String(50), index=True, nullable=False, unique=True)
    wazi_abr = Column(String(10), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Region='%s'>" % (self.re_name)

    @classmethod
    def create_defaults(self):

        wazi_regions = {1: {'name': 'Johannesburg', 'wazi_name': 'city-of-johannesburg', 'abbreviation': 'JHB'},
                        2: {'name': 'Tshwane', 'wazi_name': 'city-of-tshwane', 'abbreviation': 'TSH'},
                        3: {'name': 'Cape Town', 'wazi_name': 'city-of-cape-town', 'abbreviation': 'CPT'},
                        4: {'name': 'EThekwini', 'wazi_name': 'ethekwini', 'abbreviation': 'ETH'},
                        5: {'name': 'Ekurhuleni', 'wazi_name': 'ekurhuleni', 'abbreviation': 'EKU'},
                        6: {'name': 'Nelson Mandela Bay', 'wazi_name': 'nelson-mandela-bay', 'abbreviation': 'NMA'},
                        7: {'name': 'Buffalo City', 'wazi_name': 'buffalo-city', 'abbreviation': 'BUF'},
                        8: {'name': 'Mangaung', 'wazi_name': 'mangaung', 'abbreviation': 'MAN'},
                        9: {'name': 'Msunduzi', 'wazi_name': 'the-msunduzi', 'abbreviation': 'KZN225'}
                        }

        waziregion = []
        for i in range(1, 10):
            r = WaziRegion()
            r.re_name = wazi_regions[i]['name']
            r.wazi_name = wazi_regions[i]['wazi_name']
            r.wazi_abr = wazi_regions[i]['abbreviation']
            waziregion.append(r)

        return waziregion

    @classmethod
    def all(cls):
        return cls.query.order_by(WaziRegion.id).all()


class Type(db.Model):
    """
    The geographic data type
    """
    __tablename__ = "types"

    id = Column(Integer, primary_key=True)
    ty_name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Type='%s'>" % (self.ty_name)

    @classmethod
    def create_defaults(self):
        text = """
        City
        Province
        National
        """

        types = []
        for s in text.strip().split("\n"):
            i = Type()
            i.ty_name = s.strip()
            types.append(i)

        return types

    @classmethod
    def all(cls):
        return cls.query.order_by(Type.ty_name).all()


class Theme(db.Model):
    """
    The geographic data type
    """
    __tablename__ = "themes"

    id = Column(Integer, primary_key=True)
    th_name = Column(String(50), index=True, nullable=False, unique=True)

    def __repr__(self):
        return "<Type='%s'>" % (self.th_name)

    @classmethod
    def create_defaults(self):
        text = """
        Demographics
        Productive
        Sustainable
        Inclusive
        Well-governed
        """

        theme = []
        for s in text.strip().split("\n"):
            i = Theme()
            i.th_name = s.strip()
            theme.append(i)

        return theme

    @classmethod
    def all(cls):
        return cls.query.order_by(Theme.th_name).all()


class ExploreForm(Form):

    dataset_id = SelectField('Dataset', [validators.Optional()])
    indicator_id = SelectField('Indicator', [validators.DataRequired()])
    region_id = SelectField('Region', [validators.Optional()])
    type_id = SelectField('Region Type', [validators.Optional()])
    theme_id = SelectField('Indicator Theme', [validators.Optional()])
    year = SelectField('Year', [validators.Optional()])
    explore_submitted = IntegerField('Submitted', default=0, widget=HiddenInput())

    def __init__(self, *args, **kwargs):
        super(ExploreForm, self).__init__(*args, **kwargs)
        remove_list = ['Poverty rate', 'Gini Coefficient', 'Gross Value Add', 'Exports', 'Multiple deprivation index',
                       'Human Development Index']
        self.dataset_id.choices = [[str(c.id), c.ds_name] for c in DataSet.all() if c.ds_name not in remove_list]
        self.dataset_id.choices.insert(0, ('', 'Empty'))
        self.indicator_id.choices = [[str(c.id), c.in_name] for c in Indicator.all() if c.in_name not in remove_list]
        self.indicator_id.choices.insert(0, ['', 'Empty'])
        self.region_id.choices = [[str(c.id), c.re_name] for c in Region.all()]
        self.region_id.choices.insert(0, ('', 'Empty'))
        self.type_id.choices = [[str(c.id), c.ty_name] for c in Type.all()]
        self.type_id.choices.insert(0, ('', 'Empty'))
        self.theme_id.choices = [[str(c.id), c.th_name] for c in Theme.all()]
        self.theme_id.choices.insert(0, ('', 'Empty'))
        self.year.choices = [[str(i), str(y)] for i, y in enumerate(range(1996, 2018))]
        self.year.choices.insert(0, ('', 'Empty'))

    def validate(self):
        return super(ExploreForm, self).validate()

    def populate_obj(self, obj):
        super(ExploreForm, self).populate_obj(obj)

