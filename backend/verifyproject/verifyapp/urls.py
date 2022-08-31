from django.urls import path
from . import views

urlpatterns = [
    path('panverify/',views.panverify,name="panverify" ),
    path('banverify/',views.banverify,name="banverify" ),
]
