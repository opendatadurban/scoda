from flask_login import current_user

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
