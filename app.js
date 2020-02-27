const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//import Routes
const listingsRoute = require('./routes/listings');

app.use('/listings', listingsRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, 
{ useNewUrlParser: true },  
() => console.log('connected to db'))

//listen to server
app.listen(3000); 