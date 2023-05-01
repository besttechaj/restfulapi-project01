const express = require('express');

//importing the collection file for further process
const MensRanking = require('../models/mens');

//setting the  Express's Router
const router = new express.Router();

try {
  //creating new user
  //handling api POST Request using async await
  //since it will return me promise ,handling it with the help of async await
  //to get the error we are putting async await in try n catch block

  router.post('/mens', async (req, res) => {
    try {
      const addingMensRecord = new MensRanking(req.body);
      console.log(req.body);
      //.save() wil return promise
      const insertMens = await addingMensRecord.save();
      //sending data-> status code 201
      res.status(201).send(insertMens);
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  });

  //fetching all the data from the database using GET method and sort the ranking
  router.get('/mens', async (req, res) => {
    try {
      const fetchingMensRecord = await MensRanking.find().sort({ ranking: 1 });

      //sending data-> status code 201
      res.status(200).send(fetchingMensRecord);
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  });

  //FETCH the specified user using id
  router.get('/mens/:id', async (req, res) => {
    try {
      //get the passed id from the url
      const given_id = req.params.id;
      //pass the id to the query.. if there is a match with the specified id then it will return the data else a error will be thrown
      const fetchingMensRecordById = await MensRanking.findById({
        _id: given_id,
      });

      //sending data-> status code 201
      res.status(200).send(fetchingMensRecordById);
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  });

  //FETCH the specified user using id and update its value using PATCH Request
  router.patch('/mens/:id', async (req, res) => {
    try {
      //get the passed id from the url
      const given_id = req.params.id;
      //pass the id to the query.. if there is a match with the specified id then it will return the data else a error will be thrown
      const fetchingMensRecordById = await MensRanking.findByIdAndUpdate(
        {
          _id: given_id,
        },
        req.body,
        { new: true }
      );

      //sending data-> status code 201
      res.send(fetchingMensRecordById);
    } catch (e) {
      res.status(500).send(e);
      console.log(e);
    }
  });

  //Delete the specified user's id using DELETE Request

  router.delete('/mens/:id', async (req, res) => {
    try {
      //get the passed id from the url
      const given_id = req.params.id;
      //pass the id to the query.. if there is a match with the specified id then it will return the data else a error will be thrown
      const fetchingMensRecordById = await MensRanking.findByIdAndDelete(
        {
          _id: given_id,
        },

        { new: true }
      );

      //sending data-> status code 201
      res.send(fetchingMensRecordById);
    } catch (e) {
      res.status(500).send(e);
      console.log(e);
    }
  });
} catch (error) {
  console.log(error);
}

//need to export router so we can use it in app.js file
module.exports = router;
