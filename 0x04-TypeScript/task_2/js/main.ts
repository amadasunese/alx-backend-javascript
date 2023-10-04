// Define the DirectorInterface
export interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Define the TeacherInterface
export interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Create the Director class implementing DirectorInterface
export class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

// Create the Teacher class implementing TeacherInterface
export class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

export function createEmployee(salary: number | string) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Type predicate for checking if an employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
    return "workDirectorTasks" in employee;
}

// Function to execute work based on the employee type
export function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) {
        // If the employee is a Director, call workDirectorTasks
        console.log(employee.workDirectorTasks());
    } else {
        // If the employee is a Teacher, call workTeacherTasks
        console.log(employee.workTeacherTasks());
    }
}

// Define a string literal type for Subjects
export type Subjects = "Math" | "History";

// Function to teach a class based on the subject
export function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else if (todayClass === "History") {
        return "Teaching History";
    } else {
        return "Invalid subject"; // Optional handling for other values
    }
}

