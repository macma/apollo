const { ApolloLogExtension } = require('apollo-log');
const options = {};
const extensions = [() => new ApolloLogExtension(options)];

module.exports = extensions