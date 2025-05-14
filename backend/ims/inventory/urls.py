from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("api", views.api_root, name="api"),
    path("api/login", views.UserLoginAPIView.as_view(), name="login-user"),
    path("api/logout", views.UserLogoutAPIView.as_view(), name="logout-user"),
    path("api/user", views.UserAPIView.as_view(), name="ims-user")
]

urlpatterns = format_suffix_patterns(urlpatterns)