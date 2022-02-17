const IP = "165.227.47.243";
const PORT = 50541;

module.exports = {
  IP,
  PORT
};

// The movement keys (W, A, S, D) could be added to constants like like MOVE_UP_KEY, etc.
// What about the key mappings for messages?
// Every time a user presses the key 'x', it displays the message 'y'
// This seems like a mapping that's perfect for an object ({ x: "y" })
// Instead of using if statements to implement this, you can define an object (as a constant)
// which defines these message mappings. Your logic would change to simply lookup the appropriate mapping in the object, and if found, 
// send the value as the message string