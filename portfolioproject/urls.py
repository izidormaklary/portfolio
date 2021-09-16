from django.contrib import admin
from django.shortcuts import render
from django.urls import include, path, re_path
from django.views.generic import TemplateView


def render_react(request):
    return render(request, "index.html")


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path(
        "robots.txt",
        TemplateView.as_view(template_name="robots.txt", content_type="text/plain"),
    ),
    re_path("", render_react)
]
