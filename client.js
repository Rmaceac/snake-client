const net = require("net");
const {IP, PORT} = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // for decoding the server's messages
  conn.setEncoding("utf8");

  // ON connection to the server...
  conn.on("connect", () => {
    console.log("Connection successful!");
    // send the server my name
    conn.write("Name: MAC");
  });

  conn.on("data", (data) => {
    // logging anything the server sends to the client
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};

