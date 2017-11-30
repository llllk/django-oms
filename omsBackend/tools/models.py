# -*- coding: utf-8 -*-
# author: itimor

from django.db import models
from tools.filesize import convert_size
from tools.storage import PathAndRename
import os

class Upload(models.Model):
    username = models.CharField(max_length=20, verbose_name=u'上传用户')
    file = models.FileField(upload_to=PathAndRename("./"), blank=True, verbose_name=u'上传文件')
    archive = models.CharField(max_length=101, default=u'其他', null=True, blank=True, verbose_name=u'文件归档')
    filename = models.CharField(max_length=201, null=True, blank=True, verbose_name=u'文件名')
    filepath = models.CharField(max_length=201, null=True, blank=True, verbose_name=u'文件路径')
    type = models.CharField(max_length=20, null=True, blank=True, verbose_name=u'文件类型')
    size = models.CharField(max_length=20, null=True, blank=True, verbose_name=u'文件大小')
    create_time = models.CharField(max_length=20, null=True, blank=True, verbose_name=u'文件日期')

    def save(self, *args, **kwargs):
        self.size = '{}'.format(convert_size(self.file.size))
        filename = os.path.splitext(self.file.name)
        self.filename = '{}-{}{}'.format(filename[0], self.create_time, filename[1])
        self.filepath = '{}/{}'.format(self.archive, self.filename)
        super(Upload, self).save(*args, **kwargs)

    def __str__(self):
        return self.filepath

    class Meta:
        verbose_name = u'文件上传'
        verbose_name_plural = u'文件上传'