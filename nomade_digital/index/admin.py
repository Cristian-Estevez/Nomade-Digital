from django.contrib import admin
from .models import Consulta
# Register your models here.



class ConsultaAdmin(admin.ModelAdmin):
    list_filter = ('email',)
    list_display = ('email', 'nombre', 'mensaje')

admin.site.register(Consulta, ConsultaAdmin)