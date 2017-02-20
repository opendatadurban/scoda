from scoda.models import db
from scoda.models.seeds_ETH import seed_db as seed_dbn
from scoda.models.seeds import seed_db as seed_jhb

db.drop_all()
db.create_all()
seed_jhb(db)
seed_dbn(db)
