const express = require('express');
const BookRouter = express.Router();

const books = [
  {
    title: 'Sense and Sensibility',
    genre: 'fiction',
    author: 'Jane Austen',
    read: false
  },
  {
    title: 'The Sign of the Four',
    genre: 'mystery',
    author: 'Sir Artur Conan Doyle',
    read: true
  }
]


BookRouter.route('/')
  .get((req, res) => {
    res.render('bookListView',
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

BookRouter.route('/:id')
  .get((req,res) => {
    const id = req.params.id;
    res.render(
      'bookView',
      {
          nav: [
            {link:'/books', title:'Books'},
            {link:'/authors', title:'Authors'}
          ],
          title: 'Book',
          book: books[id]
    });
  });
