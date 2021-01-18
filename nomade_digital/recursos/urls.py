from django.urls import path
from . import views

app_name = 'recursos'
urlpatterns = [
    path("", views.recursos, name='recursos'),
    path('recursos/<int:pk>/', views.detalle_recursos, name='detalle_recursos'),
    path('recursos/borrador/', views.lista_borrador_recursos, name='lista_borrador_recursos'),
    path('recursos/nuevo/', views.nuevo_recurso, name='nuevo_recurso'),
    path('recursos/<int:pk>/editar/', views. editar_recurso, name='editar_recurso'),
]