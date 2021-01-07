from django.urls import path
from . import views

app_name = 'blog'
urlpatterns = [
    path("", views.lista_posts, name='lista_posts'),
    path('post/<int:pk>/', views.detalle_post, name='detalle_post'),
    path('post/nuevo/', views.nuevo_post, name='nuevo_post'),
    path('post/<int:pk>/editar/', views.editar_post, name='editar_post'),
    path('post/borrador/', views.lista_borrador_post, name='lista_borrador_post'),
    path('post/<int:pk>/publicar/', views.publicar_post, name='publicar_post'),
    path('post/<int:pk>/borrar/', views.borrar_post, name='borrar_post'),
]