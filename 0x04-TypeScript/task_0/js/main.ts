// Define the Student interface
export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render the table
export function renderTable() {
    const table = document.getElementById("studentTable");
    const tbody = table.querySelector("tbody");

    studentsList.forEach(student => {
        const row = document.createElement("tr");
        const firstNameCell = document.createElement("td");
        const locationCell = document.createElement("td");

        firstNameCell.textContent = student.firstName;
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tbody.appendChild(row);
    });
}

// Call the renderTable function when the page loads
window.addEventListener("load", renderTable);