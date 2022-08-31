from sre_constants import SUCCESS
from unicodedata import category
from rest_framework import serializers

class YourSerializer(serializers.Serializer):
   """Your data serializer, define your fields here."""
   category = serializers.JSONField()
