from django.urls import path
from . import views

urlpatterns = [
    path('panverify/',views.panverify,name="panverify" ),
]
