/*
    You can use random number generation in a range
    to make random colors for objects using the 
    RGB value selector for colors.

    rgb(255,255,255) = white
    rgb(0,0,0) = black

    Each color has a range between 0 and 255.
*/

function createRandomRGB(){
    function random255(){
        return Math.floor(Math.random() * 255); 
    }
    let red = random255();
    let green = random255();
    let blue = random255();

    return `rgb(${red},${green},${blue})`;
}

console.log(createRandomRGB()); //rgb(84,175,227)
console.log(createRandomRGB()); //rgb(185,165,93)
console.log(createRandomRGB()); //rgb(12,250,79)