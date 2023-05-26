# SCODA - Flask
SCODA Website Repository

## Readme Contents
- [Project Documentation Links](/README.md#project-documentation-links)
- [Creative Resources](/README.md#creative-resources)
- [Website Environments](/README.md#website-environments)
- [Frontend Setup](/README.md#frontend-setup)
- [Backend Setup](/README.md#backend-setup)
- [Module List and Syntax](/README.md#module-list-and-syntax)
- [Techinical Specs For QA](/README.md#technical-specs-for-qa)
- [Caveats, Dev Notes and or Outstanding Bugs](/README.md#caveats-dev-notes-and-or-outstanding-bugs)

#### Information Resources
- [Larger Data for DB seeds can be found here](https://drive.google.com/drive/folders/1tnI_EveGeeJg8-WnP5Js2doMDsQGT2Vh?usp=sharing)

## Creative Resources
- [SCODA UI](https://www.figma.com/file/1Zslv9edwmlxZxTH7Q9dfm/SCODA-Platform-3_2?node-id=628%3A3942&t=BbVqdRcINId32XpW-1)
- Needs Design Spec


## Website Environments
- [Staging Environment](https://scodastaging.opencitieslab.org/)
- [Production Environment](http://scoda.co.za/)

## Gulp Setup
### Setting up Frontend Boiler Plate with Gulp and NPM
#### The following dependencies are being used:
- Util      - Log custom messages to the terminal
- Sass      - CSS pre-processor
- Uglify    - Minifies all JS files
- Concat    - Concatenate any JS or CSS files in the styles or js directories
- Connect   - Live Server Reload

_Before starting, make sure the gulpfile.js and package.json files are in the static/ directory._
Then do the following:
1. Make sure you have [node.js](https://nodejs.org/dist/v8.11.2/node-v8.11.2-x64.msi) installed on your local machine
2. [NPM](https://www.npmjs.com/get-npm) should be installed with node already, press the following to check if it has and what version
`npm -v`
3. Now we want to install gulp globally
`npm install --global gulp`
4. Now install the dependencies in the package.json file
`npm install`
5. Now all your node plugins are installed, and all that's left is to run the gulp task manager by typing:
`gulp`

## Backend Setup
### Setting up the Environment with Python 3.6.8+ and pip
* clone the repo
* install a virtual env and activate it: `virtualenv --no-site-packages env; source env/bin/activate`
* install requirements: `pip install -r requirements.txt`
* Locate config folder copy example.development.cfg and paste it as development.cfg into the same config folder
* If needed update any local credentials on the new development.cfg file you've just created

### Setting up the Database with PostgreSQL
Setup the PostgreSQL database (version 12.13.*)
Download and install postgis (version 3.1.1) locally from http://download.osgeo.org/postgis/windows/pg96/
```
psql -U postgres
=# CREATE USER scoda WITH PASSWORD 'scoda';
=# CREATE DATABASE scoda;
=# GRANT ALL PRIVILEGES ON DATABASE scoda TO scoda;
=# psql -d scoda -c "CREATE EXTENSION postgis;"
=# psql -U postgres -d scoda -c "CREATE EXTENSION postgis;"
=# psql -U postgres -d scoda -c "CREATE EXTENSION postgis_topology;"
=# \q
```
Construct your db app-side:
1. Request Access to the data and empty it's contents into the /scoda/data directory, extracting the contents out of the zipped files. No zipped files or empty folders should be in the scoda/data folder.
2. Request access to the drive data folder if unable to download data.
3. Activate your local environment
```
run 'python rebuild_db.py'
```
4. It will take some time to seed the data
5. Once the seed has completed, start the server with the command:
```
python app.py runserver
```

#### Deploying database changes
* SCODA App uses Flask-Migrate (which uses Alembic) to handle database migrations.
* To add a new model or make changes, update the SQLAlchemy definitions in `scoda/models/`. Then run
`python app.py db migrate --message "a description of your change"`
* This will autogenerate a change. Double check that it make sense. To apply it on your machine, run
`python app.py db upgrade head`

# Setup Redis for cache

1. [Insall Redis on local](https://redis.io/download/)
2. Update the development.cfg REDIS_URL to your local configurations - Default is "redis://localhost:6379"
3. Start the server with `redis-server`

## Technical Specs for QA

#### Device and Browser Information
V1.0 will be a mobile first web-app, designed purely for mobile but viewable by web.
The following browsers and devices need to be 100% design match:
- Latest 3 Chrome, IE, Edge, Firefox Desktop
- Latest 2 Chrome, Edge, Safari Mobile

## Caveats, Dev Notes and or Outstanding Bugs
