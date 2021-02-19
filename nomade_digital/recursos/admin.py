from django.contrib import admin
from .models import Recurso, EnvioRecurso

# Register your models here.
@admin.register(Recurso)
class RescursoAdmin(admin.ModelAdmin):
    list_display = ["titulo", "creado", "publicado", "archivo"]
    list_filter = ["creado", "publicado"]
    class Meta:
        model = Recurso

@admin.register(EnvioRecurso)
class EnvioRecursoAdmin(admin.ModelAdmin):
    list_display = ["email", "nombre", "recurso_enviado", "fecha"]
    list_filter = ["fecha", "email", "recurso_enviado"]
    class Meta:
        model = EnvioRecurso
