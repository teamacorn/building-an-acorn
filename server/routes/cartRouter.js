const router = require('express').Router();
const axios  = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/cart';

const API_KEY = require('./../config');
var config = {
  headers : {
    'Authorization': API_KEY
  }
};

router.get('/', (req, res) => {
  axios.get(`${url}`, config)
  .then(cart => {
    res.status(200).send(cart.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})

router.post('/', (req, res) => {
  axios.post(`${url}`, {sku_id: req.body.sku_id}, config)
  .then(addToCart => {
    res.status(201).send()
  })
  .catch(error => {
    console.log(error)
    res.status(400).send()
  })
})

module.exports = router;