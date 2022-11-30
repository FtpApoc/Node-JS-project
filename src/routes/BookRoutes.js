const express = require('express');
const BookRouter = express.Router();

const books = [
  {
    title: 'sense and sensibility',
    genre: 'fiction',
    author: 'Jane Austen',
    read: false
  },
  {
    title: 'the sign of the four',
    genre: 'mystery',
    author: 'Sir Artur Conan Doyle',
    read: true
  }
]


BookRouter.route('/')
  .get((req, res) => {
    res.render('books',
      {
        nav: [
          {link:'/books',title:'Books'},
          {link:'/authors',title:'Authors'}
        ],
        title:'Book List',
        books
      });
  });

  module.exports = BookRouter
