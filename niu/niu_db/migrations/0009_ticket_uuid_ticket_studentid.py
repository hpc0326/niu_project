# Generated by Django 4.1.4 on 2022-12-23 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('niu_db', '0008_ticket_ticket_seat'),
    ]

    operations = [
        migrations.AddField(
            model_name='ticket',
            name='cusuuid',
            field=models.CharField(default=0, max_length=8),
            preserve_default=False,
        ),
        migrations.AddConstraint(
            model_name='ticket',
            constraint=models.UniqueConstraint(fields=('studentID',), name='studentID'),
        ),
    ]
