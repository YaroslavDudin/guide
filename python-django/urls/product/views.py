from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.
def product_list(request):
    products  = Product.objects.all()
    return render (request, 'product/product_list.html',{
        'products':products 
    })
def order_list(request):
    orders = Order.objects.all()
    return render(request, 'product/order_list.html', {
        'orders' : orders
    })
    
    