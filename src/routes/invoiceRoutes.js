const express = require("express")
const router = express.Router()
const {authMiddleware} = require("../services/authMiddleware")
const {createInvoice} = require("../controllers/invoiceController")
const {totalRevenue} = require("../controllers/KpiController")

router.post('/create',authMiddleware, createInvoice)
router.get('/kpi' ,totalRevenue)

module.exports = router