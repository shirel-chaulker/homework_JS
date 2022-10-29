class Tsionet {
  constructor(courses, age, teachers) {
    this.courses = courses;
    this.age = age;
    this.teachers = teachers;
  }
  static AddStudent(cours, age1, teacher, student) {
    return new Tsionet(cours, age1, teacher, student);
  }
  static remove(item) {}
}
let sahar = new Tsionet("gamer", 18, "neta");
console.log(sahar);
Tsionet.remove(sahar);
console.log(sahar);

//question 6:

function mult(a, b) {
  return a * b;
}

let fun2 = (a, b) => {
  console.log(a + b);
};
