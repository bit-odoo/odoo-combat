from django.contrib import admin
from .models import UserDetails
from import_export.admin import ExportActionMixin

# Register your models here.
class UserDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id','email', 'isAdmin')
    search_fields = ['id','email', 'isAdmin']


admin.site.register(UserDetails, UserDetailsAdmin)



