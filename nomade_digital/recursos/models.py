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
    creado = models.DateTimeField(blank=True, null=True)
    publicado = models.DateTimeField(null=True, blank=True)

    class Meta:
        verbose_name = 'recurso'
        verbose_name_plural = 'recursos'

    def publicar(self):
        self.publicado = timezone.now()
        self.save()

    def __str__(self):
        return self.titulo

