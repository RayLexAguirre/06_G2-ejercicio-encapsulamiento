import Student from './student.js';
import Grade from './grade.js';

let g1 = new Grade('Programación', 3);
let s1 = new Student("Juan Diaz", 1234, new Date(1990, 1, 5));

s1.setName("Pedro Juárez");
console.log(s1.getName());

s1.setId(789);

console.log(s1._capitalizeWord("pEDro"));

console.log(s1.getBirthDate());

console.log(g1._grades());

g1.setGrade(1, 8);
g1.setGrade(2, 10);

console.log(g1.getAverage());
console.log(g1.getAsString());