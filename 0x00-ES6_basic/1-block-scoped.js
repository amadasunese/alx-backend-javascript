export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;  // Use let here
    const task2 = false; // Use let here
  }

  return [task, task2];
}
