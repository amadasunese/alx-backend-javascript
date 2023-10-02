function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to extract student ids and return them in a new array
  return students.map((student) => student.id);
}
