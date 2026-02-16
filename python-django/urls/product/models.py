from django.db import models
from django.core.validators import MinValueValidator , MaxValueValidator
# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True)
    
    def __str__(self):
        return self.name
    
class Brand(models.Model):
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=100,unique=True)
    description = models.TextField(blank=True)
    in_stock = models.BooleanField(default=True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name='products'
    )
    brand = models.ForeignKey(
        Brand,
        on_delete=models.PROTECT,
        related_name='products'
    )
    
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)
    quantity = models.PositiveIntegerField(default=0)
    def is_available(self):
        return self.in_stock
    def __str__(self):
        return self.name
    
class Order(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now=True)
    is_paid = models.BooleanField(default=False)
    
    def total_price(self):
        total = 0
        for item in self.items.all():
            total += item.price_at_purchase * item.quantity
        return total
            
    def __str__(self):
        return f"Order {self.customer_name}"
            
class OrderItem(models.Model):
    order = models.ForeignKey(
        Order,
        on_delete=models.PROTECT,
        related_name='items'
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
        related_name='items'
    )
    price_at_purchase = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=0)
    def __str__(self):
        return f"{self.quantity} {self.product.name}"