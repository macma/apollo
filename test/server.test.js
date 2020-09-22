const {server} = require("../src");
const chai = require('chai');
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
chai.should();

//Setup apollo server
before(async () => {
    await server.listen(4000, '0.0.0.0').then((app) => {
        console.log(`🚀  Server ready at ${app.url}`);
    });
})

describe('server.js tests', () => {
    describe('server.query() Test', () => {
        it('GraphQL start', (done) => {
            chai.request("127.0.0.1:4000")
                .get('/')
                .end((err, res) => {
                    // "Get query missing"
                    res.should.have.status(400);
                    done();
                });
        });
    });
});

//Shutdown Apollo Server
after(async () => {
    await server.stop();
})