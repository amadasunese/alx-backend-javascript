export default function getStudentsByLocation(students, city) {
  // Use the filter function to find students with the specified city
  return students.filter((student) => student.location === city);
}
