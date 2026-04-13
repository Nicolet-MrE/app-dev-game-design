/*
    Template literals allow you to insert variables
    into complex strings without using concatination.
    Template literals us ` backticks for quotations
    and ${variable} notation.
*/

let size = 64;
let color = 'red';

let statement = `width:${size}px; background-color:${color}`;
console.log(statement); 
// returns "width:64px; background-color: red"