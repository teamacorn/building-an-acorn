const express = require('express');
const cors = require('cors');
const API_KEY = require('./config/config.js')


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))

app.listen(port, (error) => {
  if (error) {
    console.log('I couldn\'t connect to the server :(:', error);
  } else {
    console.log('I connected to the server :)');
  }
})