from django.forms import ModelForm

from myblog.models import Post


class CreatePost(ModelForm):
    class Meta(object):
        model = Post
        exclude = ('pub_date', 'change_date', 'author')