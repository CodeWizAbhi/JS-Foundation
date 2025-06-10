let student = {
  name: "Abhishek",
  age: 17,
  address: {
    city: "Gangapur Bk",
    pincode: 410516
  },
  greet() {
    console.log(`Hi, I'm ${this.name} from ${this.address.city}`);
  },
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return this.name;
    if (hint === "number") return this.age;
    return this.name;
  }     
};
student.greet(); 
let studentCopy = student;
studentCopy.name = "Lohot";
console.log(student.name); 
let newStudent = { ...student };
newStudent.name = "Raj";
console.log(student.name); 
console.log(newStudent.name); 
student = null; 
function Course(name, duration) {
  this.name = name;
  this.duration = duration;
  this.getInfo = function () {
    console.log(`${this.name} is ${this.duration} months long.`);
  };
}
let jsCourse = new Course("JavaScript", 3);
jsCourse.getInfo(); 
console.log(jsCourse.instructor?.name);
let id = Symbol("studentId");
studentCopy[id] = 12345;
console.log("Student ID (Symbol):", studentCopy[id]);
console.log(`Student: ${studentCopy}`); 
console.log(+studentCopy);              