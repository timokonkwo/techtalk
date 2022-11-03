from django.shortcuts import render, redirect
from .models import UserRegistrar
# Create your views here.
def register_user(request):
    if request.method == "POST":
      name = request.POST['name']
      email = request.POST['email']
      phone = request.POST['phone']
      UserRegistrar.objects.create(name=name, email=email, phone=phone)
      return redirect('register')
    return render(request, 'index.html')