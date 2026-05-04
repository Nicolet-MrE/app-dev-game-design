'use strict';

export class Ball {
    constructor(){
        this.id = String(Math.floor(Math.random() * 1000));
        this.color = this.createRandomRGB();
        this.size = Math.floor(Math.random() * (40-10) + 10);
        this.x = Math.floor(Math.random() * (450-50) + 50);
        this.y = 15;
        this.yDir = 1;
        this.xDir = this.getRandomDir();
        this.velocity = Math.random();
        this.element = this.create();
        this.elementRef = undefined;
    }

    create(){
        const ball = document.createElement('div');
        ball.setAttribute('style', `width:${this.size}px; height:${this.size}px; background-color:${this.color};`);
        ball.id = this.id;
        ball.style.left = `${this.x}px`;
        ball.style.top = `${this.y}px`;
        ball.classList.add('ball');
        console.log('ball created');
        return ball;
    }

    getRandomDir(){
        let test = Math.random();
        let dir = 1;
        if(test >=0.5 ) dir = -1;
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