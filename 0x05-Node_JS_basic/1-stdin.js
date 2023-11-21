const readline = require('readline');

// Create an interface for stdin and stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // Output the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Event listener for closing the program
rl.on('close', () => {
  console.log('This important software is now closing\n');
});
