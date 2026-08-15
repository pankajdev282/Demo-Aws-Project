const express = require('express')
const connectDB =require("./src/config/db")
const getAllUser = require("./src/controllers/getAllUsers")
const authRoutes = require("./src/routes/authRoutes")
const invoiceRoutes = require("./src/routes/invoiceRoutes")
const app = express()

connectDB()
app.use(express.json())
// app.get('/',getAllUser)

app.use('/auth',authRoutes)
app.use('/invoice',invoiceRoutes)

app.listen(8000, ()=>{
    console.log("Server Running on 8000")
})