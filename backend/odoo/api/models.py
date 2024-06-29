from django.db import models

# Create your models here.

class UserDetails(models.Model):
    email=models.CharField(max_length=200)
    password=models.CharField(max_length=200)
    isAdmin=models.BooleanField(default=False)

    def __str__(self):
        return self.email


class AppUser(models.Model):
    uid=models.CharField(max_length=200)
    email=models.CharField(max_length=50,null=True)
    contactno=models.CharField(max_length=13)
    username=models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    mode=models.CharField(max_length=10)
    isBasicDetails=models.BooleanField(default=False)

    def __str__(self):
        return self.username
    

class Blogs(models.Model):
    title=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    description2=models.CharField(max_length=200)
    description3=models.CharField(max_length=200)
    image1=models.ImageField(upload_to="blog-images/",null=True)
    image2=models.ImageField(upload_to="blog-images/",null=True)
    image3=models.ImageField(upload_to="blog-images/",null=True) 

    def __str__(self):
        return self.title



