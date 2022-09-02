# from django.shortcuts import render
import json , requests
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
from rest_framework.decorators import api_view

from .serializers import YourSerializer

@api_view(['GET', 'POST'])
@csrf_exempt
def panverify(request):
    response = ''
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        pannumber=data['panId']['val']
        url = "https://dg-sandbox.setu.co/api/verify/pan"
        headers = {
            "Content-Type": "application/json; charset=utf-8",
            "x-client-id": "b1e41b18-da3a-4c31-b3f6-4449b1863883",
            "x-client-secret": "d888f103-d1c2-44c0-a78b-da04844e7282"
        }
        data = { 
            "pan": f'{pannumber}',  
            "consent": "Y" , 
            "reason": "Reason for verifying PAN set by the developer"  
        }
        response = requests.post(url, headers=headers, json=data)
    
        return HttpResponse(response)
    
    return HttpResponse('Invalid URL ! No GET Method Available ')

@api_view(['GET', 'POST'])
@csrf_exempt
def banverify(request):
    response = ''
    if request.method == "POST":
        data = json.loads(request.body.decode('utf-8'))
        print(data)
        banifsc   = data['BanIfsc']['ifsc']
        bannumber = data['BanId']['val']
        url = "https://dg-sandbox.setu.co/api/verify/ban"
        headers = {
            "Content-Type": "application/json; charset=utf-8",
            "x-client-id": "b1e41b18-da3a-4c31-b3f6-4449b1863883",
            "x-client-secret": "d888f103-d1c2-44c0-a78b-da04844e7282"
        }
        data = { 
        "ifsc": f'{banifsc}',
        "accountNumber": f'{bannumber}' 
        } 
        response = requests.post(url, headers=headers, json=data)
    
        return HttpResponse(response)
    
    return HttpResponse('Invalid URL ! No GET Method Available ')

