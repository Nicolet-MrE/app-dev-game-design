'use strict';

export class Ball {
    constructor(color, size, xPos, ){
        this.color = color
        this.size = size;
        this.x = xPos; // New
        this.element = this.create();
    }

    create(){
        const ball = document.createElement('div');
        ball.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; border-radius: 50%; background-color: ${this.color}; left: ${this.x}px;`); // left is new
        ball.classList.add('ball');
        console.log('ball created');
        return ball;  
    }
}