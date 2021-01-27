from django import forms
from .models import Consulta


class ConsultaForm(forms.ModelForm):

    nombre = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '¿Como te llamas?', 'class': 'inputs-datos'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'type': 'email', 'placeholder': '¿Cual es tu E-Mail', 'class': 'inputs-datos'}))
    mensaje = forms.CharField(widget=forms.Textarea(attrs={'class': 'text-area-comentario', 'placeholder': 'Enviame tu consulta...'}))

    # FALTA GENERAR UN CLASS EN CSS Y AGREGARSELO A DICC DE ATTRS EN CADA CAMPO
    class Meta:
        model = Consulta
        fields = ['nombre', 'email', 'mensaje']