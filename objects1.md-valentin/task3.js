const student = {
  firstName: "John",
  lastName: "Smith",
  class: 12,
};

delete student.class;
const valuesArray = Object.values(student);
const outputString = valuesArray.join(", ");
console.log(outputString);
