from django.shortcuts import render, get_object_or_404
from blog.models import Post
from .forms import ConsultaForm
from django.utils import timezone
from .models import Consulta
from blog.models import Post
from recursos.models import Recurso
from .consulta import envia_mail #en consulta.py tengo la función de envío de email


# Create your views here.
def index(request):


    posts = Post.objects.all().order_by("-publicado")[:3]
    
    
    if request.method == 'POST':
        
        de_fuera = envia_mail(request)

        mensaje = de_fuera[0]
        form = de_fuera[1]
 
    else:
        mensaje = None
        form = ConsultaForm()
        


    context ={
        'posts': posts, 
        'form': form,
        'mensaje': mensaje,
    }

    
    return render(request, 'index/index.html', context)

def servicios(request):
    if request.method == "POST":
        de_fuera = envia_mail(request)

        mensaje = de_fuera[0]
        form = de_fuera[1]
 
    else:
        mensaje = None
        form = ConsultaForm()
        


    context ={
        'form': form,
        'mensaje': mensaje,
    }

    return render(request, "index/servicios.html", context)

def contacto(request):
    if request.method == "POST":
        de_fuera = envia_mail(request)

        mensaje = de_fuera[0]
        form = de_fuera[1]
 
    else:
        mensaje = None
        form = ConsultaForm()
        


    context ={
        'form': form,
        'mensaje': mensaje,
    }

    return render(request, "index/contacto.html", context)

def busqueda(request):

    query = request.GET.get('q')
    recurso_list = Recurso.objects.filter(titulo__icontains=query).exclude(publicado=None).order_by("-publicado")
    post_list = Post.objects.filter(titulo__icontains=query).exclude(publicado=None).order_by("-publicado")
    context = {"post_list":post_list, "recurso_list":recurso_list}

    return render(request, "index/busqueda.html", context)