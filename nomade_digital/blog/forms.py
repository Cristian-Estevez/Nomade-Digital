from django import forms
from .models import Post, PostComent


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ['titulo', 'texto',  'imagen']


class PostComentForm(forms.ModelForm):
    class Meta:
        model = PostComent
        fields = ['nombre_usuario', 'email', 'texto']