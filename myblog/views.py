from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render, redirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.generic import CreateView, DetailView, ListView, UpdateView
from django.views.generic import FormView
from django.views.generic import TemplateView

from myblog.forms import CreatePost
from myblog.models import Post


@login_required
def index(request):
    return HttpResponseRedirect(reverse('users_list'))


@login_required
def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))


class LoginView(FormView):
    template_name = 'myblog/login.html'
    model = User
    form_class = AuthenticationForm

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(reverse('index'))
        else:
            return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password'])
        if user is not None:
            login(self.request, user)
            return HttpResponseRedirect(reverse('index'))


class UsersListView(ListView):
    template_name = 'myblog/users_list.html'
    model = User
    context_object_name = 'users'

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get_queryset(self):
        return super().get_queryset()


class UserPostsView(ListView):
    template_name = 'myblog/user_posts_list.html'
    model = Post
    context_object_name = 'posts'

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset.filter(author=self.kwargs['user_id'])


class PostView(DetailView):
    template_name = 'myblog/post_view.html'
    model = Post
    context_object_name = 'post'

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)


class UpdatePostView(UpdateView):
    template_name = 'myblog/create_post.html'
    model = Post
    form_class = CreatePost

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get_success_url(self):
        return reverse('post_view', kwargs={'pk': self.kwargs['pk']})


class CreatePostView(CreateView):
    template_name = 'myblog/create_post.html'
    form_class = CreatePost

    @method_decorator(login_required)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def form_valid(self, form):
        try:
            currentPost = Post.objects.create(post_name=form.cleaned_data['post_name'],
                                post_text=form.cleaned_data['post_text'],
                                is_published=form.cleaned_data['is_published'],
                                author=self.request.user
                                )
        except:
            return HttpResponseRedirect(reverse('post_create'))

        return HttpResponseRedirect(reverse('post_view'), currentPost.id)