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
    let idealSalary = (minHours * 1000) + ((hoursWorked - minHours) *200);
    return (`${firstName} your basic salary was ${minHours * 1000} Naira, your Overtime Wages was ${(hoursWorked - minHours) *200} Naira. Hence Your Total salary is ${idealSalary} Naira`);
    }
}


console.log(calcDaySalary(hoursWorked, 4));