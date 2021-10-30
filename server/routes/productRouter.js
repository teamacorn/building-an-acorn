const router = require('express').Router();
const axios  = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/products';

const API_KEY = require('./../config');
var config = {
  headers : {
    'Authorization': API_KEY
  }
};

router.get('/', (req, res) => {
  axios.get(`${url}`, config)
  .then(products => {
    res.status(200).send(products.data)
  })
  .catch(error => {
    console.error(error);
    res.status(400).send()
  })
})

router.get('/:product_id', (req, res) => {
  axios.get(`${url}/${req.params.product_id}`, config)
  .then(product => {
    res.status(200).send(product.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})

router.get('/:product_id/styles', (req, res) => {
  axios.get(`${url}/${req.params.product_id}/styles`, config)
  .then(productStyles => {
    res.status(200).send(productStyles.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})

router.get('/:product_id/related', (req, res) => {
  axios.get(`${url}/${req.params.product_id}/related`, config)
  .then(relatedProducts => {
    res.status(200).send(relatedProducts.data)
  })
  .catch(error => {
    res.status(400).send()
  })
})


module.exports = router;