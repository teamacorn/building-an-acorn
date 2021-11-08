const express = require('express');
const cors = require('cors');
const axios = require('axios');

const API_KEY = require('./config.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-atx';
const config = {
  headers : {
    'Authorization': API_KEY
  }
}

const app = express();
const port = 3000;

// middlewares
app.use(cors());
app.use(express.json())
app.use(express.static(__dirname + '/../client/dist'))

// import routers
const qaRouters = require('./routes/qaRouter');
const interactionsRouter = require('./routes/interactionsRouter');
const productRouters = require('./routes/productRouter');
const cartRouters = require('./routes/cartRouter')

// use routers
app.use('/qa', qaRouters);
app.use('/interactions', interactionsRouter);
app.use('/products', productRouters);
app.use('/cart', cartRouters);


app.get('/reviews/:product_id', (req, res) => {
  axios.get(`${url}/reviews/?product_id=${req.params.product_id}`, {
    headers: {
      'Authorization':
      API_KEY
    },
    params: {
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
      product_id: req.query.product_id
  }
})
  .then(reviews => {
    console.log(reviews)
    res.status(200).send(reviews.data)
  })
  .catch(error => {
    console.error(error);
    res.status(400).send()
  })
})

app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`${url}/reviews/meta/?product_id=${req.params.product_id}`, config)
  .then(reviewMetaData => {
    console.log(reviewMetaData);
    res.status(200).send(reviewMetaData.data);
  })
  .catch(error => {
    console.log(error);
    res.status(400).send()
  })
})

app.post('/reviews', (req, res) => {
  axios.post(`${url}/reviews/`, {
    headers: {
      'Authorization': API_KEY
    },
    params: {
      product_id: req.body.product_id,
      rating: req.body.rating,
      summary: req.body.summary || '',
      body: req.body.body || '',
      recommend: req.body.recommend,
      name: req.body.name || '',
      email: req.body.email || '',
      photos: req.body.photos,
      characteristics: req.body.characteristics
    }
  })
    .then((response) => {
      console.log(response);
      res.status(201).send();
    })
    .catch((error) => {
      console.log(error);
      res.status(400).send(error);
    });
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  axios({...config, method: 'PUT', url: `${url}/reviews/${req.params.review_id}/helpful`})
    .then(response => {
      res.status(204).send();
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send();
    })
});


app.put('/reviews/:review_id/report', (req, res) => {
  axios({...config, method: 'PUT', url: `${url}/reviews/${req.params.review_id}/report`})
    .then(response => {
      res.status(204).send();
    })
    .catch((error) => {
      console.error(error);
      res.status(400).send();
    })
});


//------------------------------------------------------------

app.listen(port, (error) => {
  if (error) {
    console.log('I couldn\'t connect to the server :(:', error);
  } else {
    console.log('I connected to the server :)');
  }
})