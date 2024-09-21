from django.db import models

class Reservation(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    people = models.IntegerField()
    time_slot = models.TimeField()

    def __str__(self):
        return f'{self.name} - {self.time_slot}'

class MenuItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='menu_images/', null=True, blank=True)

    def __str__(self):
        return self.name
