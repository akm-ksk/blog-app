from django.shortcuts import render
from rest_framework import viewsets

from .models import Post
from .serializers import PostSerializer


# Create your views here.

# PostのAPI URL
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
