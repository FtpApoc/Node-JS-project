const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

//instance the app through express
const app = express();
//setting port as from the package.json file, or if that fails to 3000
const port = process.env.PORT || 3000;
app.use(morgan('tiny'))

//const bookrouter from the SRC route, where it is defined
const BookRouter = require('./src/routes/BookRoutes');
//mounts The bookrouter middleware to the '/books' path
app.use('/books',BookRouter);

//admin routing the same, const'd from definition in adminRoutes
const adminRouter = require('./src/routes/adminRoutes')
//mounts adminRouter middleware to the '/admin' path
app.use('/admin',adminRouter)

//this is setting EJS to control the view handling of the program
app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')))
//setting the location of views (ejs pages)
app.set('views', './src/views');
//setting ejs as view engine
app.set('view engine','ejs');

//rendering of index from main page
app.get('/',function(req,res) {
  res.render('index',
    {
        //nav array to show books and titles
        nav: [
          {link: '/books', title: 'Books'},
          {link: '/authors', title: 'Authors'}
        ],
        //sets title of page
        title: 'Library'
      },
  );
});


app.listen(port,function(){
  debug('listening on port ' + chalk.green(port));
})
