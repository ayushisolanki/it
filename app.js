const express= require('express');
const { request } = require('http');
const bodyParser= require('body-parser');
const app= express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.get("/", function(req, res){
    res.send("server up");
});

//creating an object of books
const books=[
    {
        id:1,
        name:"Harry Potter",
        author: "JK Rowling"
    },  
    {
        id:2,
        name: "The Alchemist",
        author: "Paulo Coelho"
    },
    {
        id:3,
        name: "A Game of Thrones",
        author: "George Martin"
    }
];


app.get("/getBooks", function(req, res){
    res.status(200).send(books);
});

app.get("/getBooks/:id", function(req, res){
    const id= req.params.id;
    const book=  books.find(book => book.id == parseInt(id));
    if(!book) {
        res.send("ID not found");
    }
    res.status(200).send(book);
});

app.post("/getBook", function(req, res){
   console.log("=====> req",req);
    const book= {
        id: books.length +1,
        name: req.body.name,
        author:  req.body.author
    }
    books.push(book);
    res.status(200).send(books);
});


app.listen(3000, function(){
    console.log("server running on port 3000");
}); 

module.exports=app