const express = require('express');
//now we can access all the properties and methods of express using app variable
const app = express();

//to get router we need to import it
const router = require('../src/routers/getMen');

const port = process.env.PORT || 8000;

//to connect the database to api file and run the both file one after another aat the same time
require('./db/conn');

//to use router in express we need to register it
app.use(router);

//to pass the json data
app.use(express.json());

//listening and running the server server at port no.8000
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`listening and running the server server at port: ${port}`);
  }
});
