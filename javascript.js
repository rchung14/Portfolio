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

// switch cases 

function classifyAge(age) { 
    // child < 13, teen < 18, else adult 
    if (age < 13) { 
        return ("Child");
    }
    else if (age < 18) { 
        return ("Teen");
    }
    else { 
        return ("Adult");
    }
}

function classifyAgeSwitch(age) { 
    switch (true) { 
        case (age < 13): 
            return "Child";
        case (age < 18): 
            return "Child";    
        default: 
            return "Adult";
    }
}

function dayClassify(day) {
    switch (day) {
        case 1: 
            return "Monday";
        case 2:
            return "Tuesday";
        case 3: 
            return "Wednesday";
        // and so on
    }
}

// ternary operators -- shorthand for if/else
let age1 = 20; 
let label = age1 < 18 ? "Minor" : "Adult";

function classifyAgeTernary(age) { 
    
    let label = age < 13 ? "Child" : 
                age <= 18 ? "Teen" : "Adult"; 
    
    return label
}

function describeNumber(n) { 
    switch(n) { 
        case n < 0: 
            return "Negative"; 
        case n == 0: 
            return "Zero"; 
        case n <= 10:
            return "Small";
        default:
            return "Large"
    }
}

let grade = score >= 90 ? "A" : "B";