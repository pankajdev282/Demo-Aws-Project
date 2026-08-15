const User = require("../models/Users")
const moongose = require('mongoose')

const getAllUsers = async(req, res)=>{
    try{
        const userList = await User.find()
        return res.status(200).json({
            success:true,
            data:userList
        })
    }
    catch(error){
        return res.status(500).json({
            error:"Server Error"
        })
    }

}

module.exports=  getAllUsers