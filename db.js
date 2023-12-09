const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery', true);

var mongoURL = 'mongodb+srv://Scar1109:Scar1234@cluster1109.gdgbtfl.mongodb.net/InnRooms'

mongoose.connect(process.env.MONGODB_URI || mongoURL ,{useUnifiedTopology : true ,useNewUrlParser : true ,})



var connection = mongoose.connection

connection.on('error', ()=> {
    console.log('MongDB Connection Failed')
})

connection.on('connected' , ()=>{
    console.log('MongoDB Connection Successful')
})

module.exports  = mongoose