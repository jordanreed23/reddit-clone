const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const hbs = require('hbs');
const bodyParser = require('body-parser');
const db = require('./db/query');


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
  res.render('index');
});

app.get('/hello', (req,res) => {
  res.send('index');
});

app.listen(port, (req,res) => {
  console.log("You're doing wonderful! :)");
});
