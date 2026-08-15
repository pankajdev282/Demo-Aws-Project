const express = require("express")
const router = express.Router()
// const app = express()
const {loginController , signupController} = require('../controllers/authController')

router.post('/login',loginController)
router.post('/register',signupController)

module.exports  = router