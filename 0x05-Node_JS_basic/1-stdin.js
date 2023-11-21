// process.stdout.write('Welcome to Holberton School, what is your name?\n');

// if (process.stdin.isTTY) {
//   process.stdin.on('data', (data) => {
//     process.stdout.write(`Your name is: ${data.toString()}`);
//     process.exit();
//   });
// } else {
//   process.stdin.on('data', (data) => {
//     process.stdout.write(`Your name is: ${data.toString()}`);
//     process.exit();
//   });
//   process.on('exit', () => {
//     process.stdout.write('This important software is now closing\n');
//   });
// }

// Import the readline module to handle command line input/output
const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Wait for the user's input
rl.question('', (name) => {
  // Display the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// When the readline interface is closed, display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
