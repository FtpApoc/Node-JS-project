const express = require ('express');
//intitilization of mongodbClient
const mongoClient = require('mongodb').MongoClient;
//additionally doing debug with respect to specified area, adminRoutes)
const debug = require('debug')('app:adminRoutes');
//initializing router for adminRouter
const adminRouter = express.Router();

//initazlizing the route to house stacked functions for adminRouter
adminRouter.route('/')
  .get((req,res) => {
    //const the URLs for where mongo is stored and what the DB is called
    const url = 'mongodb://localhost27017';
    const dbname = 'LibraryApp';

    //start of async function
    (async function mongo(){
      //initialized
      let client;
      try{
        //async call to await connect
        client = await mongoClient.connect(url);
        //confirm connection in debug
        debug('connection to mongoDB server');
      }
      //catch part of try...catch
      catch(err){
        debug(err)
      }
    })()
    //HTML?
    res.send('inserting books');
  });

  //i still have no clue how tf Module.exports works.
  module.exports = adminRouter;
