const express = require("express")
const router = express.Router()
const 

router.post('/create',authMiddleware, createInvoice)
router.get('/kpi' ,authMiddleware,totalRevenue)

module.exports = router