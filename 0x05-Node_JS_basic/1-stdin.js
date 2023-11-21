const readline = require('readline');

function main(callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
    console.log(`Your name is: ${name}`);
    callback(name); // callback for testing
    rl.close();
  });

  rl.on('close', () => {
    console.log('This important software is now closing\n');
  });
}

module.exports = main;

