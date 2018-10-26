const express = require('express');
const path= require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-Parser');

mongoose.connect('mongodb://localhost/nodekb');
let db=mongoose.Connection;


//Check connection
// db.once('open',function(){
//     console.log('Connected to MongoDb');
// }); 

// Check for DB errors
// db.on('error',function(err){
//     console.log(err);
// });

// init App
const app= express();

//Bring in Models
let Article = require('./models/article');


//Load View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');

//bodyParser Middleware 
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//SetPublicFolder
app.use(express.static(path.join(__dirname,'public')))

// Home Route
app.get('/',function(req,res){
    //res.send('Hello World');
    // let articles=[
    //     {
    //         id:1,
    //         title:'Article one',
    //         author:'sky',
    //         body:'This is article one'
    //     },

    //     {
    //         id:2,
    //         title:'Article Two',
    //         author:'pav',
    //         body:'This is article one'
    //     },
    //     {
    //         id:3,
    //         title:'Article Three',
    //         author:'Lol',
    //         body:'This is article Three'
    //     }

    // ];

    Article.find({},function(err,articles){
        
        if(err){
            console.log(err);
        }else{
            res.render('index',{
                title:'Articles',
                articles:articles
            });
        }
    });
    
});

//AddRoute
app.get('/articles/add',function(req,res){
    res.render('add_article',{
        title:'Articles Add'
    });
});

//Add Submit POST Route

app.post('/articles/add',function(req,res){

    let article = new Article();
    article.title=req.body.title;
    article.author=req.body.author;
    article.body=req.body.body;

    article.save(function(err){
        if(err){
            console.log(err);
            return;
        }else{

            res.redirect('/');
        }
    })

    //console.log(req.body.title);
    //return;
});

// Start Server
app.listen(3000,function(){
    console.log('server is liste o port 3000');
});