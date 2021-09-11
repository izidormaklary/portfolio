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
                  'display_image',
                  'languages',
                  'tags',
                  'short_description',
                  'long_description',
                  ]


class ProjectPreviewSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Project
        fields = ['id',
                  'name',
                  'prev_image',
                  'short_description',
                  ]
