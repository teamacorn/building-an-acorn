const express = require(express);
const cors = require(cors);
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())
app.use(express.static())

app.listen(port, (error) => {
  if (error) {
    console.log('I couldn\'t connect to the server :(:', error);
  } else {
    console.log('I connected to the server :)');
  }
})