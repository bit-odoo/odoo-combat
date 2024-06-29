from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
import json
from django.views.decorators.csrf import csrf_exempt
from .models import *
from xhtml2pdf import pisa
from django.core import serializers
from django.template.loader import get_template
from django.conf import settings
from django.core.mail import EmailMessage
import os

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

@csrf_exempt
def getRecycler(request):
    if request.method == 'GET':   
        id=request.GET.get('rid')
        user = Recycler.objects.get(id=id)
        client_serialized = serializers.serialize("json", [user])
                 
        return HttpResponse(
            client_serialized,content_type="application/json"
        )     
    
@csrf_exempt
def invoicefun(request):
    if request.method == 'GET':
        id = request.GET.get('vendor')
        
        user = invoice.objects.get(id=1)
        filename = f"{'kirtan Kathiriya' + '_' + str(1)}.pdf"
        pdf_filename = filename.replace(' ', '_')
        pdf_path = os.path.join(settings.MEDIA_ROOT, 'invoice', pdf_filename)

        template_path = os.path.join(settings.BASE_DIR, 'templates', 'invoice.html')  # Adjust this path accordingly
        template = get_template(template_path)

        # Render the template with the client data
        context = {
            'client_name': 'kirtan kathiriya',
            'mobile_number': '7990919934',
            'email': 'kirtankathiriya09@gmail.com',
            'services': [
                {'name': 'Tv', 'price': 500},
                {'name': 'AC', 'price': 1000},
                {'name': 'Others: Garbage', 'price': 1900},
            ],
            'total_amount': 3400
        }
        html = template.render(context)

        # Create a PDF file
        with open(pdf_path, 'w+b') as pdf_file:
            pisa.CreatePDF(html, dest=pdf_file)

        # Save the PDF file path to the user object
        user.pdf = f'invoice/{pdf_filename}'
        user.vendor = id
        user.save()

        # Send email with PDF attachment
        subject = 'Recycle E Invoice'
        message = f'Thank you for submitting your details, Kirtan Kathiriya.\n\n'
        message += f'Client Name: Kirtan Kathiriya\n'
        message += f'Mobile No: +917990919934\n'
        message += f'Email: kirtankathiriya09@gmail.com\n'
        message += 'Please find attached PDF.'
        newclient_email = 'kirtankathiriya09@gmail.com'

        from_email = settings.EMAIL_HOST_USER  # Replace with your email
        to_email = [newclient_email]

        email_message = EmailMessage(subject, message, from_email, to_email)
        email_message.attach_file(pdf_path)  # Attach the PDF file

        try:
            email_message.send()
        except Exception as e:
            print(f"Error sending email: {e}")

        return HttpResponse(
            json.dumps({"msg": "Your details updated successfully."}),
            content_type="application/json",
        )
