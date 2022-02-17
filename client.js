const net = require("net");

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

  conn.on("data", (data) => {
    // logging anything the server sends to the client
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};

