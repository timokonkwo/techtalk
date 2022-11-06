from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import EmailMultiAlternatives, BadHeaderError
from django.utils.html import strip_tags
from django.template.loader import render_to_string
from django.conf import settings
from django.http import HttpResponse
from django.views.decorators.csrf import ensure_csrf_cookie

from .models import UserRegistrar

# Create your views here.
@ensure_csrf_cookie
def register_user(request):
    if request.method == "POST":
      name = request.POST['name']
      email = request.POST['email']
      phone = request.POST['phone']
      UserRegistrar.objects.create(name=name, email=email, phone=phone)
      subject = 'Congratulation on securing a seat at Tech Talk 7.0'
      html_content = render_to_string('welcome_mail.html')
      text_content = strip_tags(html_content)
      msg = EmailMultiAlternatives(subject, text_content, settings.EMAIL_HOST_USER, [email])
      msg.attach_alternative(html_content, 'text/html')
      try:
        msg.send()
      except BadHeaderError:
        return HttpResponse('invalid header found')
      return redirect('register')
    return render(request, 'index.html')