/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let conn;

// const setupInput = function(conn) {
  
// }

// setup interface to handle user input from stdin

const setupInput = function () {
  conn = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};
  

  const handleUserInput = process.stdin.on('data', (key) => {
    // console.log(key);
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'i') {
      conn.write('Move: up');
    }
    if (key === 'k') {
      conn.write('Move: down');
    }
    if (key === 'j') {
      conn.write('Move: left');
    }
    if (key === 'l') {
      conn.write('Move: right');
    }
    if (key === 'h') {
      conn.write('Say: Hi!');
    }
  });

  return stdin;

module.exports = setupInput;