'use strict';

export class Ball {
    constructor(color, size){
        this.color = color;
        this.size = size;
        this.element = this.create();
    }

    create(){
        const ball = document.createElement('div');
        ball.id = this.id;
        ball.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; border-radius: 50%; background-color: ${this.color}`);
        ball.classList.add('ball');
        console.log('ball created');
        return ball;  
    }
}