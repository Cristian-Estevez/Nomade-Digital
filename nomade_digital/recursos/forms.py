from django import forms
from .models import Recurso, EnvioRecurso


class RecursoForm(forms.ModelForm):
    class Meta:
        model = Recurso
        fields = ['titulo', 'texto', 'imagen', 'archivo']


class EnvioRecursoForm(forms.ModelForm):
    nombre = forms.CharField(widget=forms.TextInput(attrs={'placeholder': '¿Como te llamas?'}))
    email = forms.EmailField(widget=forms.TextInput(attrs={'type': 'email', 'placeholder': '¿Cual es tu E-Mail'}))
    
    class Meta:
        model = EnvioRecurso
        fields = ['nombre', 'email', 'recurso_enviado']