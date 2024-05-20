from flask import Flask, Blueprint, redirect, url_for
from flask_login import login_required, logout_user
from flask_bcrypt import Bcrypt

# Create a Blueprint
logout_bp = Blueprint('logout', __name__, template_folder='templates')

app = Flask(__name__)

bcrypt = Bcrypt(app)

@logout_bp.route('/', methods=['GET', 'POST'])
@login_required
def logout():
    logout_user()
    return redirect(url_for('logout.logout'))