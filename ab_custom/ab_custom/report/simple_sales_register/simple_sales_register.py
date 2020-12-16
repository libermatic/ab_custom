# Copyright (c) 2013, Libermatic and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from erpnext.accounts.report.sales_register.sales_register import (
    execute as sales_register,
)
from toolz.curried import compose, concatv, excepts, first, keyfilter, merge
from toolz.itertoolz import groupby


def execute(filters=None):
    result = sales_register(filters)
    invoices = [x.get("invoice") for x in result[1]]
    payments, mops = _get_payments(invoices)

    return concatv(
        (_get_columns(result[0], mops), _get_data(result[1], payments, mops)),
        result[2:],
    )


WHITELISTED_COLUMNS = [
    "invoice",
    "posting_date",
    "customer",
    "grand_total",
    "rounded_total",
    "outstanding_amount",
]


def _get_columns(columns, mops):
    pick_column = compose(
        lambda x: x
        if not x.get("fieldname") == "customer"
        else merge(x, {"width": 300}),
        excepts(StopIteration, first, lambda _: {}),
        lambda x: filter(lambda col: col.get("fieldname") == x, columns),
    )

    def make_columns(mop):
        return {
            "fieldname": mop,
            "fieldtype": "Currency",
            "label": mop,
            "options": "currency",
            "width": 120,
        }

    return [pick_column(x) for x in WHITELISTED_COLUMNS] + [
        make_columns(x) for x in sorted(mops)
    ]


def _get_data(data, payments, mops):
    includes = WHITELISTED_COLUMNS + ["customer_name"]
    payments_by_invoice = groupby("invoice", payments)

    def get_payments(row):
        invoice_payments = payments_by_invoice.get(row.get("invoice"), [])
        return {
            mop: sum(
                [
                    x.get("amount")
                    for x in invoice_payments
                    if x.get("mode_of_payment") == mop
                ]
            )
            for mop in mops
        }

    return [
        merge(keyfilter(lambda x: x in includes, row), get_payments(row))
        for row in data
    ]


def _get_payments(invoices):
    if not invoices:
        return [], []

    payments = frappe.db.sql(
        """
            SELECT
                sip.mode_of_payment,
                sip.amount,
                sip.parent AS invoice
            FROM `tabSales Invoice Payment` AS sip
            WHERE sip.parent IN %(invoices)s
            UNION ALL
            SELECT
                IFNULL(pe.mode_of_payment, 'Unknown') AS mode_of_payment,
                per.allocated_amount AS amount,
                per.reference_name AS invoice
            FROM `tabPayment Entry Reference` AS per
            LEFT JOIN `tabPayment Entry` AS pe ON pe.name = per.parent
            WHERE pe.docstatus = 1 AND per.reference_name IN %(invoices)s
        """,
        values={"invoices": invoices},
        as_dict=1,
    )
    mops = set([x.get("mode_of_payment") for x in payments])
    return payments, mops
