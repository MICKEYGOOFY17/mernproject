const should = require("chai").should();
const expect = require("chai").expect;
const assert = require ("chai").assert;
const supertest = require("supertest");
const app = require("../../bin/www");

var url = supertest("http://localhost:8080/restaurant");

//post
  describe("Testing POST route", function(err){
   it("should add details", function(done){
     url
         .post("/add")
         .send({"_id": 7,"name": "Le Promanade","address": [{"city": "Pondicherry","state": "Pondicherry"}]})
         .expect(200)
         .end(function(err,res){
           should.not.exist(err);
           res.text.should.equal('Restaurant saved successfully');
           done();
         });
      });
    it("should add details", function(done){
        url
            .post("/add")
            .send({"_id": 7,"name": "Le Paradise","address": [{"city": "Pondicherry","state": "Pondicherry"}]})
            .expect(200)
            .end(function(err,res){
              should.not.exist(err);
              res.text.should.equal('please enter all the details, with new id');
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
             res.text.should.equal('enter some data');
             done();
           });
        });
  });


  //get
  describe("Testing the restaurant route", function(err){
    it("should handle the request", function(done){
      url
          .get("/displaycity/Pondicherry")
          .expect(200)
          .end(function(err,res){
            if (err) {
  				        throw err;
  			    }
            JSON.parse(res.text)[0].address[0].city.should.equal('Pondicherry');
            done();
          });
    });
    it("should not handle the request", function(done){
        url
            .get("/displaycity/Kashmir")
            .expect(200)
            .end(function(err,res){
              if (err) {
    				        throw err;
    			    }
              res.text.should.equal('enter a valid city');
              done();
            });
      });
  });


//put
describe("Testing PUT route", function(err){
 it("should handle and send the computed info", function(done){
   url
       .put("/update")
       .send({"_id": 7,"name": "Le Promanade","address": [{"city": "Pondicherry","state": "Pondicherry"}]})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal("Updated");
         done();
       });
 });
 it("should provide all the details", function(done){
   url
       .put("/update")
       .send({"_id": 7,"name": "","address": [{"city": "Pondicherry","state": "Pondicherry"}]})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('enter a valid restaurant details');
         done();
       });
     });
});


//delete
describe("Testing DELETE route", function(err){
 it("should delete details", function(done){
   url
       .delete("/deleteid")
       .send({_id : 7})
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Deleted the id 7 successfully');
         done();
       });

 });
 it("should handle and send the computed info", function(done){
   url
       .delete("/deleteall")
       .expect(200)
       .end(function(err,res){
         should.not.exist(err);
         res.text.should.equal('Deleted all the restaurants successfully');
         done();
       });

 });
});
