import { Keytracker } from "./Keytracker.js";
import { Block } from "./Block.js";
import { Player } from "./Player.js";

export class Game {
    constructor(){
        this.gameboard = document.getElementById('gameboard');
        this.play = false;
        this.boardWidth = 400;
        this.boardHeight = 800;
        this.level = 1;
        this.spawnClock = 0;
        this.speed = 3;
        this.player = undefined;
        this.blocks = [];
        this.keys = new Keytracker();

        this.gameboard.style.width = `${this.boardWidth}px`;
        this.gameboard.style.height = `${this.boardHeight}px`;
    }
    spawnPlayer(){
        this.player = new Player();
        this.gameboard.appendChild(this.player.el);
        this.player.elRef = document.getElementById('player');
    }
    checkPlayerMovement(){
        if(this.keys.states.w){
            this.player.y = this.player.y - this.speed;
            this.player.elRef.style.top = `${this.player.y}px`;
        }
        if(this.keys.states.s){
            this.player.y = this.player.y + this.speed;
            this.player.elRef.style.top = `${this.player.y}px`;
        }
        if(this.keys.states.a){
            this.player.x = this.player.x - this.speed;
            this.player.elRef.style.left = `${this.player.x}px`;
        }
        if(this.keys.states.d){ 
            this.player.x = this.player.x + this.speed;
            this.player.elRef.style.left = `${this.player.x}px`;
        }

    }
    makeBlock(){
        let block = new Block();
        this.gameboard.appendChild(block.element);
        let blockRef = document.getElementById(String(block.id));
        block.elRef = blockRef;
        //console.log(blocks.length);
        this.blocks.push(block);
    }
    checkPlayerBounds(){
        if(this.player.x <= 0) this.player.x = 0;
        if(this.player.x + this.player.width >= this.boardWidth) this.player.x = this.boardWidth - this.player.width;
        if(this.player.y <= 0) this.player.y = 0;
        if(this.player.y + this.player.height >= this.boardHeight) this.player.y = this.boardHeight - this.player.height;
    }
    checkPlayerCollisions = (block)=>{
        if(this.player.x + this.player.width > block.x && this.player.x < block.x + block.width && this.player.y + this.player.height > block.y && this.player.y < block.y + block.height){
                return true;
            }else{
                return false;
            }
    }
    endGame(){
        this.play = false;
        let gameOver = document.createElement('h1');
        gameOver.innerHTML = 'Game Over';
        this.gameboard.appendChild(gameOver);
    }
    
}