const express = require ('express');
const adminRouter = express.Router();

adminRouter.route('/')
  .get((req,res) => {
    res.send('inserting books');
  });

  module.exports = adminRouter;
