from django.db import models

# Create your models here.

class UserDetails(models.Model):
    email=models.CharField(max_length=200)
    password=models.CharField(max_length=200)
    isAdmin=models.BooleanField(default=False)

    def __str__(self):
        return self.email
