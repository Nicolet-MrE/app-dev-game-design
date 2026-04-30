'use strict';

export class Ball {
    constructor(){
        this.id = String(Math.floor(Math.random() * 1000)); // New
        this.x = Math.floor(Math.random() * (450 - 50) + 50); // New
        this.y = 15; //New
        this.color = this.createRandomRGB(); //new
        this.size = Math.floor(Math.random() * (40 - 10) + 10); //new
        this.element = this.create();
        this.elementRef = undefined;
    }

    create(){
        const ball = document.createElement('div');
        ball.id = this.id;  // new
        ball.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; border-radius: 50%; background-color: ${this.color};`); //removed left from this list
        ball.style.top = `${this.y}px`; // new
        ball.style.left = `${this.x}px`; // new
        ball.classList.add('ball');
        console.log('ball created');
        return ball;  
    }
    
    createRandomRGB(){
        function random255(){
            return Math.floor(Math.random() * 255); 
        }
        let red = random255();
        let green = random255();
        let blue = random255();

        return `rgb(${red},${green},${blue})`;
    }
}