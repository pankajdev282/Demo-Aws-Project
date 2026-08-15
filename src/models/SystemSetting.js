const mongoose = require('mongoose')
const Invoices = require('./Invoices')

const SystemSettingSchema = mongoose.Schema({
    invoiceNumberCount:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('SystemSetting' , SystemSettingSchema)