const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect( "mongodb+srv://pankajdev282_db_user:1ET9YDRS7ddvvMiF@cluster0.e9p9rv4.mongodb.net" );
    console.log("database connected succesfully");
  } catch (error) {
    throw Error("Database connection failed", error
    );
  }
};

module.exports = connectDB;
