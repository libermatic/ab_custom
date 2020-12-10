# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _


def get_data():
    return [
        {
            "label": _("Accounts Receivable"),
            "items": [
                {
                    "type": "report",
                    "is_query_report": True,
                    "name": "Simple Item-wise Sales Register",
                    "doctype": "Sales Invoice",
                },
            ],
        },
    ]
