'use strict';

class Block{
    constructor(color){
        this.color = color;
        this.size = 64;
        this.direction = 'North';
    }
}

const block = new Block('purple'); // how to create an object using the class

const size = block.size;   // size will be equal to 64