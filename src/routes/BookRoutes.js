const express = require('express');
const BookRouter = express.Router();

BookRouter.route('/')
  .get((req,res) =>{
    res.render('books')
  });
  module.exports = BookRouter
