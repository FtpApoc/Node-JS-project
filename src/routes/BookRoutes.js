const express = require('express');
const BookRouter = express.Router();

// const books = [
//   {
//     title: 'sense and sensibility',
//     genre: 'fiction',
//     author: 'Jane Austen',
//     read: false
//   },
//   {
//     title: 'the sign of the four',
//     genre: 'mystery',
//     author: 'Sir Artur Conan Doyle',
//     read: true
//   }
// ]

const nav = [
    {link: '/books', title: 'Books'},
    {link: '/authors', title: 'Authors'}
];

BookRouter.get('/', function (req, res) {
    res.render('index', {
        nav,
        title: 'Library'
    });
});

BookRouter.get('/books', function (req, res) {
    res.render('books', {
        nav,
        title: 'Books'
    });
});


module.exports = BookRouter
