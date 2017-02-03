const should = require("chai").should();
const assert = require ("chai").assert;
const supertest = require("supertest");
const app = require("../bin/www");

var url = supertest("http://localhost:8080/restaurant");

//post

describe("Testing the restaurant route", function(err){
  it("should handle the request", function(done){
    url
        .get("/")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          res.text.should.equal("response from user GET route check");
          done();
        });
  });
  it("should not match", function(done){
      url
          .get("/")
          .expect(200)
          .end(function(err,res){
            if (err) {
  				        throw err;
  			    }
            res.text.should.not.equal("response");
            done();
          });
    });
});

//post
  describe("Testing POST route", function(err){
   it("should handle and send the computed info", function(done){
     url
         .post("/add")
         .send({ name: "yuva", value: "32" })
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           let myjson = JSON.parse(res.text);
           (myjson.name).should.equal('yuva');
           done();
         });
      });
    it("should handle correct name value", function(done){
      url
          .post("/add")
          .send({ id : "12"})
          .expect(200)
          .end(function(err,res){
            should.not.exist(err);
            res.text.should.not.equal('{"name":"yuva"}');
            done();
          });
       });
     it("should not be empty", function(done){
       url
           .post("/add")
           .send({})
           .expect(200)
           .end(function(err,res){
             should.not.exist(err);
             res.text.should.equal('pass a json');
             done();
           });
        });
  });


//put
describe("Testing PUT route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .put("/update")
       .send({ restaurantId: "12", comment: "good" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("Your Comment is good");
         done();
       });
 });
 it("should provide comment", function(done){
   url
       .put("/update")
       .send({ restaurantId: "12" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('enter a comment');
         done();
       });
     });
});


//delete
describe("Testing DELETE route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .delete("/delete")
       .send({ restaurantId: "12" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("Restaurant Deleted 12");
         done();
       });

 });
 it("should handle and send the computed info", function(done){
   url
       .delete("/delete")
       .send({restaurantId: "yuva" })
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("enter a valid restaurant Id");
         done();
       });

 });
});
