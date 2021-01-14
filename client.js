const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //Event Handlers

  //Connection Successful
  conn.on("connect", () => {
    console.log("Connection Successful");
    conn.write("Name: NIK");
  });

  conn.on("connect", () => {
    //     setInterval(() => conn.write('Move: up'), 1000);
    //     setInterval(() => conn.write('Move: left'), 4000);
    //     setInterval(() => conn.write('Move: right'), 6000);
  });

  //data from server
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = connect;
