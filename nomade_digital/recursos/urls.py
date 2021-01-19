from django.urls import path
from . import views

app_name = 'recursos'
urlpatterns = [
    path("", views.recursos, name='recursos'),
    path('recurso/<int:pk>/', views.detalle_recursos, name='detalle_recursos'),
    path('recurso/borrador/', views.lista_borrador_recursos, name='lista_borrador_recursos'),
    path('recurso/nuevo/', views.nuevo_recurso, name='nuevo_recurso'),
    path('recurso/<int:pk>/editar/', views.editar_recurso, name='editar_recurso'),
    path('recurso/<int:pk>/borrar/', views.borrar_recurso, name='borrar_recurso'),
    path('recurso/<int:pk>/publicar/', views.publicar_recurso, name='publicar_recurso'),
]