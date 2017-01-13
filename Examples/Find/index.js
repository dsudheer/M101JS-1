const {MongoClient} = require('mongodb');
const assert = require('assert');

let connVideo = "mongodb://localhost:27017/video";

MongoClient.connect(connVideo, function(err, db) {
  assert.equal(null, err);
  console.log('Sucessfully connected to server');

  // Find some documents in our collection
  db.collection('movies').find({}).toArray(function(err, docs) {

      //Print the title of each document in the result set
      docs.forEach(function(doc){
        console.log(doc.title);
      });

      db.close();
  });

    console.log("Called find()");
});
