"""main urls"""

# Django
from django.urls import path

# Views
from main import views

app_name = "main"
urlpatterns = [

    path('', views.index, name="index")
  
]