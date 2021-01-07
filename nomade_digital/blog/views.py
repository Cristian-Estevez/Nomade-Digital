from django.shortcuts import render, get_object_or_404
from .models import Post
from django.utils import timezone
from .forms import PostForm
from django.shortcuts import redirect
from django.contrib.auth.decorators import login_required



# Create your views here.
def lista_posts(request):
    # posts = Post.objects.all()
    posts = Post.objects.filter(publicado__lte=timezone.now()).order_by('-publicado')

    context ={
        'posts': posts
    }

    return render(request, 'blog/lista_posts.html', context)

def detalle_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/detalle_post.html', {'post': post})

@login_required
def editar_post(request, pk):
    post = get_object_or_404(Post, pk=pk)

    if request.method == 'POST':
        form = PostForm(request.POST, instance=post)
        
        if form.is_valid():
            post = form.save(commit=False)
            post.autor = request.user
            post.save()

            return redirect('blog:detalle_post', pk=pk)

    else:
        form = PostForm(instance=post)
    
    return render(request, 'blog/editar_post.html', {'form': form})

@login_required
def nuevo_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)

        if form.is_valid():
            post = form.save(commit=False)
            post.autor = request.user
            post.save()

            return redirect('blog:detalle_post', pk=post.pk)

    else:
        form = PostForm
        return render(request, 'blog/editar_post.html', {'form': form})

@login_required
def lista_borrador_post(request):
    posts = Post.objects.filter(publicado__isnull=True).order_by('-creado')
    return render(request, 'blog/lista_borrador_post.html',{'posts': posts})


@login_required
def publicar_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.publicar()
    return redirect('blog:detalle_post', pk=pk)


@login_required
def borrar_post(request, pk):
    post = get_object_or_404(Post, pk=pk)
    post.delete()
    return redirect('blog:lista_posts')
