console.log('js connected!');

//========= GET & SET VARABLES
const mainContainer = document.getElementById('main-container');
const clickButton = document.getElementById('click-button');


//========= FUNCTION DEFINITIONS
function changeBackgroundOnClick(){
    console.log('clicked!')
    if(mainContainer.style.backgroundColor != 'var(--clr-accent)'){
        mainContainer.style.backgroundColor = 'var(--clr-accent)';
    }else{
        mainContainer.style.backgroundColor = '';
    }
}

//========= SET WATCHERS AND CALL FUNCTIONS
clickButton.addEventListener('click', changeBackgroundOnClick);


//===========  BONUS CHALLENGE
const menuButton = document.getElementById('ham-container');
const mainNav = document.getElementById('main-nav');
function openMenu(){
    if(mainNav.style.transform == 'scaleY(0)'){
        mainNav.style.transform = 'scaleY(1)';
        menuButton.style.transform = 'rotate(-90deg)';
    }else{
        mainNav.style.transform = 'scaleY(0)'
        menuButton.style.transform = 'rotate(0deg)';
    }
}
menuButton.addEventListener('click', openMenu);

//========== COUNTER 
function myCounter(){
    c++;
    counter.innerHTML=c;
}
let c = 1;
const timer = setInterval(myCounter, 1000);
