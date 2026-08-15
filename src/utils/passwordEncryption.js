const bcrypt = require("bcrypt")
const saltRounds = 10 

const encryptPassword = async (password)=>{
    return await bcrypt.hash(password, 10)
}

const comparePassword = async (newPassword , hash)=>{
    console.log("hash" , hash , "newPassword" , newPassword)
    return await bcrypt.compare(newPassword , hash)
}

module.exports = {encryptPassword , comparePassword}