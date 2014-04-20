var should = require('chai').should();

describe("Tinyconf", function() {
  describe("Instance", function() {
    var config = require('../')();
    should.exist(config);
  });
});