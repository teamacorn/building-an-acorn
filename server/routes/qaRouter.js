const router = require('express').Router();
const axios  = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx/qa/questions';

const API_KEY = require('./../config');
var config = {
  headers : {
    'Authorization': API_KEY
  }
};

// list questions
// test: localhost:3000/qa/questions/productId/38323?page=1&count=5
router.get('/questions/productId/:product_id', (req, res) => {
  let params = {
    product_id: req.params.product_id,
    page: req.query.page || '1',  // default value
    count: req.query.count || '5' // default value
  };

  axios.get(url, {...config, params: params})
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.status(400).send();
    })
});


// answers list
// test: localhost:3000/qa/questions/542812/answers
router.get('/questions/:question_id/answers', (req, res) => {
  let params = {
    page: req.query.page || '1',
    count: req.query.count || '5'
  }

  axios.get(`${url}/${req.params.question_id}/answers`, {...config, params: params})
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      console.error(err);
      res.status(400).send();
    })
});

// add a question
// test: {"body": "literally, whats been on your mind", "name": "alex", "email": "test@test.com", "product_id": 38323}
router.post('/questions', (req, res) => {
  let params = {
    body: req.body.body || '',
    name: req.body.name || '',
    email: req.body.email || '',
    product_id: parseInt(req.body.product_id)
  }
  console.log(params);
  axios.post(url, params, config)
    .then(response => {
      res.status(201).send();
    })
    .catch(err => {
      console.error(err);
      res.status(400).send();
    });
});

// add an answer
// test: localhost: 3000/qa/questions/542812/answers
// {"body": "thanks for asking. good question.", "name": "me, myself, and I", "email": "test@test.com", "photos": ["https://assets.entrepreneur.com/content/3x2/2000/20150824181921-meditate-yoga-relax-calm-zen.jpeg?auto=webp&quality=95&crop=16:9&width=675"]}
router.post('/questions/:question_id/answers', (req, res) => {
  let params = {
    body: req.body.body || '',
    name: req.body.name || '',
    email: req.body.email || '',
    photos: req.body.photos || [] 
  }
  axios.post(`${url}/${req.params.question_id}/answers`, params, config)
    .then(response => {
      res.status(200).send();
    })
    .catch(err => {
      console.error(err);
      res.status(400).send();
    })
});

// mark question as helpful
// test: localhost:3000/qa/questions/542812/helpful
router.put('/questions/:question_id/helpful', (req, res) => {
  //axios.put(`${url}/${parseInt(req.params.question_id)}/helpful`, config)
  axios({...config, method: 'PUT', url: `${url}/${parseInt(req.params.question_id)}/helpful`})
    .then(response => {
      res.status(204).send();
    })
    .catch(err => {
      //console.error(err);
      res.status(400).send();
    })
});

// report question
// test: localhost:3000/qa/questions/542813/report
router.put('/questions/:question_id/report', (req, res) => {
  axios({...config, method: 'PUT', url: `${url}/${parseInt(req.params.question_id)}/report`})
    .then(response => {
      res.status(204).send();
    })
    .catch(err => {
      //console.error(err);
      res.status(400).send();
    })
});

// make answer as helpful
router.put('/answers/:answer_id/helpful', (req, res) => {
  axios({...config, method: 'PUT', url: `${url}/${parseInt(req.params.answer_id)}/helpful`})
    .then(response => {
      res.status(204).send();
    })
    .catch(err => {
      //console.error(err);
      res.status(400).send();
    })
});

// report answer
router.put('/answers/:answer_id/report', (req, res) => {
  axios({...config, method: 'PUT', url: `${url}/${parseInt(req.params.answer_id)}/report`})
    .then(response => {
      res.status(204).send();
    })
    .catch(err => {
      //console.error(err);
      res.status(400).send();
    })
});


module.exports = router;