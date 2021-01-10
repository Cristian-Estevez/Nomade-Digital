from django.db import models
from django.conf import settings
from django.utils import timezone


class Post(models.Model):
    titulo = models.CharField(max_length=200)
    texto = models.TextField()
    imagen = models.ImageField(upload_to='blog', null=True, blank=True) #removi este parámetro al agregar la clase ImagenPost:  , 
    autor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    creado = models.DateTimeField(default=timezone.now)
    publicado = models.DateTimeField(blank=True, null=True)


    class Meta:
        verbose_name = 'post'
        verbose_name_plural = 'posts'

    def publicar(self):
        self.publicado = timezone.now()
        self.save()

    def __str__(self):
        return self.titulo

class ImagenPost(models.Model):
    post = models.ForeignKey(Post, default=None, on_delete=models.CASCADE)
    imagenes = models.ImageField(upload_to='blog')

    def __str__(self):
        return self.post.titulo