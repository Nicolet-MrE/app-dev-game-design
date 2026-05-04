import {Ball} from '/classes/Ball.js';
console.log('js connected');

const container = document.getElementById('bounce-container');
const addButton = document.getElementById('drop-button');
const balls = [];

addButton.addEventListener('click', ()=>{
    let ball = new Ball();
    container.appendChild(ball.element);
    ball.elementRef = document.getElementById(ball.id);
    balls.push(ball);
});

function gameLoop(){
    const yFactor = 8;
    const xFactor = 5;

    balls.forEach((ball)=>{
        ball.yDir = (ball.y >= 300 - ball.size || ball.y <= 0) ? ball.yDir * -1 : ball.yDir;
        ball.y = ball.y + ball.velocity * ball.yDir * yFactor;
        ball.elementRef.style.top = `${ball.y}px`;
        ball.xDir =(ball.x >= 500 - ball.size || ball.x <= 0) ? ball.xDir * -1 : ball.xDir;
        ball.x = ball.x + ball.velocity * ball.xDir * xFactor;
        ball.elementRef.style.left = `${ball.x}px`;
        
        
        //console.log('tick');
        
    });

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);



