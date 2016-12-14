from scoda.models import db
from scoda.models.seeds import seed_db

db.drop_all()
db.create_all()
seed_db(db)
