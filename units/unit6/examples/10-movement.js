/**
 * We use the recursive use of requestAnimationFrame
 * to update the position of each of our moving objects
 * a little bit each call - which, remember, is about
 * 60 times each second.  Often this means we update 
 * a single pixel or fractions of a pixel each time. 
 */

class Ball{
    constructor(){
        this.x = 0;
        this.y = 0;
    }
}
const ball = new Ball();
function gameLoop(){
    ball.x++;
    ball.y++;
    console.log( ball.x , ball.y);
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);