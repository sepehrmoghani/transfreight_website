from flask import Flask
from flask_login import LoginManager
from app.webforms import db, User
from app.routes import configure_routes

def create_app():
    app = Flask(__name__, static_url_path='/static/css')
    
    # Configuration settings
    app.config['SECRET_KEY'] = '2fe112ef6f5d5d9b9e9eb4943024846d'
    app.config['UPLOAD_FOLDER'] = 'upload_folder'

    # Configure database URI
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    # Initialize Flask-Login
    login_manager = LoginManager()
    login_manager.init_app(app)
    login_manager.login_view = "login.login"

    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # Configure the login manager settings
    login_manager.user_loader(load_user)

    from .login import login_bp
    from .logout import logout_bp
    from .register import register_bp
    from .news import news_bp

    # Register blueprints
    app.register_blueprint(login_bp, url_prefix='/login')
    app.register_blueprint(logout_bp, url_prefix='/logout')
    app.register_blueprint(register_bp, url_prefix='/register')
    app.register_blueprint(news_bp, url_prefix='/news')

    # Configure routes
    configure_routes(app)

    # Create database and tables
    with app.app_context():
        db.create_all()

    # Add more configuration and initialization as needed

    return app