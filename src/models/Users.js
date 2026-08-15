const mongoose = require('mongoose')
const {Role,Status}= require("../utils/enums")

const UserSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    status:{
        type:String,
        enum:Object.values(Status),
        default:Status.ACTIVE
    },
    role:{
        type:String,
        enum:Object.values(Role),
        default:Role.MEMBER
    },
    permissions :{
        type:Object,
        default:{}
    }
})

module.exports =mongoose.model('User',UserSchema)