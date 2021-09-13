/* Task 1 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/* TASK 2 */
interface Directors extends Teacher {
  numberOfReports: number;
}

/* TASK 3 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printName(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export const printTeacher: printTeacherFunction = printName;

/* TASK 4 */
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return 'Currently working';
  }

  displayName() {
    return this.firstName;
  }
}

/* TEST FOR TASK 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
*/

/* TEST FOR TASK 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
*/

/* TEST FOR TASK 3
console.log(printTeacher("John", "Doe")); 
*/

/* TEST FOR TASK 4
const student = new StudentClass("Joey", "Tribiony");
console.log(student.workOnHomework());
console.log(student.displayName());
*/
