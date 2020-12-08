const student = {
  firstName: "Boris",
  lastName: "Pallard"
};

// console.log(student.firstName);

student.jobTitle = "CEO";


// console.log(Object.keys(student));

Object.keys(student).forEach((key) => {
  let value = student[key];
  console.log(`${key}: ${value}`);
});

console.log(student);
