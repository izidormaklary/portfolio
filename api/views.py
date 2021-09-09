from .models import Project
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ProjectSerializer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from django.shortcuts import get_object_or_404
from django.http.response import JsonResponse


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def project_all(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    serializer = ProjectSerializer(project)
    return Response(serializer.data)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def tags(request):
    tag_tuples = Project.objects.values_list('tags')
    tag_list = []

    for tuple in tag_tuples:
        for tlist in tuple:
            tag_list += tlist

    return JsonResponse(list(set(tag_list)), safe=False)


@api_view(['GET'])
@renderer_classes([JSONRenderer])
def with_tag(request, tag):
    projects = Project.objects.filter(tags__icontains=tag)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)
