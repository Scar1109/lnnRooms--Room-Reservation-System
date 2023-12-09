const express = require('express');
const path = require("path");

const app = express();

const dbconfig = require('./db')

const port = process.env.PORT || 5000;

app.listen(port,() => console.log(`Server running on port ${port} with nodemon`));