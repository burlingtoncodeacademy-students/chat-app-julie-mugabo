require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");


const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

app.use(express.static(staticDir));

app.use(express.urlencoded({extended: true});

// setup mongoose
const atlasDbUrl = "mongodb://localhost:27017"
mongoose.connect(altasDbUrl,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection


// set error message
db.on('error', console.error.bind(console, 'conection error'))







app.listen(port, () => {
  console.log('listening on port: ' + port) 
})
