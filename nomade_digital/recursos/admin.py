from django.contrib import admin
from .models import Recurso, EnvioRecurso

# Register your models here.
@admin.register(Recurso)
class RescursoAdmin(admin.ModelAdmin):
    class Meta:
        model = Recurso

@admin.register(EnvioRecurso)
class EnvioRecursoAdmin(admin.ModelAdmin):
    class Meta:
        model = EnvioRecurso
