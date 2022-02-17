let connection;
const handleUserInput = function(hotkey) {
  // pressing CTRL + C will exit the game
  if (hotkey === '\u0003') {
    process.exit();
  }
  if (hotkey === 'w') {
    connection.write("Move: up");
  }
  if (hotkey === 'a') {
    connection.write("Move: left");
  }
  if (hotkey === 's') {
    connection.write("Move: down");
  }
  if (hotkey === 'd') {
    connection.write("Move: right");
  }
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // function for controlling responses to user input
  stdin.on('data', handleUserInput);


  return stdin;
};

setupInput();

module.exports = {
  setupInput
};