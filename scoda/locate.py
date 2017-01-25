from scoda.app import app
import time
from flask import request, url_for, redirect, flash, make_response, session, render_template
from .models import db
from .models import *
from .models.surgeons import FindSurgeonForm


@app.route('/locate', methods=['GET', 'POST'])
def locator():
    if 'lang' not in session.keys():
        redirect(url_for('home_xh'))

    form = FindSurgeonForm()
    status = 200
    if request.method == 'POST':
        if form.validate():

            data = int(form.location.data)
            locate = form.location.choices[data][1]
            surgeons = Surgeon.query.filter_by(area=locate).all()


            if session['lang']:
                return render_template('templates/find/show_xh.html', surgeons=surgeons)
            else:
                return render_template('templates/find/show.html', surgeons=surgeons)
        else:
            if request.is_xhr:
                status = 412
            else:
                if session['lang']:
                    flash('Please correct the problems below and try again.', 'warning')
                else:
                    flash('Please correct the problems below and try again.', 'warning')

    if not request.is_xhr:
        if session['lang']:
            resp = make_response(render_template('templates/find/find_xh.html', form=form))
        else:
            resp = make_response(render_template('templates/find/find.html', form=form))

    else:
        resp = ''

    return (resp, status,
            # ensure the browser refreshes the page when Back is pressed
            {'Cache-Control': 'no-cache, no-store, must-revalidate'})
