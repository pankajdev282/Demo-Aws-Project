
const authMiddleware = (req,res ,next)=>{
    // console.log("req.body" , req.body)
    next()
}

module.exports = {authMiddleware}