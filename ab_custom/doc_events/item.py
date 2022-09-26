# -*- coding: utf-8 -*-


def before_save(doc, method):
    doc.description = doc.item_name
