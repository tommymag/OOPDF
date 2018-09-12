from django.urls import path
from . import views

app_name = 'OOPDFapp' # for namespacing	

urlpatterns = [
    path('', views.index, name='index'),
    path('study/', views.study, name='study'),
    path('flashcards/', views.flashcard_json, name='flashcard_api'),
    path('game/', views.game, name='game')
]