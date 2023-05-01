const express = require('express');
const mongoose = require('mongoose');

//defining schema
const menSchema = new mongoose.Schema({
  ranking: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },
  dob: {
    type: Date,
    trim: true,
    required: true,
  },
  country: {
    type: String,
    trim: true,
    required: true,
  },
  score: {
    type: Number,
    trim: true,
    required: true,
  },
  event: {
    type: String,

    default: '100m',
  },
});

//defining the model( new collection)
const MensRanking = new mongoose.model('MenRanking', menSchema);

module.exports = MensRanking;
