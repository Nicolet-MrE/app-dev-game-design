import { Game } from "./classes/Game.js";

console.log('js connected');

//===========Start ====================
const game = new Game();
game.keys.checkKeys();
game.spawnPlayer();

const toggleOn = document.getElementById('start');
toggleOn.addEventListener('click',()=>{
    if(game.play == false) game.play = true;
    else game.play = false;
});


// const checkPlayerCollisions = (player, block)=>{
//     if(player.x + player.width > block.x && player.x < block.x + block.width
//         && player.y + player.height > block.y && player.y < block.y + block.height){
//             return true;
//         }else{
//             return false;
//         }
// }

const gameLoop = ()=>{
    game.spawnClock++;
    // check spawn clock
    if(game.spawnClock % 120 === 0 && game.play){
         //create blocks
        for(let i = 0; i < game.level; i++){
            game.makeBlock();
        }
    }
       
    //update player movement
    game.checkPlayerMovement();
    game.checkPlayerBounds();
    


    //update position of blocks
    

    if(game.play){
        game.blocks.forEach((block, index)=>{
        //check for collision
        game.player.collision = game.checkPlayerCollisions(block);
        if(game.player.collision==true) {
            game.endGame();
        }

        if(block.y >= 801 - block.height){
            //delete block from array and DOM
            block.elRef.remove();
            game.blocks.splice(index, 1);

        }
        block.y = block.y + (block.speed + 0.1 * 10);
        block.elRef.style.top = `${block.y}px`;
        
    });
    }
    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
