export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;  // Use let here
    let task2 = false; // Use let here
  }

  return [task, task2];
}
