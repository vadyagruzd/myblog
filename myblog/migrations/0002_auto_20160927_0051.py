# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-26 21:51
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='Название записи',
            new_name='post_name',
        ),
        migrations.RenameField(
            model_name='post',
            old_name='Запись',
            new_name='post_text',
        ),
    ]