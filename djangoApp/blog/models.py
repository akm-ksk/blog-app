from django.db import models


# Create your models here.
class Post(models.Model):
    title = models.CharField('タイトル', max_length=200)
    text = models.TextField('本文')
    image = models.ImageField(verbose_name="画像", upload_to="uploads/", null=True, blank=True)
    createTime = models.DateTimeField(verbose_name="作成日", auto_now_add=True)
    updateTime = models.DateTimeField(verbose_name="更新日時", auto_now=True)

    def __str__(self):
        return self.title
