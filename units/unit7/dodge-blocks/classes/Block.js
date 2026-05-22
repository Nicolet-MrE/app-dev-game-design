
export class Block{
    constructor(){
        this.id = Math.floor(Math.random()*1000);
        this.width = Math.floor(Math.random() *  50 + 5);
        this.height = Math.floor(Math.random() * 100 + 5 );
        this.speed = Math.random();
        this.x = Math.floor(Math.random() * 399 - 15);
        this.y = 10;
        this.element = this.create();
        this.elRef = undefined; 
    }

    create(){
        const block = document.createElement('div');
        block.id = this.id;
        block.style.width = `${this.width}px`;
        block.style.height = `${this.height}px`;
        block.style.left = `${this.x}px`;
        block.style.top = `${this.y}px`;
        block.classList.add('block');
        let borderRadius;
        if(this.width > this.height ) borderRadius = this.height / 4;
        else borderRadius = this.width / 4;
        block.style.borderRadius = `${borderRadius}px`;
        return block;
    }

}