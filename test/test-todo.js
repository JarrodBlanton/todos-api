const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');

const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Server', function() {
    it('should connect to the server', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
});
