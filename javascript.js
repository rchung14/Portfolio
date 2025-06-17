// Level 1 basics: 
let age = 23;
let name = "Ryan";
let race = "Asian";

console.log(age, name, race);

// let can be reassigned, const cannot, var moved to top internally

{
    let a = 5;
    var b = 10;
    const c = 15; 
}
console.log(a); // Error
console.log(b); // Works
console.log(c); // Error


