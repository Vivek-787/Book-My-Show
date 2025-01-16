const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

//user schema
const userSchema = new Schema ({ 
    email:{ type: String, unique: true },
    password:String,
    mobileNo:Number,
    name:String
})

//movie
const movieSchema = new Schema({
    title:String,
    desc:String,
    imageUrl:String,
    lang:String
})

//theatre
const theatreSchema = new Schema({
    name:String,
    city:String
})

//showTime
const showtimeSchema = new Schema({
    movieId: ObjectId,
    theaterId: ObjectId ,
    startTime: {type:Date} ,
    price: Number
  });

//booking
const bookingSchema = new Schema({
    userId:ObjectId,
    showtimeId:ObjectId,
    AvailableTicket :Number,
    noOfTicToBook :Number,
    totalPrice:Number
})

// Seats Schema
const seatSchema = new Schema({
    showtimeId: ObjectId,
    seatNumber: String,
    isBooked: Boolean
  });
  
  
const SeatModel = mongoose.model('Seat', seatSchema);
const userModel = mongoose.model("user", userSchema);
const theatreModel = mongoose.model("theatre", theatreSchema);
const showTimeModel = mongoose.model("showTime", showtimeSchema);
const movieModel = mongoose.model("movie", movieSchema);
const bookingModel = mongoose.model("booking", bookingSchema);


module.exports = {
    userModel,
    theatreModel,
    movieModel,
    bookingModel,
    SeatModel,
    showTimeModel
}