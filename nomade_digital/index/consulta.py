from .forms import ConsultaForm
from django.core.mail import send_mail


def envia_mail(request):

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

    
    return [mensaje, form]