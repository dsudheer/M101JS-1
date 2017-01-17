const express = require('express');
const bodyParser = require('body-parser');
const {swig} = require('consolidate');

const app = express();

app.engine('html', swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser());

// Handler for internal server errors
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.status(500);
  res.render('error_template', {error: err});
};

app.use(errorHandler);


app.get('/', (req, res, next) => {
  res.render('fruits', {'fruits': ['apple', 'orange', 'banana', 'peach']});
});

app.post('/favorite_fruit', (req, res, next) => {
  var favorite = req.body.fruit;
  if (typeof favorite == 'undefined') {
    next(Error('Please choose a fruit!'));
  }else {
    res.send('Your favourite fruit is ' + favorite);
  }
});

app.listen(3000);
console.log('Express server running on port 3000');
