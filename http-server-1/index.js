const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = 3000 ;
app.use(bodyparser.json())

app.post('/', function(req, res){
  res.send('Hello World !')
});

app.listen(3000 , () => {
  console.log(
    "lidy++++"
  )
});