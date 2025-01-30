from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static




urlpatterns = [
    path('', views.home, name='index'),  # Ana sayfa
    path('about/', views.about, name='about'),
    path('projects/', views.project_list, name='project_list'),  # Projeler sayfası
    path('projects/<int:id>/', views.project_detail, name='project_detail'),  # Proje detayları
    path('blog/', views.blog_list, name='blog_list'),  # Blog sayfası
    path('blog/<int:id>/', views.blog_detail, name='blog_detail'),  # Blog detayları
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)