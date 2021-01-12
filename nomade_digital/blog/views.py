from django.shortcuts import render, get_object_or_404
from .models import Post, ImagenPost, PostComent
from django.utils import timezone
from .forms import PostForm, PostComentForm
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
    imagenes = ImagenPost.objects.filter(post=post)
    comentarios = PostComent.objects.filter(post_id=pk, active=True)
    # la linea de arriba puedo hacerla asi: comentarios = post.comentarios.filter(active=True)
    nuevo_comentario = None
    # funcionalidad para agregar comentarios:
    if request.method == 'POST':
        form = PostComentForm(data=request.POST)

        if form.is_valid():
            nuevo_comentario = form.save(commit=False)
            nuevo_comentario.post_id = post
            nuevo_comentario.fecha = timezone.now()
            nuevo_comentario.save()

        

    else:
        form = PostComentForm()


    
    context = {'post': post, 'imagenes': imagenes, 'comentarios': comentarios, 'form': form, 'nuevo_comentario': nuevo_comentario}

    return render(request, 'blog/detalle_post.html', context)

@login_required
def editar_post(request, pk):
    post = get_object_or_404(Post, pk=pk)

    if request.method == 'POST':
        form = PostForm(request.POST, request.FILES, instance=post)
        
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
        form = PostForm(request.POST, request.FILES)

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
