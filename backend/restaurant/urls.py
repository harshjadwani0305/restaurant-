from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet, MenuItemViewSet
from .views import staff_login

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)
router.register(r'menu', MenuItemViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/login/', staff_login)
]
