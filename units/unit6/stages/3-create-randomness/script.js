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
        balls.forEach((ball)=>{
            console.log(ball);
        });
    }
    
}
