from django.shortcuts import render
from .models import Project, BlogPost

def home(request):
    projects = Project.objects.all()[:3]  # İlk 3 projeyi gösterebiliriz
    blog_posts = BlogPost.objects.all()[:3]  # İlk 3 blog yazısını gösterebiliriz
    return render(request, 'index.html', {'projects': projects, 'blog_posts': blog_posts})

def about(request):
    return render(request, 'about.html')

def project_list(request):
    projects = Project.objects.all()
    return render(request, 'projects.html', {'projects': projects})

def project_detail(request, id):
    project = Project.objects.get(id=id)
    return render(request, 'project_detail.html', {'project': project})

def blog_list(request):
    blog_posts = BlogPost.objects.all()
    return render(request, 'blog.html', {'blog_posts': blog_posts})

def blog_detail(request, id):
    blog_post = BlogPost.objects.get(id=id)
    return render(request, 'blog_detail.html', {'blog_post': blog_post})
