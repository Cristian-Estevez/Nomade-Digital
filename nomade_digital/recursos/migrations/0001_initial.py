# Generated by Django 3.1.4 on 2021-01-27 18:31

import ckeditor.fields
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Recurso',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=200)),
                ('texto', ckeditor.fields.RichTextField(blank=True, null=True)),
                ('imagen', models.ImageField(blank=True, null=True, upload_to='recursos', verbose_name='Imagen de portada')),
                ('creado', models.DateTimeField(default=django.utils.timezone.now)),
                ('publicado', models.DateTimeField(blank=True, null=True)),
                ('archivo', models.FileField(blank=True, null=True, upload_to='archivos_recursos')),
                ('autor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'recurso',
                'verbose_name_plural': 'recursos',
            },
        ),
        migrations.CreateModel(
            name='EnvioRecurso',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('fecha', models.DateTimeField(default=django.utils.timezone.now)),
                ('recurso_enviado', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='enviados', to='recursos.recurso')),
            ],
        ),
    ]
