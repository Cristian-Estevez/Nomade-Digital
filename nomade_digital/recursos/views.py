from django.shortcuts import render, get_object_or_404, redirect
from .models import Recurso
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from django.http import HttpResponse
from .forms import RecursoForm, EnvioRecursoForm
from django.core.mail import EmailMessage


# Create your views here.


def recursos(request):
    """Esta vista renderiza la lista de los recursos ya publicados"""

    recursos = Recurso.objects.filter(publicado__lte=timezone.now()).order_by('-publicado')
    return render(request, 'recursos/recursos.html', {'recursos':recursos})



def detalle_recursos(request, pk):
    recurso = get_object_or_404(Recurso, pk=pk)
    logrado = False
    if request.method == 'POST':
        form = EnvioRecursoForm(request.POST)
        print('post logrado')
        if form.is_valid():
            print('isvalid true')
            # guardado de solicitud en BBDD

            recurso_enviado = form.save(commit=False)
            recurso_enviado.recurso_enviado = recurso
            recurso_enviado.save()
            
            texto_email = '''<h1>Gracias por confiar en nosotros</h1><br>
            <h2>Saludos de <a href="nomade-digital.com.ar">Nómade Digital</a></h2>'''

            
            # envio de mail con archivo adjunto
            msg = EmailMessage(f'Nomade Digital te envía el que solicitaste.', texto_email, 'desarrolloyprog@gmail.com', [str(form.cleaned_data['email'])])
            msg.content_subtype = 'html'
            msg.attach_file('media/'+(str(recurso.archivo)))
            msg.send()

            logrado = True

        
    else:
        form = EnvioRecursoForm()




    return render(request, 'recursos/detalle_recursos.html', {'recurso': recurso, 'form':form, 'logrado': logrado})


@login_required
def editar_recurso(request, pk):
    """Vista para editar un recurso ya creado, esté el mismo publicado o no."""
    recurso = get_object_or_404(Recurso, pk=pk)
    
    if request.method == 'POST':
        form = RecursoForm(request.POST, request.FILES, instance=recurso)

        if form.is_valid():
            recurso = form.save(commit=False)
            recurso.autor = request.user
            recurso.save()

            return redirect('recursos:detalle_recursos', pk=pk)

    else:
        form = RecursoForm(instance=recurso)
    
    return render(request, 'recursos/editar_recursos.html', {'form': form, 'recurso':recurso})


@login_required
def lista_borrador_recursos(request):
    """Esta vista renderiza todos los recursos que aún no tienen fecha de publicación"""
    recursos_no_public = Recurso.objects.filter(publicado__isnull=True).order_by('-creado')
    return render(request, 'recursos/borrador_recursos.html', {'recursos': recursos_no_public})


@login_required
def nuevo_recurso(request):
    """Vista para crear un nuevo recurso"""
    
    if request.method =='POST':
        form = RecursoForm(request.POST, request.FILES)

        if form.is_valid():
            recurso = form.save(commit=False)
            recurso.autor = request.user
            recurso.save()

            return redirect('recursos:detalle_recursos', pk=recurso.pk)

    else:
        form = RecursoForm
        return render(request, 'recursos/editar_recursos.html', {'form': form})


@login_required
def publicar_recurso(request, pk):
    recurso = get_object_or_404(Recurso, pk=pk)
    recurso.publicar()
    return redirect('recursos:detalle_recursos', pk=pk)

    


@login_required
def borrar_recurso(request, pk):
    recurso = get_object_or_404(Recurso, pk=pk)
    recurso.delete()
    return redirect('recursos:recursos')