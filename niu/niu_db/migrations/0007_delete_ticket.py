# Generated by Django 4.1.3 on 2022-12-07 15:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('niu_db', '0006_remove_ticket_seat_ticket_seat1_ticket_seat2_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Ticket',
        ),
    ]