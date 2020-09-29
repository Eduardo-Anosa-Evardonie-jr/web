# Generated by Django 2.2.4 on 2020-09-29 17:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    replaces = [('dashboard', '0149_hackathonproject_grant_link'), ('dashboard', '0150_auto_20200913_1437'), ('dashboard', '0151_auto_20200921_1510')]

    dependencies = [
        ('dashboard', '0148_add_brightid_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='hackathonproject',
            name='grant_link',
            field=models.ForeignKey(help_text='Link to grant if project is converted to grant', null=True, on_delete=django.db.models.deletion.SET_NULL, to='grants.Grant'),
        ),
    ]