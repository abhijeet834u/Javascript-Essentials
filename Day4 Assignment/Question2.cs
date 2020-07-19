const student = {
    name: "Helsinki",
    age: 24,
    projects: {
        dicsGame: "Two player dice game using Javascript"
    }
};

const {name,age,projects} = student;
const {dicsGame} = student.projects

console.log("Object Destructuring")
console.log(name);
console.log(age);
console.log(dicsGame);