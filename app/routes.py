from flask import render_template
from app.login.routes import unauthorized_callback

def configure_routes(app):
    app.register_error_handler(401, unauthorized_callback)

    @app.route('/')
    def index():
        return render_template('index.html')
    
    @app.route('/about-us')
    def about_us():
        return render_template('about-us.html')
    
    @app.route('/free-analysis')
    def free_analysis():
        return render_template('free-analysis.html')
    
    @app.route('/faq')
    def faq():
        return render_template('faq.html')
    
    @app.route('/privacy-policy')
    def privacy_policy():
        return render_template('privacy-policy.html')
    
    @app.route('/software')
    def software():
        return render_template('software.html')
    
    @app.route('/services')
    def services():
        return render_template('services.html')

"""    # Define a 404 error handler
    @app.errorhandler(404)
    def page_not_found(e):
        return render_template('404.html'), 404

    @app.errorhandler(Exception)
    def handle_exception(e):
        # Handle other exceptions
        return render_template('error.html', error=str(e)), 500"""
