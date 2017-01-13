const express = require('express');

const app = express();
const port = 8000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res) => {
  res.sendStatus(404);
});

var server = app.listen(port, () => {
  // Returns the bound address port
  let port = server.address().port;
  console.log(`Express server listening on port ${port}`);
});
