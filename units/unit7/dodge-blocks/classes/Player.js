export class Player{
    constructor(){
        this.x = 190;
        this.y = 750;
        this.width = 25;
        this.height = 25;
        this.id ="player";
        this.el = this.init();
        this.elRef = undefined;
    }

   init(){
        const player = document.createElement('div');
        player.id = this.id;
        player.style.width = `${this.width}px`;
        player.style.height = `${this.height}px`;
        player.style.left = `${this.x}px`;
        player.style.top = `${this.y}px`;
        player.classList.add('player');
        return player;
   }

}