const express = require('express');
const app= express();
const router= require('./router');
const articles=require('./data/articles.json');
app.set('view engine', 'ejs');
app.set ('views', 'views');
app.use(express.static(__dirname+'/static'));
app.locals.articles=articles;

app.use(router);

app.listen((3000), () =>{ console.log('serveur en écoute sur le port 3000')});