const Invoices = require("../models/Invoices")
const mongoose = require("mongoose")

const totalRevenue = async(req,res)=>{
    try{
    const revenueUserWise = await Invoices.aggregate([
        {
            $lookup:{
                from:'users',
                localField:'user',
                foreignField:'_id',
                as:'user'
            }
        },
        {
            $unwind:"$user"
        },
        {
            $unwind:"$lineItems"
        },
        {
            $group:{
                _id:'$user._id',
                name:{$first:'$user.firstName'},
                totalRevenue:{
                    $sum:{
                        $multiply:[
                            "$lineItems.price",
                            "$lineItems.quntity"
                        ]
                    }
                }
            }
        },
        {
            $project:{
                _id:0,
                name:1,
                totalRevenue:1
            }
        }
    ])

    return res.status(200).json({
        success:true,
        result:revenueUserWise
    })
}
catch(err){
    return res.status(500).json({
        success:false,
        error :err.message
    })
}
}

module.exports = {totalRevenue}