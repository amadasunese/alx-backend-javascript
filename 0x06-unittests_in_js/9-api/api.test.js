const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
    const indexPageOptions = {
        url: "http://localhost:7865/",
        method: "GET"
    };

    it("check correct status code", function(done) {
        request(indexPageOptions, function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("check correct content", function(done) {
        request(indexPageOptions, function(err, res, body) {
            expect(body).to.contain("Welcome to the payment system");
            done();
        });
    });

    it("check correct content length", function(done) {
        request(indexPageOptions, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

describe("Cart page", function() {
    it("returns correct status code for a numeric id", function(done) {
        request.get('http://localhost:7865/cart/123', function(err, res, body) {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });

    it("returns correct status code for a non-numeric id", function(done) {
        request.get('http://localhost:7865/cart/abc', function(err, res, body) {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    // Additional tests for 'Cart page' can be added here
});
