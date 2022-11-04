from rest_framework import generics

from .models import Post
from .serializers import PostListSerializer, PostDetailSerializer


# Create your views here.

# PostのAPI URL
class PostList(generics.ListAPIView):
    queryset = Post.objects.order_by('-createTime')
    serializer_class = PostListSerializer


class PostDetail(generics.RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostDetailSerializer
