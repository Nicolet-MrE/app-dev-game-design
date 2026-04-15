console.log('js connected!');
import {Ball } from "./classes/Ball.js";

window.onload = () => {
     //most elements are new or refactored.
    const container = document.getElementById('bounce-container');
    const dropButton = document.getElementById('drop-button');

    const balls = [];

    dropButton.addEventListener('click', ()=>{
        let ball = new Ball(); // adapted
        container.appendChild(ball.element);
        ball.elementRef = document.getElementById(ball.id); //New
        balls.push(ball);
    });

      function gameLoop(){
        let yFactor = 5;
        let xFactor = 2;
        
        balls.forEach((ball)=>{
            ball.yDir = (ball.y >= 300 - ball.size/2 || ball.y <= -10 + ball.size /2) ? ball.yDir * -1 : ball.yDir;
            ball.xDir = (ball.x >= 500 - ball.size/2 || ball.x <= 0 + ball.size /2) ? ball.xDir * -1 : ball.xDir;
            ball.y = ball.y + ball.velocity * ball.yDir * yFactor;
            ball.x = ball.x + ball.velocity * ball.xDir * xFactor;
            ball.elementRef.style.top =  `${ball.y}px`;
            ball.elementRef.style.left =  `${ball.x}px`;
        });
        requestAnimationFrame(gameLoop);
    }

    //Start Loop
    requestAnimationFrame(gameLoop);
    
}
