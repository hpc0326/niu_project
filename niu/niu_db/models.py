from django.db import models

# Create your models here.
class DBTest(models.Model):
    test = models.CharField(max_length=100, primary_key=True)

class DBTestManager(models.Manager):
    def search(self):
        pass
        #return self.

class Ticket(models.Model):
    seat = models.CharField(max_length = 6, primary_key= True)
    studentID = models.CharField(max_length = 12, null = False)
    name = models.CharField(max_length = 20, null = False)
    cusuuid = models.CharField(max_length = 8)
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['seat'], name="seat")
        ]

class Login(models.Model):
    account = models.CharField(max_length = 20, primary_key = True)
    password = models.CharField(max_length = 70, null = False)