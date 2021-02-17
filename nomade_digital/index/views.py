from django.shortcuts import render, get_object_or_404
from blog.models import Post
from .forms import ConsultaForm
from django.core.mail import send_mail
from django.utils import timezone
from .models import Consulta
from blog.models import Post
from recursos.models import Recurso


# Create your views here.
def index(request):


    posts = Post.objects.all().order_by("-publicado")[:3]
    
    
    if request.method == 'POST':
        
        form = ConsultaForm(request.POST)
        
        if form.is_valid:
            print(form)
            mensaje = form.cleaned_data.get("nombre")
            form.save()
            

            send_mail(
                f'{form.cleaned_data.get("email")}',
                #la linea siguiente es el mensaje que se envia por mail
                f'Mensaje enviado de : {form.cleaned_data.get("nombre")}\nResponder a: {form.cleaned_data.get("email")} \n{form.cleaned_data.get("mensaje")}',
                
                f'{form.cleaned_data.get("email")}',
                ['desarrolloyprog@gmail.com'], # 'fiorellagiammarino@gmail.com',  'fernandezdavid1992@gmail.com', 
                fail_silently=False,
            )
 
    else:
        mensaje = None
        form = ConsultaForm()
        


    context ={
        'posts': posts, 
        'form': form,
        'mensaje': mensaje,
    }

    
    return render(request, 'index/index.html', context)

def busqueda(request):

    query = request.GET.get('q')
    recurso_list = Recurso.objects.filter(titulo__icontains=query).exclude(publicado=None).order_by("-publicado")
    post_list = Post.objects.filter(titulo__icontains=query).exclude(publicado=None).order_by("-publicado")
    context = {"post_list":post_list, "recurso_list":recurso_list}

    return render(request, "index/busqueda.html", context)