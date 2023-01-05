from django.contrib import admin
from django.urls import path
from django.urls import include, re_path
from . import views

urlpatterns = [
    path('clear/', views.clear_table),
    re_path('test/', views.testing),
    path('book/', views.booking),
    path('getAll/', views.get_all),
    path('search/', views.search),
    path('check/', views.checking),
    path('howMany/' , views.howMany),
    path('super/login', views.login)
]
