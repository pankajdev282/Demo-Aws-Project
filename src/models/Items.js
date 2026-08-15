const mongoose = require('mongoose')
const {Units} = require("../utils/enums")

const ItemsSchema = mongoose.Schema({
    name:String,
    price:mongoose.Schema.Types.Decimal128,
    unit:{
        type:String,
        enum:Units,
    }
})

module.exports = mongoose.model('Item' , ItemsSchema)