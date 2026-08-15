const User = require("../models/Users");
const UserPassword = require("../models/UserPassword");
const {comparePassword, encryptPassword} = require("../utils/passwordEncryption")
const jwt = require('jsonwebtoken')

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password){
        res.status(400).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    const user = await User.findOne({ email: email });

    if (!user) {
     return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }
    
    const passwordDb = await UserPassword.findOne({user:user._id})

    const isPasswordCorrect = await comparePassword(password , passwordDb.password)
    console.log("12")

    if(!isPasswordCorrect){
      return res.status(404).json({
        success: false,
        message: "Invalid Credentials",
      });
    }
    console.log("1")
    const token = jwt.sign({user:user._id.toString()} ,'java123',{
      expiresIn:'1d'
    })
    console.log("2")
    return res.status(200).json({
        success: true,
        token,
      });
    
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Invalid Credentials",
      error:err.message
    });
  }
};

const signupController = async(req, res)=>{
    try{

        console.log(req.body)
        const {email , password, firstName ,lastName} = req.body
        // const 
        const exstingUser = await User.findOne({email:email})
        if(exstingUser){
          return res.status(404).json({
            success:false,
            error:"email is already registered"
          })
        }
        console.log("called" , 123)
        const newUser = new User({
          firstName,
          lastName,
          email
        })
        // console.log("called" , 345)
        
        const adedUser= await newUser.save()
        // console.log("adedUser" ,adedUser )
        const encryptedPassword = await encryptPassword(password)
        const newPassword = new UserPassword({
          user:adedUser._id,
          password:encryptedPassword
        })
        await newPassword.save()
        return res.status(201).json({
          success:true,
          message:"User is created Successfully "
        })
    }catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error:err.message
    });
  }
}

module.exports ={loginController, signupController}