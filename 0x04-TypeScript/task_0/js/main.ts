interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Maro',
  lastName: 'Okegbe',
  age: 24,
  location: 'Warri',
};

const student2: Student = {
  firstName: 'Mary',
  lastName: 'Johnson',
  age: 34,
  location: "Lagos",
};

let studentsList: Student[] = [Student1, Student2]

const student_table = document.createElement('table');
const tablebody = document.createElement('tbody');

studentsList.forEach((objectList)=>{
    const tablename = document.createElement('tablename');
    const tablerow = document.createElement('tablerow');
    const tablelocation = document.createElement('tablelocation');

    tablename.textContent = objectList.firstName;
    tablelocation.textContent = objectList.location;
    tablerow.appendChild(tablename);
    tablerow.appendChild(tablelocation);
    tablebody.appendChild(tablerow);
})
student_table.appendChild(tablebody);
document.body.appendChild(student_table);
