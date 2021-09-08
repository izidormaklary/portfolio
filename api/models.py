from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)
    github_url = models.URLField()
    host_url = models.URLField()
    prev_image = models.URLField()
    languages = models.JSONField(null=True)
    description = models.CharField(max_length=1000)
