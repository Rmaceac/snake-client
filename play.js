const { connect } = require('./client');
const { setupInput } = require('./input');

// this is logged to the console as we attempt to connect to the server
console.log("Connecting...");
connect();

setupInput();
