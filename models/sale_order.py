from odoo import models, fields


class SaleOrder(models.Model):
    _inherit = "sale.order"

    slider = fields.Float(string="slider")
