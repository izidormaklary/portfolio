from django.db import models
from django.contrib.postgres.fields.jsonb import JSONField as JSONBField


def lang_default():
    return {"language": "", "percentage": 0}


def arr_default():
    return ["one", "two"]


class Project(models.Model):
    name = models.CharField(max_length=200)
    github_url = models.URLField()
    host_url = models.URLField(blank=True, null=True)
    prev_image = models.CharField(max_length=500, null=True)
    display_image = models.CharField(max_length=500, null=True)
    languages = JSONBField(default=list)
    tags = JSONBField(default=list)
    short_description = models.CharField(max_length=100, null=True)
    long_description = JSONBField(default=list)
