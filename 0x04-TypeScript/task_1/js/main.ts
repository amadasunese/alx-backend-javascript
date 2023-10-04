export interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any; // Index signature to allow dynamic attributes
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Define an interface for the constructor of the StudentClass
export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
}

// Define an interface for the StudentClass
export interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
}

// Create the StudentClass
export class StudentClass implements StudentClass {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

export default StudentClass;
