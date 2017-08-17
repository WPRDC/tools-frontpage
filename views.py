from django.shortcuts import render

from .models import Tool


def index(request):
    tools = Tool.objects.all()
    return render(request, 'tools_frontpage/index.html', {'tools': tools})
