from django.urls import path
from . import views
from .views import delete_review

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('chatbot/', views.chatbot, name='chatbot'),  # Asociază cu funcția chatbot din views
    path('f/', views.form, name='form'),  # Asociază cu funcția form din views
    path('gallery/', views.gallery, name='gallery'),  # Asociază cu funcția gallery din views
    path('form/', views.f, name='f'),
    path('submit_form/', views.submit_form, name='submit_form'),
    path('post/<int:post_id>/', views.post_detail, name='post_detail'),
    path('', views.home, name='home'),
    path('submit-review/', views.submit_review, name='submit_review'),
    path('update-review/<int:review_id>/', views.update_review, name='update_review'),
    path('delete-review/<int:review_id>/', views.delete_review, name='delete_review'),

]
