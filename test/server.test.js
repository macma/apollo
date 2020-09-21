const server = require('../server');
let chai = require('chai');
let chaiHttp = require("chai-http");
let should = chai.should();
chai.use(chaiHttp);

describe('server.js tests', () => {
    describe('server.query() Test', () => {
        it('GraphQL start', (done) => {
                chai.request('http://127.0.0.1:4000')
                        .get('/')
                        .end((err, res) => {
                                res.should.have.status(400);
                                done();
                        });
        });
    });
});
