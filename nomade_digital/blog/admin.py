from django.contrib import admin
from .models import Post, ImagenPost, PostComent

# Register your models here.


class ImagenPostAdmin(admin.StackedInline):
    model = ImagenPost

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):

    #readonly_fields = [
    #    'titulo', 
    #    'creado',
    #    'publicado',
    #]
    inlines = [ImagenPostAdmin]

    class Meta():
        model = Post

@admin.register(PostComent)
class PostComentAdmin(admin.ModelAdmin):
    list_display = ('nombre_usuario', 'texto', 'fecha', 'active')
    list_filter = ('active', 'fecha')
    search_fields = ('nombre_usuario', 'email', 'texto')
    actions = ('aprobar_comentarios')

    def aprobar_comentarios(self, request, queryset):
        queryset.update(active=True)

#admin.site.register(Post)


#admin.site.register(ImagenPost)