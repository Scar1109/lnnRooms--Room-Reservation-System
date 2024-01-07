const express = require('express');
const roomsRoute = require('./routes/roomsRoute');
const usersRoute = require('./routes/usersRoute');
const bookingRoute = require('./routes/bookingRoute');

const app = express();

app.use(express.json());

const dbConfig = require('./db')

app.use('/api/rooms',roomsRoute);
app.use('/api/users',usersRoute);
app.use('/api/bookings',bookingRoute);

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port} with nodemon`));
