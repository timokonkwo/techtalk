from django.db import models

# Create your models here.
class UserRegistrar(models.Model):
    name = models.CharField(max_length=250, blank=False, null=False)
    email = models.EmailField(unique=True, blank=False, null=False)
    phone = models.IntegerField()
    
    class Meta:
        ordering = ("-email", )
        
    def __str__(self):
        return self.email