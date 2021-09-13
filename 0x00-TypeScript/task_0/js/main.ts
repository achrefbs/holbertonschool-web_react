interface Student {
  firstName: string;
  lastName: string; 
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Joey',
  lastName: 'Tribiony',
  age: 23,
  location: 'Italy',
};

const student2: Student = {
  firstName: 'Phibby',
  lastName: 'Buffey',
  age: 21,
  location: 'France',
};

const studentsList: Array<Student> = [student1, student2];

// Vanilla JS
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('td');
const th2: HTMLTableCellElement = document.createElement('td');

th1.innerHTML = 'firstName';
th2.innerHTML = 'location';

document.body.append(table);
table.append(thead);
table.append(tbody)
thead.append(tr);
tr.append(th1);
tr.append(th2);

studentsList.forEach(element => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  tbody.append(tr);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = element.firstName;
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = element.location;
  tr.append(td);
});
