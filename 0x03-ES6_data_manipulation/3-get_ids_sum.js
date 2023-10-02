export default function getStudentIdsSum(students) {
  // Use the reduce function to calculate the sum of student IDs
  return students.reduce((sum, student) => sum + student.id, 0);
}
