const express = require ('express');
const adminRouter = express.Router();

const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost27017';
const dbname = 'LibraryApp';

adminRouter.route('/')
  .get((req,res) => {
    res.send('inserting books');
  });

  module.exports = adminRouter;
