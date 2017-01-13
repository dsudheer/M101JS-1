const express = require('express');
const {nunjucks} = require('consolidate');
const {MongoClient} = require('mongodb');
const assert = require('assert');

const conn = 'mongodb://localhost:27017/video';
const port = 8000;

const app = express();

// Template engine settings
app.engine('html', nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


MongoClient.connect(conn, (err, db) => {
  assert.equal(null,err);
  console.log('Sucessfully connected to DB!');

  app.get('/', (req, res) => {

    db.collection('movies').find({}).toArray( (err, docs) => {
        res.render('movies', { 'movies': docs });
    });
  });

  app.use((req, res) => {
    res.sendStatus(404);
  });

  var server = app.listen(port, () => {
    let port = server.address().port;
    console.log(`Running at http://localhost:${port}`);
  });

});
