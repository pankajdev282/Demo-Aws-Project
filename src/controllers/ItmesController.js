const Item = require("../models/Items")
const joi  = require("joi")
const {Units} = require('../utils/enums')

const itemsSchema = joi.object({
    name:joi.string().required(),
    price:joi.number().required(),
    unit:joi.string().valid(...Object.value(Units))
})
const createItems =async(res , req)=>{
    try{
        const isNotValid = itemsSchema.valid(req.body)
        if(isNotValid){
            return res.status(400).json({
                success:false,
                error:isNotValid?.error
            })
        }
        const newItem = await Item(req.body)
        const result = newItem.save()
        return res.status(201).json({
            success:true,
            result
        })

    }
    catch(err){
        return res.status(500).json({
            success:false,
            result
        })
    }
}

module.exports = 