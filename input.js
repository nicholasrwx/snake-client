//stores the active TCP connection object
//this connection is made global,
//so it can be found by other functions

let connection;

//this one is standard input/output
//to your server

const handleUserInput = function (key) {
  if (key === "\u0003") {
    return process.exit();
  } else if (key === "\u0077") {
    return connection.write("Move: up");
  } else if (key === "\u0061") {
    return connection.write("Move: left");
  } else if (key === "\u0073") {
    return connection.write("Move: down");
  } else if (key === "\u0064") {
    return connection.write("Move: right");
  } else return undefined;
};

//setupInput is passed connection() from play.js
//set connections value, which changes
//the global object we called connections
//This funciton is for standard in/out
//to your computer console
//

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = setupInput;
