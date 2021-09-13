/* TASK 5 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
}

/* TASK 6 */
export function isDirector(employee: DirectorInterface | TeacherInterface): boolean {
  return (employee instanceof Director);
}

export function executeWork(employee: DirectorInterface | TeacherInterface):string {
  if (employee instanceof Director) return employee.workDirectorTasks();
  else if (employee instanceof Teacher) return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
}

/* TEST FOR TASK 5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
*/
/* TEST FOR TASK 6
console.log(isDirector(createEmployee(200)));
executeWork(createEmployee(200));
console.log(isDirector(createEmployee(1000)));
executeWork(createEmployee(1000));
*/
/* TEST FOR TASK 7
console.log(teachClass('Math'));
console.log(teachClass('History'));
*/
