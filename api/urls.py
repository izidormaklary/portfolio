from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'project', views.ProjectViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('projects', views.project_all, name="project_list"),
    path('project/<pk>', views.project_detail, name="project_detail"),
    path('tags', views.tags, name="tags"),
    path('projects/<tag>', views.with_tag, name="with_tag")
]
