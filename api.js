const express = require('express');
const app = express();
const http = require('http');
const request = require('request');
const list = require('list-contents');
app.use(express.static('public'));
app.listen(8000)
app.get('/', (request, response) => { 
list("./cat",(o)=>{
  if(o.error) throw o.error;
var cat = o.files
let random = Math.floor((Math.random() * cat.length));
const json = { kedi: `https://domain.com/${cat[random]}`}
response.json(json)
});
})
