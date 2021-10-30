const router = require('express').Router();
const axios  = require('axios');
const e = require('express');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/interactions';

const API_KEY = require('./../config');
var config = {
  headers : {
    'Authorization': API_KEY
  }
};

router.post('/', (req, res) => {
  let currentdate = new Date(); 
  let datetime = currentdate.getFullYear() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getDate() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

  let params = {
    element: req.query.element || '',
    widget: req.query.element || '',
    time: datetime
  };
  if (params.element === '' || params.widget === '') {
    res.status(422).send(); //invalid param
  } else {
    axios.post(url, params, config)
      .then(response => {
        res.status(201).send();
      })
      .catch(err => {
        console.error(err)
        res.status(422).send()
      })
  }
});


module.exports = router;