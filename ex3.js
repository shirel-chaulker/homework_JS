class Tsionet {
  constructor(courses, manager, teachers) {
    this.courses = courses;
    this.manager = manager;
    this.teachers = teachers;
  }
}

// question 4.a:

let numbers = [1, 2, 3, 4, 5];
let copy = [...numbers];
//console.log(copy);

//question b:

let first = [2, 4, 5, 6];
let second = [3, 6, 9];
let combiend = [...first, ...second];
//console.log(combiend);

//question c:

let array = [10, 2, 3, 5, 9];
const [a, b, ...t] = array;
console.log(a, b, t);

//question d:

class person1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let person2 = new person1("shirel", "chaulker");
//let fullName = [...person2];
console.log(person2);
//console.log(fullName);

//question e:

let element = (a, b, ...args) => {
  console.log(a);
  console.log(b);
  console.log(args);
};

element(4, 6, 7, 4, 25, 6, 433);
