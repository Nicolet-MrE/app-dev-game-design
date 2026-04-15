'use strict';

export class Ball {
    constructor(color, size, xPos, ){
        this.id = String(Math.floor(Math.random() * 1000)); // New
        this.x = Math.floor(Math.random() * (450 - 50) + 50); // New
        this.y = 15;
        this.yDir = 1; //New
        this.xDir = this.getRandomDir(); //New
        this.velocity = Math.random();
        this.color = this.createRandomRGB();
        this.size = Math.floor(Math.random() * (40 - 10) + 10); //new
        this.element = this.create();
        this.elementRef = undefined;
    }

    create(){
        const ball = document.createElement('div');
        ball.id = this.id;  // new
        ball.setAttribute('style', `width: ${this.size}px; height: ${this.size}px; background-color: ${this.color};`); //removed left from this list
        ball.style.top = `${this.y}px`; // new
        ball.style.left = `${this.x}px`; // new
        ball.classList.add('ball');
        console.log('ball created');
        return ball;  
    }
    getRandomDir(){
        let test  = Math.random();
        let dir = "1";
        if(test >= 0.5) dir = "-1";
        return dir;
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