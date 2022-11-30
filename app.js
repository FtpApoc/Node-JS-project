const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');


const app = express();
const port = process.env.PORT || 3000;
app.use(morgan('tiny'))



app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
app.set('views', './src/views');
app.set('view engine','ejs');

const BookRouter = require('./src/routes/BookRoutes');
app.use('/books',BookRouter);

app.get('/',function(req,res) {
  res.render('index',
    {
        nav: [
          {link: '/books', title: 'Books'},
          {link: '/authors', title: 'Authors'}
        ],
        title: 'library'
      }
  );
});

app.listen(port,function(){
  debug('listening on port ' + chalk.green(port));
})
