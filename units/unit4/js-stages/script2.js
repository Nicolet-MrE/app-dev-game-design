console.log('js connected!');

//========= GET & SET VARABLES
const mainContainer = document.getElementById('main-container');
const clickButton = document.getElementById('click-button');




//========= FUNCTION DEFINITIONS
function changeBackgroundOnClick(){
    mainContainer.style.backgroundColor = 'var(--clr-accent)';
}






//========= SET WATCHERS AND CALL FUNCTIONS
clickButton.addEventListener('click', changeBackgroundOnClick);