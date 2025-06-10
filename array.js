let subjects = ["java","Cpp","Python"];
let students = ["Abhishek","Kunal","Sahil"];
for(i=0;i<subjects.length;i++){
    console.log(subjects[i]);
}
subjects.pop();
console.log(subjects);
subjects.push("DCN");
console.log(subjects);
console.log(subjects.concat(students));
console.log(subjects.includes("java"));
console.log(subjects.indexOf("java"))
console.log(subjects.reverse());