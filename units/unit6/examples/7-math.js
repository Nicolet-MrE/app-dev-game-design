/*
    Most games would not be possible without introducing
    randomness to number generation.  Sometimes it's 
    location, sometime number of enemies, and sometimes
    the generation of the enemies themselves.  This is 
    where Math.random() comes in.
*/

let randomNumber = Math.random(); //0.5348525119201353
console.log(randomNumber); 
// prints a pseudo-random number between 0 and 1.

console.log(Math.random()); //0.5318810517723849
console.log(Math.random()); //0.42395860774961036
console.log(Math.random()); //0.24648139382353262


/*
    Sometimes you want an integer and not a float
    (or number with a decimal).  We use another Math
    method for this - Math.floor()
*/

let randomInteger = Math.floor(randomNumber * 10);
//multiplying by 10 moves the decimal 1 position to right
//Math.floor() selects the lowest whole number from the float
console.log(randomInteger); 
// returns 5 from 0.5348525119201353

//For positive numbers, it removes everything after the decimal
//For negative humbers, -5.129 , it takes the lowest integer, -6


/*
    If you need a random integer within a specific range
    like 1 to 50, you can use the formula below to do that.
*/
let lowestNumber = 1;
let highestNumber = 50;
let randomRangeNum = Math.floor( Math.random() * (highestNumber - lowestNumber) + lowestNumber);
console.log(randomRangeNum); // 7
console.log(Math.floor( Math.random() * (highestNumber - lowestNumber) + lowestNumber)); // 31
console.log(Math.floor( Math.random() * (highestNumber - lowestNumber) + lowestNumber)); // 24