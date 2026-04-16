/*
    A 60Hz monitor refreshes (or redraws) the screen
    about 6o times per second, which translates to 
    60 frames per second.  There is a method of the 
    window object that allows us to update objects
    just before this redraw or update happens -
    requestAnimationFrame(callback).

    Callback is the name we give the variable name
    of a function without actually calling the
    function, like we used with setTimeout(callback).
*/
requestAnimationFrame(()=>(console.log('tick')));
//When called like this, it only triggers once.

/*
 * In order to use requestAnimationFrame for animation, 
 * we need to use recursion to repeatedly call it.
 * RECURSION is the act of a function calling itself.
 */
function gameLoop(){
    console.log('tick');
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
/**
 * This is the basis of most web based game engines.
 * There is optimization dealing with using math
 * on the time between frames, but that is slightly
 * out of the scope of this lesson.
 */

