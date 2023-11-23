// 6-payment_token.test.js
const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('returns a resolved promise with a certain object when success is true', function(done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(error => {
        done(error);
      });
  });
});

