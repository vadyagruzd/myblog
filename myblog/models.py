from django.contrib.auth.models import User
from django.db import models


class Post(models.Model):
    post_name = models.CharField(max_length=50)
    post_text = models.CharField(max_length=2000)
    pub_date = models.DateTimeField(auto_now_add=True)
    change_date = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=False)
    author = models.ForeignKey(User)