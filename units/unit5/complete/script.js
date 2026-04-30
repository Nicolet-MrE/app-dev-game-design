console.log('script.js connected!');
//===  MENU CONTROLS ====
const menuBox = document.getElementById('menu-box');
const menuButton = document.getElementById('menu-button');
let open = false;

function toggleMenu(){
    console.log('toggle triggered');
    if(!open){
        menuBox.style.transform = 'translateX(0)';
        open = true;
        console.log('open');
    }else{
        menuBox.style.transform = 'translateX(150%)';
        open = false;
        console.log('closed');
    }
}

menuButton.addEventListener('click', toggleMenu);

//=== BUTTON CONTROLS ===
const restartButton = document.getElementById('restart');
const attackButton = document.getElementById('attack-button');
const charmButton = document.getElementById('charm-button');
const retreatButton = document.getElementById('retreat-button');
const npcTextContainer = document.getElementById('npc-text-container');
const playerTextContainer = document.getElementById('player-text-container');

let attackMessage = "<p>THAT'S ROBBERY!</p>";
let charmMessage = '<p>Any chance I can get a discount, dear sir?</p>';
let retreatMessage = "<p>No thank you! I'm out of here.</p>";

restartButton.addEventListener('click', function(){
    window.location.reload();
});

attackButton.addEventListener('click', (e)=>{
    playerTextContainer.innerHTML += attackMessage;
    setTimeout(()=>{
        npcTextContainer.innerHTML += '<p>HOW DARE YOU!</p>';
    }, 1000);
});

charmButton.addEventListener('click', (e)=>{
    playerTextContainer.innerHTML += charmMessage;
    setTimeout(()=>{
        npcTextContainer.innerHTML += '<p>Well Ok!  But just for you!</p>';
    }, 1000);
});

retreatButton.addEventListener('click', (e)=>{
    playerTextContainer.innerHTML += retreatMessage;
    setTimeout(()=>{
        npcTextContainer.innerHTML += '<p>Ok. Have a great day!</p>';
    }, 1000);
});