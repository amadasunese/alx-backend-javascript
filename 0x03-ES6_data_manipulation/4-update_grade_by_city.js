export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filter students from the specified city
  const studentsInCity = students.filter((student) => student.location === city);

  // Map students to update their grades
  const updatedStudents = studentsInCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';

    // Create a new student object with the updated grade
    return {
      ...student,
      grade,
    };
  });

  return updatedStudents;
}
