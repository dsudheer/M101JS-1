const express = require('express');
const {nunjucks} = require('consolidate');

const app = express();
const port = 8000;


app.engine('html', nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('hello', {'name': 'World!'});
});

app.use((req, res) => {
  res.sendStatus(404);
});

var server = app.listen(port, () => {
  // Returns the bound address port
  let port = server.address().port;
  console.log(`Express server listening on port ${port}`);
});
