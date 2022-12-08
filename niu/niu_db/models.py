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
    
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['seat'], name="seat"),
        ]