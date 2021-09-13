import { Seq } from 'immutable';

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const printBestStudents = (grades) => {
  const student = Seq(grades);

  console.log(student
    .filter((student) => student.score > 70)
    .map((student) => {
      const { firstName, lastName } = student;
      return {
        ...student,
        firstName: capitalize(firstName),
        lastName: capitalize(lastName),
      };
    })
    .toJS());
}
