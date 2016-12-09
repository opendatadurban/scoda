from flask_login import current_user
import sendgrid
import os


def body_tag_args():
    classes = []
    args = {}

    if current_user.is_authenticated:
        classes.append('loggedin')
        args['dataUserName'] = current_user.username
        # args['dataUserEmail'] = current_user.full_name
        args['dataUserId'] = current_user.id

    args['class_'] = ' '.join(classes)
    return args


def email_initiates(initiate):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
    data = {
        "personalizations": [
            {
                "to": [{
                    "email": "nicki.gules@citypress.co.za"
                }, {
                    "email": "luba4life@gmail.com"
                }, {
                    "email": "mamnkeli.ngam@eccogta.gov.za"
                }, {
                    "email": "matthew@opendata.durban"
                }],

                "subject": "New Initiate Report!"
            }
        ],
        "from": {
            "email": "admin@ezolwaluko.org.za"
        },
        "content": [
            dict(type="text/plain",
                 value="A new initiate report was generated on %s:\r\nName: %s\r\nPhone: %s\r\nProblem: %s" % (
                     initiate.timestamp, initiate.name, initiate.phone_number, initiate.initiate_problem))
        ]
    }

    response = sg.client.mail.send.post(request_body=data)
    return response


def email_register(surgeon):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
    data = {
        "personalizations": [
            {
                "to": [{
                    "email": "nicki.gules@citypress.co.za"
                }, {
                    "email": "luba4life@gmail.com"
                }, {
                    "email": "mamnkeli.ngam@eccogta.gov.za"
                }, {
                    "email": "matthew@opendata.durban"
                }],

                "subject": "New Surgeon Registration Request!"
            }
        ],
        "from": {
            "email": "admin@ezolwaluko.org.za"
        },
        "content": [
            dict(type="text/plain",
                 value="A new registration request was generated on %s:\r\nName: %s\r\nPhone: %s\r\nArea: %s" % (
                     surgeon.timestamp, surgeon.name, surgeon.phone_number, surgeon.area))
        ]
    }

    response = sg.client.mail.send.post(request_body=data)
    return response


def email_report(report):
    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
    data = {
        "personalizations": [
            {
                "to": [{
                    "email": "nicki.gules@citypress.co.za"
                }, {
                    "email": "luba4life@gmail.com"
                }, {
                    "email": "mamnkeli.ngam@eccogta.gov.za"
                }, {
                    "email": "matthew@opendata.durban"
                }],

                "subject": "New Unregistered Surgeon / School Report!"
            }
        ],
        "from": {
            "email": "admin@ezolwaluko.org.za"
        },
        "content": [
            dict(type="text/plain",
                 value="A new surgeon / school report was submitted on %s:\r\nReporter Name: %s\r\nPhone: %s\r\nSurgeon's Name: %s\r\nArea: %s\r\nProblem: %s"
                       % (
                           report.timestamp,
                           report.opt_name if report.opt_name not in [None, 'None', ''] else 'no name given',
                           report.phone_number,
                           report.surgeons_name,
                           report.area,
                           report.report_problem))
        ]
    }

    response = sg.client.mail.send.post(request_body=data)
    return response
