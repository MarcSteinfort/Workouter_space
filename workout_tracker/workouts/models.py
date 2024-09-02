from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    workout_type = models.CharField(max_length=100)
    duration = models.IntegerField()  # Duration in minutes
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.workout_type} on {self.date}"