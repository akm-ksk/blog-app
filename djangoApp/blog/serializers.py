from rest_framework import serializers

from .models import Post


# REST API の設定
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['title', 'text', 'image', 'createTime', 'updateTime']
