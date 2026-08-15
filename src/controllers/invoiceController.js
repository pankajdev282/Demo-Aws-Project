const mongoose = require('mongoose')
const joi = require("joi")
const SystemSetting = require("../models/SystemSetting")
const Invoice = require("../models/Invoices")

const lineItem = joi.object({
    item :joi.string().hex().length(24),
    amount:joi.number().required(),
    quntity:joi.number().integer().required()
    
})
const invoiceValidation = joi.object({
    lineItems: joi.array().items(lineItem).min(1).required(),
    user:joi.string().hex().length(24).required()
})
const createInvoice = async(req, res)=>{
    const result = invoiceValidation.validate(req.body)
    if(result?.error){
        return res.status(400).json({
            success:false,
            message :result.error.details
        })
    }
    try{
        const systemSetting =await SystemSetting.find()
        const invoiceNumber = systemSetting[0].invoiceNumberCount
        const newInvoice = new Invoice({invoiceNumber, ...req.body})
        newInvoice.save()
        systemSetting[0].invoiceNumberCount +=1
        systemSetting[0].save()
        return res.status(201).json({
            sucess:false,
            message:'Invoice Created Successfull'
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

module.exports = {createInvoice}