# from os import EX_TEMPFAIL
from django.db import models
from django.db.models.deletion import CASCADE
from ckeditor.fields import RichTextField
from django.utils import timezone
from django.conf import settings

# Create your models here.
class Recurso(models.Model):
    titulo = models.CharField(max_length=200)
    texto = RichTextField(null=True, blank=True)
    imagen = models.ImageField(upload_to='recursos', null=True, blank=True, verbose_name='Imagen de portada')
    autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=CASCADE)
    creado = models.DateTimeField(default=timezone.now)
    publicado = models.DateTimeField(null=True, blank=True)
    archivo = models.FileField(upload_to='archivos_recursos' ,blank=True, null=True)

    class Meta:
        verbose_name = 'recurso'
        verbose_name_plural = 'recursos'

    def publicar(self):
        self.publicado = timezone.now()
        self.save()

    def __str__(self):
        return self.titulo

class EnvioRecurso(models.Model):
    nombre = models.CharField(max_length=200)
    email = models.EmailField()
    fecha = models.DateTimeField(default=timezone.now)
    recurso_enviado = models.ForeignKey(Recurso, on_delete=models.CASCADE, related_name='enviados', null=True, blank=True)
