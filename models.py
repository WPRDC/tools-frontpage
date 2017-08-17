from django.db import models

class Tool(models.Model):
    title = models.CharField(max_length=64)
    author =  models.CharField(max_length=100)
    author_org =  models.CharField('Author\'s Organization', max_length=200)
    description = models.TextField(help_text='Short description on front page')
    url = models.URLField()
    pic = models.ImageField(upload_to="tool_images")

    def __str__(self):
        return self.title