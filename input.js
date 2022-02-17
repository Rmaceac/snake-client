const handleUserInput = function(hotkey) {
  // pressing CTRL + C will exit the game
  if (hotkey === '\u0003');
  process.exit();
};

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // function for controlling responses to user input
  stdin.on('data', handleUserInput());


  return stdin;
};

setupInput();

module.exports = {
  setupInput
};