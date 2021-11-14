const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();

  // interpret incoming data as text
  conn.setEncoding("UTF8");
  conn.on('data', (data) => {
    console.log('New message from server', data)
  });
 
  return conn;


console.log("Connecting ...");
connect();

