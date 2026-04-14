console.log('js connected!');
import {Ball } from "./classes/Ball.js";

window.onload = () => {
     //most elements are new or refactored.
    const container = document.getElementById('bounce-container');
    const dropButton = document.getElementById('drop-button');

    let i = 0; //iterator
    const balls = [];//array literal

    dropButton.addEventListener('click', ()=>{
        i++;
        let ball = new Ball('red', '30', i * 20);
        container.appendChild(ball.element);
        balls.push(ball);
        gameLoop();
    });

    function gameLoop(){
        balls.forEach((ball)=>{
            console.log(ball);
        });
    }
    
}
