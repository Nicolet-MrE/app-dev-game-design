import {Block} from "./classes/Block.js";
import {Player} from "./classes/Player.js";
import { Keytracker } from "./classes/Keytracker.js";

console.log('js connected');

const gameboard = document.getElementById('gameboard');
let gbHeight = 800;
let gbWidth = 400;
gameboard.style.width = `${gbWidth}px`;
gameboard.style.height = `${gbHeight}px`;
let level = 3;
let spawnClock = 0;
let play = false;
let speed = 3;
const blocks = [];
let player;
const keys = new Keytracker();
keys.checkKeys();


const checkPlayerMovement = ()=>{
    if(keys.states.w){
        player.y = player.y - speed;
        player.elRef.style.top = `${player.y}px`;
    }
    if(keys.states.s){
        player.y = player.y + speed;
        player.elRef.style.top = `${player.y}px`;
    }
    if(keys.states.a){
        player.x = player.x - speed;
        player.elRef.style.left = `${player.x}px`;
    }
    if(keys.states.d){ 
        player.x = player.x + speed;
        player.elRef.style.left = `${player.x}px`;
    }

}


const spawnPlayer = ()=>{
    player = new Player();
    gameboard.appendChild(player.el);
    player.elRef = document.getElementById('player');
}
spawnPlayer();

const makeBlock = ()=>{
    let block = new Block();
    gameboard.appendChild(block.element);
    let blockRef = document.getElementById(String(block.id));
    block.elRef = blockRef;
    //console.log(blocks.length);
    blocks.push(block);
}

const checkPlayerBounds = ()=>{
    if(player.x <= 0) player.x = 0;
    if(player.x + player.width >= gbWidth) player.x = gbWidth - player.width;
    if(player.y <= 0) player.y = 0;
    if(player.y + player.height >= gbHeight) player.y = gbHeight - player.height;
}

const checkPlayerCollisions = ()=>{
    //player block collisions
}

const gameLoop = ()=>{
    spawnClock++;
    // check spawn clock
    if(spawnClock % 120 === 0 && play){
         //create blocks
        for(let i = 0; i < level; i++){
            makeBlock();
        }
    }
       
    //update player movement
    checkPlayerMovement();
    checkPlayerBounds();
    //check for collision


    //update position of blocks
    blocks.forEach((block, index)=>{
        if(block.y >= 801 - block.height){
            //delete block from array and DOM
            block.elRef.remove();
            blocks.splice(index, 1);

        }
        block.y = block.y + (block.speed + 0.1 * 10);
        block.elRef.style.top = `${block.y}px`;
        
    });

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);
