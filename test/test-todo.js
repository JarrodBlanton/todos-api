const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const mongoose = require('mongoose');

const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Todo', function() {
    it('Should connect to the server', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('Should GET the api/todos endpoint', function(done) {
        chai.request(server)
            .get('/api/todos')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('Should CREATE a new TODO', function(done) {
        chai.request(server)
            .post('/api/todos')
            .send({'name': 'Wash the cat'})
            .end((err, res) => {
                res.should.have.status(201);
                console.log(res.body);
                done();
            })
    })
});
