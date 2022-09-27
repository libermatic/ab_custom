# -*- coding: utf-8 -*-
from . import __version__

app_name = "ab_custom"
app_version = __version__
app_title = "AB Custom"
app_publisher = "Libermatic"
app_description = "Customizations for AB"
app_icon = "octicon octicon-file-directory"
app_color = "grey"
app_email = "info@libermatic.com"
app_license = "MIT"

fixtures = [
    {
        "doctype": "POS Asset",
        "filters": {
            "name": (
                "in",
                [
                    "01-modified_item_view",
                    "02-price_list_rate_in_cart",
                    "03-item_idx",
                    "04-editable_description",
                    "04-editable_description_cart",
                ],
            ),
        },
    },
]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/ab_custom/css/ab_custom.css"
app_include_js = ["ab_custom.bundle.js"]

# include js, css files in header of web template
# web_include_css = "/assets/ab_custom/css/ab_custom.css"
# web_include_js = "/assets/ab_custom/js/ab_custom.js"

# include js in page
# page_js = {"point-of-sale": "public/includes/point_of_sale.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "ab_custom.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "ab_custom.install.before_install"
# after_install = "ab_custom.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "ab_custom.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
    "Item": {"before_save": "ab_custom.doc_events.item.before_save"},
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"ab_custom.tasks.all"
# 	],
# 	"daily": [
# 		"ab_custom.tasks.daily"
# 	],
# 	"hourly": [
# 		"ab_custom.tasks.hourly"
# 	],
# 	"weekly": [
# 		"ab_custom.tasks.weekly"
# 	]
# 	"monthly": [
# 		"ab_custom.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "ab_custom.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "ab_custom.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "ab_custom.task.get_dashboard_data"
# }

