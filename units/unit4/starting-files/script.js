console.log('js connected!');

//========= GET & SET VARABLES
const mainContainer = document.getElementById('main-container');

const clickButton = document.getElementById('click-button');

clickButton.addEventListener('click', ()=>{
    console.log('clicked!')
    if(mainContainer.style.backgroundColor != 'var(--clr-accent)'){
        mainContainer.style.backgroundColor = 'var(--clr-accent)';
    }else{
        mainContainer.style.backgroundColor = '';
    }
});


//===========  BONUS CHALLENGE
const menuButton = document.getElementById('ham-container');
const mainNav = document.getElementById('main-nav');
menuButton.addEventListener('click', ()=>{
   if(mainNav.style.transform == 'scaleY(0)'){
        mainNav.style.transform = 'scaleY(1)';
        menuButton.style.transform = 'rotate(-90deg)';
    }else{
        mainNav.style.transform = 'scaleY(0)'
        menuButton.style.transform = 'rotate(0deg)';
    } 
});

//========== COUNTER 
const counter = document.getElementById('counter');
let c = 1;

const timer = setInterval(()=>{
    c++;
    counter.innerHTML=c;
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 8000);
