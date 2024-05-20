from flask import Blueprint

login_bp = Blueprint('login', __name__)
logout_bp = Blueprint('logout', __name__)
signup_bp = Blueprint('register', __name__)
news_bp = Blueprint('news', __name__)

from . import routes