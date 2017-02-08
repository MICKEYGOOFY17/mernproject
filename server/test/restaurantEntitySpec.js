const should = require("chai").should();
const expect = require("chai").expect;
const assert = require ("chai").assert;
const supertest = require("supertest");
const restaurant = require("../restaurant/restaurantEntity.js");

/* testing name to be a required field */
describe("for entity",function(){
  it("name should be mandatory",function(done){
      let use = new restaurant();
      use.validate(function(err){
        expect(err.errors.name).to.exist;
        done();
      });
  });

  /* testing id to be a required field */
  it("id should be mandatory",function(done){
      let use = new restaurant();
      use.validate(function(err){
        expect(err.errors._id).to.exist;
        done();
      });
  });

  /* testing city to be a required field */
  it("city should be mandatory",function(done){
      let use = new restaurant();
      use.validate(function(err){
        for(var i=0;i<use.address;i++)
        expect(err.errors.address[i].city).to.exist;
        done();
      });
  });
});
