from django.db import models
from django.conf import settings
from django.utils import timezone


class Post(models.Model):
    titulo = models.CharField(max_length=200)
    texto = models.TextField()
    imagen = models.ImageField(upload_to='blog', null=True, blank=True) 
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

class PostComent(models.Model):
    nombre_usuario = models.CharField('Usuario', max_length=120)
    email = models.EmailField(max_length=254, verbose_name='Direccion de email') #Esta la queremos para nosotros, no la debemos mostrar en pantalla
    fecha = models.DateTimeField(default=timezone.now)
    texto = models.CharField(max_length=250)
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comentarios')

    # cambiando default a True se publican directamente
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-fecha']


    def __str__(self):
        return 'Comentario {} de {}'.format(self.texto, self.nombre_usuario)