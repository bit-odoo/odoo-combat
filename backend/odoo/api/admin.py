from django.contrib import admin
from .models import *
from import_export.admin import ExportActionMixin

# Register your models here.
class UserDetailsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id','email', 'isAdmin')
    search_fields = ['id','email', 'isAdmin']

class AppUserAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id','username','uid', 'contactno')  
    search_fields = ['id','username','uid' ,'contactno']  

class BlogsAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id','title')
    search_fields = ['id','title']   

class RecyclerAdmin(ExportActionMixin, admin.ModelAdmin):
    list_display = ('id','businessname')     
    search_fields = ['id','businessname']


admin.site.register(UserDetails, UserDetailsAdmin)
admin.site.register(AppUser, AppUserAdmin)
admin.site.register(Blogs, BlogsAdmin)
admin.site.register(Recycler, RecyclerAdmin)



