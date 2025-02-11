# Generated by Django 4.2.13 on 2024-05-29 05:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('post_date', models.DateField()),
                ('image', models.ImageField(default='myapp/static/about.jpg', upload_to='static')),
                ('paragraph', models.TextField(max_length=400)),
            ],
        ),
    ]
