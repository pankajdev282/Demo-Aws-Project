const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect( "mongodb://localhost:27017/aakruti" );
    console.log("database connected succesfully");
  } catch (error) {
    throw Error("Database connection failed");
  }
};

module.exports = connectDB;
