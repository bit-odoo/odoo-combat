from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
import json
from django.views.decorators.csrf import csrf_exempt
from .models import *

# Create your views here.
@csrf_exempt
def login(request):
    if request.method == 'POST':  
        email = request.POST.get('email')
        password = request.POST.get('password')
        isAdmin = request.POST.get('isAdmin') == 'true'
        
        if isAdmin == False:
            user = UserDetails.objects.filter(email=email,password=password,isAdmin=False)
            
            if user :             
                return HttpResponse(
                    json.dumps({"data":user.first().email,"isAdmin":user.first().isAdmin,"msg": "Login successfully."}),
                    content_type="application/json",
                )
            else:
                return HttpResponse(json.dumps({"msg": "Invalid email or password1"}),)
        else:
            return HttpResponse(json.dumps({"msg": "Invalid email or password2"}),)
    else:
        return HttpResponse({"msg": "Invalid request method."})       
    
@csrf_exempt
def signIn(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = UserDetails.objects.filter(email=email,password=password)
        if(user):
            return HttpResponse(
                json.dumps({"msg": "User already exists."}),
            )    
        else:
            user = UserDetails.objects.create(email=email,password=password,isAdmin=False)
            return HttpResponse(
                json.dumps({"msg": "User created successfully."}),
            )
    else:
        return HttpResponse({"msg": "Invalid request method."})     
@csrf_exempt
def forgotPassword(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        newpass = request.POST.get('password')

        user = UserDetails.objects.filter(email=email)
        if user == None:
            return HttpResponse(
                json.dumps({"msg": "User does not exist. Please sign in."}),
            )
        else:
            user = UserDetails.objects.filter(email=email).update(password=newpass)
            return HttpResponse(
                json.dumps({"msg": "Password changed successfully."}),
            )
        

@csrf_exempt
def addAppUser(request):
    if request.method == 'POST':
        uid = request.POST.get('uid')
        email = request.POST.get('email')
        loginmethod=request.POST.get('loginmethod')        

        user = AppUser.objects.create(uid=uid,email=email,loginmethod=loginmethod)
        user.save()
        return HttpResponse(
            json.dumps({"msg": "User created successfully."}),
        )
    

@csrf_exempt
def getRecyclers(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        contactno=request.POST.get('contactno')
        bnkno=request.POST.get('bno')
        ifsc=request.POST.get('ifsc')
        bnkname=request.POST.get('bnkname')
        address=request.POST.get('address')
        city=request.POST.get('city')
        state=request.POST.get('state')
        pincode=request.POST.get('pincode')


        user = Recycler.objects.create(email=email,contactno=contactno,businessname=name,address=address,city=city,state=state,pincode=pincode,bankaccountname=bnkname,bankaccountno=bnkno,ifsc=ifsc)    
        user.save()
        return HttpResponse(
            json.dumps({"msg": "Recycler details added successfully.","rid":user.id}),
        )

        
