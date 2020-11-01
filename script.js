'use strict'; 
// Calculating the Worker's salary based on daily Hours worked
let firstName = prompt("Please Enter Your Name");
let hoursWorked = prompt(`How many hours did you work today ${firstName} ?`);



function calcDaySalary (hoursWorked, minHours) {
    if (hoursWorked <= minHours) {
    let idealSalary = 1000 * hoursWorked;
    return (`${firstName} your Total salary is ${idealSalary} Naira.`);
    }
    if (hoursWorked > minHours) {
    let idealSalary = (hoursWorked * 1000);
    let overtimeWages = ((hoursWorked - minHours) * 200);
    return (`${firstName} your basic salary was ${idealSalary} Naira, your Overtime Wages was ${overtimeWages} Naira. Hence Your Total salary is ${idealSalary + overtimeWages} Naira`);
    }
}


console.log(calcDaySalary(hoursWorked, 4));
