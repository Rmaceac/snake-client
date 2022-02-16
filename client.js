const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  // for decoding the server's messages
  conn.setEncoding("utf8");

  // ON connection to the server...
  conn.on("connect", () => {
    console.log("Connection successful!");
    // send the server my name
    conn.write("Name: MAC");
  });

  return conn;
};

// this is logged to the console as we attempt to connect to the server
const connectionPrompt = console.log("Connecting...");
connect();

module.exports = {
  connect,
  connectionPrompt,
};

