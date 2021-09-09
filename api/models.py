from django.db import models
from django.contrib.postgres.fields.jsonb import JSONField as JSONBField


def lang_default():
    return {"language": "", "percentage": 0}


def arr_default():
    return ["one", "two"]


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200)
    github_url = models.URLField()
    host_url = models.URLField()
    prev_image = models.URLField()
    languages = JSONBField(default=list)
    tags = JSONBField(default=list)
    description = models.CharField(max_length=1000)
