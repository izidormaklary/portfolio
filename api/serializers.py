from .models import Project
from rest_framework import serializers
import logging

logger = logging.getLogger("root")


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Project
        fields = ['id',
                  'name',
                  'github_url',
                  'host_url',
                  'prev_image',
                  'languages',
                  'tags',
                  'description']


