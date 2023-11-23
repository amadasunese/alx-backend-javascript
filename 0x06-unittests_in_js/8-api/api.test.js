const request = require('request');
const { expect } = require('chai');
const { app, server } = require('./api');

describe('Index page', () => {
  before(done => {
    // Start the server before the tests
    done();
  });

  after(done => {
    // Stop the server after the tests
    server.close(done);
  });

  it('should return the correct status code', done => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct result', done => {
    request.get('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});


