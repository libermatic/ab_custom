# Copyright (c) 2013, Libermatic and contributors
# For license information, please see license.txt

from erpnext.accounts.report.item_wise_sales_register.item_wise_sales_register import (
    execute as item_wise_sales_register,
)
from toolz.curried import compose, concatv, excepts, first, keyfilter, merge


def execute(filters=None):
    result = item_wise_sales_register(filters)
    return concatv((_get_columns(result[0]), _get_data(result[1])), result[2:])


WHITELISTED_COLUMNS = [
    "invoice",
    "posting_date",
    "item_code",
    "stock_qty",
    "rate",
    "amount",
]


def _get_columns(columns):
    pick_column = compose(
        lambda x: x
        if not x.get("fieldname") == "item_code"
        else merge(x, {"width": 300}),
        excepts(StopIteration, first, lambda _: {}),
        lambda x: filter(lambda col: col.get("fieldname") == x, columns),
    )

    return [pick_column(x) for x in WHITELISTED_COLUMNS]


def _get_data(data):
    includes = WHITELISTED_COLUMNS + ["item_name"]
    return [keyfilter(lambda x: x in includes, row) for row in data]
