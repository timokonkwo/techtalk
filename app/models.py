from django.db import models

# Create your models here.
class UserRegistrar(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(unique=True)
    phone = models.BigIntegerField()
    
    class Meta:
        ordering = ("-email", )
        
    def __str__(self):
        return self.email