const express = require('express');
const cors = require('cors');
const axios = require('axios');
const API_KEY = require('./config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx';
const config = {
  headers : {
    'Authorization':
    API_KEY
  }
}

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))

app.get('/products', (req, res) => {
  axios.get(`${url}/products`, config)
  .then(products => {
    res.status(200).send(products.data)
  })
  .catch(error => {
    console.error(error);
    res.status(400).send()
  })
})

app.get('/products/:product_id', (req, res) => {
  axios.get(`${url}/products/${req.params.product_id}`, {'Authorization': API_KEY})
  .then(product => {
    res.status(200).send(product.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})

app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products', {'Authorization': API_KEY})
  .then(products => {
    res.status(200).send(products.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})

app.get('/products/:product_id/related')


app.listen(port, (error) => {
  if (error) {
    console.log('I couldn\'t connect to the server :(:', error);
  } else {
    console.log('I connected to the server :)');
  }
})