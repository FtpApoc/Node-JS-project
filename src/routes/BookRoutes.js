const express = require('express');
//instance of a router function
const BookRouter = express.Router();

//JSON data for books[0,1]
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

//setting up .route() to stack functions within scope
BookRouter.route('/')
  .get((req, res) => {
    res.render('bookListView',
      {
        //organizing nav to route correctly
        nav: [
          {link:'/books',title:'Books'},
          {link:'/authors',title:'Authors'}
        ],
        //appropriate title
        title:'Book List',
        //calling JSON dict of books
        books
      });
  });

  //no clue
  module.exports = BookRouter

//setting up routing for within ID scope to stack functions
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
