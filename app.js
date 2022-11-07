const express = require('express')();
const path = require('path');
const chalk = require('chalk');
const app = express;

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/views/index.html'));
})

app.listen(3000,function(){
  console.log('listening on port ' + chalk.green('3000'));
})