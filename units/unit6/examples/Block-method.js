'use strict';

class Block{
    constructor(color){
        this.color = color;
        this.size = 64;
        this.direction = 'North';
    }

    explode(){
        this.size = this.size * 2;
    }
}

const block = new Block('purple'); // how to create an object using the class
block.explode(); // this is how to call an object's method
console.log(block.size); // will return 128