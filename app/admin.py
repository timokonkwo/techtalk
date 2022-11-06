from django.contrib import admin
from .models import UserRegistrar

# Register your models here.
@admin.register(UserRegistrar)
class UserRegistrarAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone']