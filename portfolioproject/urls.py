from django.contrib import admin
from django.shortcuts import render

from django.urls import include, path, re_path


def render_react(request):
    return render(request, "index.html")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    re_path("r", render_react)
]
