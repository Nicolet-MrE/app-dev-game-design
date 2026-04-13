console.log('js connected!');
import {Ball } from "./classes/Ball.js";

window.onload = () => {
    const container = document.getElementById('bounce-container');
    const ball = new Ball('red', '30');

    container.appendChild(ball.element);


}

