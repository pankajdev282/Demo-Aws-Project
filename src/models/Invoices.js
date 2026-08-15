const mongoose = require("mongoose")
const User = require('./Users')
const Items = require('./Items')

const InvoiceSchema = mongoose.Schema({
    invoiceNumber:Number,
    lineItems:[{
        item:{
            type:mongoose.Schema.Types.ObjectId,
            ref:Items
        },
        quntity:Number,
        amount:mongoose.Schema.Types.Decimal128
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    }
})  


module.exports = mongoose.model('Invoice',InvoiceSchema) 