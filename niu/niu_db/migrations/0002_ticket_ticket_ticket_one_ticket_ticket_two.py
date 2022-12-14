# Generated by Django 4.1.3 on 2022-11-29 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('niu_db', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('studentID', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=10)),
                ('oneRow', models.SmallIntegerField()),
                ('oneCol', models.SmallIntegerField()),
                ('twoRow', models.SmallIntegerField(blank=True)),
                ('twoCol', models.SmallIntegerField(blank=True)),
            ],
        ),
        migrations.AddConstraint(
            model_name='ticket',
            constraint=models.UniqueConstraint(fields=('oneRow', 'oneCol'), name='ticket_one'),
        ),
        migrations.AddConstraint(
            model_name='ticket',
            constraint=models.UniqueConstraint(fields=('twoRow', 'twoCol'), name='ticket_two'),
        ),
    ]
