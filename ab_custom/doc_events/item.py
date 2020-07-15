# -*- coding: utf-8 -*-
from __future__ import unicode_literals


def before_save(doc, method):
    doc.description = doc.item_name
