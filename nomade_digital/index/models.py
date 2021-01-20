from django.db import models
from django.utils import timezone

# Create your models here.
class Consulta(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.EmailField()
    mensaje = models.TextField()
    fecha = models.DateTimeField(default=timezone.now)

    class Meta:
        verbose_name = 'consulta'
        verbose_name_plural = 'consultas'

    def __str__(self):
        return self.mensaje



