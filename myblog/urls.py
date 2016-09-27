from django.conf.urls import url

from myblog import views
from myblog.views import UsersListView, UserPostsView, PostView, UpdatePostView, CreatePostView, LoginView

urlpatterns = [
    url(r'^$', views.index, name="index"),
    url(r'^blog/$', views.index),
    url(r'^login/', LoginView.as_view(), name='login'),
    url(r'logout/', views.logout_view, name='logout'),
    url(r'blog/users/$', UsersListView.as_view(), name="users_list"),
    url(r'blog/users/(?P<user_id>[0-9]+)/$', UserPostsView.as_view(), name="user_posts_list"),
    url(r'blog/(?P<pk>[0-9]+)/$', PostView.as_view(), name="post_view"),
    url(r'blog/(?P<pk>[0-9]+)/update/$', UpdatePostView.as_view(), name="post_update"),
    url(r'blog/create/$', CreatePostView.as_view(), name="post_create"),
]