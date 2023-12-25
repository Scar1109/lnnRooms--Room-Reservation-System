const express = require('express');
const path = require("path");
const roomsRoute = require('./routes/roomsRoute');

const app = express();

const dbConfig = require('./db')

app.use('/api/rooms',roomsRoute);

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port} with nodemon`));
