from scoda.app import app
from flask import url_for, redirect, session, render_template
# from flask_mako import render_template
from flask_security import current_user
from scoda.models import db, User
import scoda.city
import scoda.researcher


@app.route('/')
def home_public():
        return redirect(url_for('explore'))


@app.route('/registered')
def home_user():
    if current_user.is_authenticated:
        if current_user.has_role('city'):
            return redirect(url_for('city_dashboard'))

        if current_user.has_role('researcher'):
            return redirect(url_for('researcher_dashboard'))

        return render_template('security/noperms.html')
    else:
        return redirect(url_for('security.login'))
