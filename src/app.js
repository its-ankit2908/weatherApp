const express = require('express');
const app = new express();
const port = process.env.port || 8000
const path = require('path');
const hbs = require('hbs');

// for static path
const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

app.set("view engine","hbs");
app.use(express.static(staticPath));
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

// routing
app.get('/',(req,res)=>{
  res.render('home');
});

app.get('/about',(req,res)=>{
  res.render('about');
});
  

app.get('/weather',(req,res)=>{
  res.render('weather');
});


app.get('*',(req,res)=>{
  res.render('error');
});

app.listen(port,()=>{console.log(`listening to the port no. ${port}`)})
