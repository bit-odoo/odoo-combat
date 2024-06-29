from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('signin/', views.signIn, name='signIn'),
    path('forgot-password/', views.forgotPassword, name='forgotPassword'),
    path('rdetails/', views.getRecyclers, name='getRecyclers'),
    path('addAppUser/', views.addAppUser,name="addAppUser"),
]