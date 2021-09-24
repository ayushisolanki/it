const chai= require('chai');
const chaiHttp= require('chai-http');
const server= require('../app');
const should = require('should');
chai.use(chaiHttp);
chai.should();

describe('books API', function(){
    //Test GET route
    describe("GET route ", function(){
        it("It should get all the books", function(done){
            chai.request(server)
                .get("/getBooks")
                
                .end(function(err, res){
                    console.log(res.body);
                    res.body.length.should.be.eq(3);
                done();
                });
        });
    });



    //Test GET by ID route
    describe("GET route", function(){
        it("It should get a book by ID", function(done){
            var id=1;
            chai.request(server)
                .get("/getBooks/"+id)
                .end(function(err, res){
                    console.log(res.body);
                    // console.log(res);
                    // res.body.length.should.be.eq(1);
                done();
                });
        });

    });
    
    //Test POST route
    describe("POST route", function(){
        it("It should POST a new book ", function(done){
            const book={
                id:4,
                name:"The Secret",
                author:"Rhonda Byrne"
            }
            chai.request(server)
                .post("/getBooks")
                .send(book)
                .end(function(err, res){
                    console.log(res.body);
                    // console.log(res.length);
                    // res.body.length.should.be.eq(4);
                done();
                });
        });

    });
    //Test GET route
    describe("GET route ", function(){
        it("It should get all the books", function(done){
            chai.request(server)
                .get("/getBooks")
                
                .end(function(err, res){
                    console.log(res.body);
                    res.body.length.should.be.eq(3);
                done();
                });
        });
});

});