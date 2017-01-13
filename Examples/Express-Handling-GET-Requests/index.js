const express = require('express');
const {swig} = require('consolidate');

const app = express();
const port = 4000;

app.engine('html', swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

// Handler for internal server errors
const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  console.error(err.stack);
  res.status(500);
  res.render('err_template', { error: err });
};

app.use(errorHandler);

app.get('/:name', (req, res, next) => {
  let name = req.params.name;
  let getvar1 = req.query.getvar1;
  let getvar2 = req.query.getvar2;

  res.render('hello', {name, getvar1, getvar2});
});

app.listen(port);
console.log(`Express server listening on port http://localhost:${port}`);
