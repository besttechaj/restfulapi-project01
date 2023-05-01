const mongoose = require('mongoose');

//mongoose.connect will return a promise hence we are using the .then().catch() to deal with it.
mongoose
  .connect('mongodb://localhost:27017/olympics')
  .then(() => {
    console.log(
      `connection is successfully established with database and a new database has been created`
    );
  })
  .catch((err) => {
    console.log(`no connection`);
    console.log(err);
  });
