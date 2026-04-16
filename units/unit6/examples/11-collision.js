/**
 * Generally you will want your objects to change direction
 * at some point.  Objects also run into their container or 
 * obstacles.  We do this by using IF and OR logic.
 */

//Let's imagine a container that is 400px wide by 300px tall.
let x = 50, y = 150;
let xDir = 1;
if(x > 400 || x < 0 ) { let xDir = xDir * -1 }

x = x + 1 * xDir;
