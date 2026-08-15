const User = require('./Users')
const mongoose = require('mongoose')

const UserPasswordSchema = mongoose.Schema({
    user : {
        type:mongoose.Schema.Types.ObjectId,
        ref :User
    },
    password:String
})

module.exports = mongoose.model('UserPassword' ,UserPasswordSchema) 

