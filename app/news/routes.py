from flask import Blueprint, redirect, render_template, url_for, flash
from flask_login import current_user, login_required
from app.webforms import NewsForm, db, News

# Create a Blueprint
news_bp = Blueprint('news', __name__, template_folder='templates')

@news_bp.route('/', methods=['GET'])
def view_news():
    # Query all news entries from the database
    all_news = News.query.all()
    # Render the template with the list of news
    return render_template('news.html', all_news=all_news)

@news_bp.route('/edit', methods=['GET', 'POST'])
@login_required
def edit_news():
    form = NewsForm()
    if form.validate_on_submit():
        new_news = News(
            user_id=current_user.user_id,
            subject=form.subject.data,
            message=form.message.data
        )
        db.session.add(new_news)
        db.session.commit()
        
        flash('News has been successfully posted!', 'success')
        
        return redirect(url_for('news.edit_news')) 
    
    all_news = News.query.all()

    return render_template('news-edit.html', form=form, all_news=all_news)

@news_bp.route('/delete/<int:news_id>', methods=['POST'])
@login_required
def delete_news(news_id):
    # Find the news item by ID
    news_item = News.query.get_or_404(news_id)
    
    # Delete the news item
    db.session.delete(news_item)
    db.session.commit()
    
    flash('News item has been successfully deleted!', 'success')
    
    return redirect(url_for('news.edit_news'))  # Redirect to the news edit endpoint
