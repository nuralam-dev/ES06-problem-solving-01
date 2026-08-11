// const ProfileMessage = (employee) => {
//   if (typeof employee !== "object") {
//     return "Invalid";
//   }
//   let keys = Object.keys(employee);
//   if (
//     !keys.includes("name") ||
//     !keys.includes("age") ||
//     !keys.includes("department")
//   ) {
//     return "Invalid";
//   }
//   let { name, age, department } = employee;

//   return `My name is ${name}. I am ${age} years old. I work in ${department}.`;
// };

// let employeeObject = {
//   name: "Jodu",
//   age: 25,
//   department: "Marketing",
// };
// console.log(ProfileMessage(employeeObject));

const studentIntroduction = (student) => {
  if (typeof student !== "object") {
    return "Invalid";
  }

  let keys = Object.keys(student);
  console.log(keys);
  if (
    !keys.includes("name") ||
    !keys.includes("age") ||
    !keys.includes("course")
  ) {
    return "Invalid";
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
};

let obj = {
  name: "Rafi",
  age: 18,
  course: "JavaScript",
};
console.log(studentIntroduction(obj));
