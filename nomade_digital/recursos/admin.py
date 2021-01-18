from django.contrib import admin
from .models import Recurso

# Register your models here.
@admin.register(Recurso)
class RescursoAdmin(admin.ModelAdmin):
    class Meta:
        model = Recurso

        