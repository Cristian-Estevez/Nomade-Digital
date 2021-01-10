from django.contrib import admin
from .models import Post, ImagenPost

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

#admin.site.register(Post)


#admin.site.register(ImagenPost)