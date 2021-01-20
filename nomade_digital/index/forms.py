from django import forms
from .models import Consulta


class ConsultaForm(forms.ModelForm):

    nombre = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '¿Como te llamas?'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'type': 'email', 'placeholder': '¿Cual es tu E-Mail'}))
    mensaje = forms.CharField(widget=forms.Textarea(attrs={'placeholder': 'Enviame tu consulta...'}))

    # FALTA GENERAR UN CLASS EN CSS Y AGREGARSELO A DICC DE ATTRS EN CADA CAMPO
    class Meta:
        model = Consulta
        fields = ['nombre', 'email', 'mensaje']