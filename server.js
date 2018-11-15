var express = require('express');
var app = express();
var port = 3000;

app.listen(port, function(){
    console.log('Express app listenting on port ' + port);
});

app.get('/', function(request, response){
    response.send("Get request received at '/'");
});

var quotes = [
{
    id: 1,
    quote: "A room without books is like a body without a soul.",
    author: "Cicero",
    year: "43 BCE",
},
{
    id: 2,
    quote: "An unexamined life is not worth living.",
    author: "Socrates",
    year: "399 BCE",
},
{
    id: 3,
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    year: "322 BCE",
},
];

app.get('/', function(req, res){
    console.log("Get a list of all quotes as json");
    res.json(quotes);
});

app.get('/quotes', function(req, res){
    console.log("Get a list of all quotes as json");
    if(req.query.year){
        res.send("Return a list of quotes from the year: " + req.query.year);
    }
    else{
        res.json(quotes);
    }
});

app.get('/quotes/:id', function(req, res){
    console.log("return quote with the ID: " + req.params.id);
    res.send("Return quote with the ID: " + req.params.id);
});