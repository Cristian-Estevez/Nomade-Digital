from django.shortcuts import render
from blog.models import Post



# Create your views here.
def index(request):
    posts = Post.objects.all().order_by("-publicado")[:5]
    
    context ={
        'posts': posts,
    }
    
    return render(request, 'index/index.html', context)

