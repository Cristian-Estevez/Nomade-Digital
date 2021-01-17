from django import forms
from .models import Post, PostComent


class PostForm(forms.ModelForm):
    texto = forms.CharField(widget=forms.Textarea(attrs={'class': 'text-area-comentario'}))
    class Meta:
        model = Post
        fields = ['titulo', 'texto',  'imagen']


class PostComentForm(forms.ModelForm):
    texto = forms.CharField(widget=forms.Textarea(attrs={'class': 'text-area-comentario'}))
    class Meta:
        model = PostComent
        fields = ['nombre_usuario', 'email', 'texto']