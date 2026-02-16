from django.urls import path
from .views import *

urlpatterns = [
    path('products/', product_list, name = 'product_list'),
    path('orders/', order_list , name = 'order_list')
]