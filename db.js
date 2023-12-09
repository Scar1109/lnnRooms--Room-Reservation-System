const  mongoose  = require("mongoose");

var mongoURL = 'mongodb+srv://kaveendinethma:tPe8c9MonohetNgy@cluster1109.gdgbtfl.mongodb.net/InnRooms'

mongoose.connect(mongoURL,{userUnifiedTopology: true,useNewUrlParser: true})

var connection = mongoose.connection;

connection.on('error',()=>{
    console.log('MongoDB connection failed')
})

connection.on('connected',()=>{
    console.log('MongoDB connection success')
})

module.exports = mongoose;
