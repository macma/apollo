const server = require("./server");

server.listen(4000, '0.0.0.0').then((app) => {
    console.log(`🚀  Server ready at ${app.url}`);
});