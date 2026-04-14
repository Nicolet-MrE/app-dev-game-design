/*
    When creating a class in a seperate file, you need to allow it to be exported.
    There are several methods for this, but the simplest is to place the 
    export keyword in front of your class declaration.  See below.
*/

export class Block {
    constructor(){
        this.width = 64;
        this.color = 'red';
    }
}

//    You will also need to import this class into your other documents to use it.

import { Block } from '/classes/Block.js';

// this is typically placed at the top of document where it is imported.