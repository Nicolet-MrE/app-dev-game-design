window.onload = (e)=>{
    console.log("onload complete");
};

document.addEventListener("DOMContentLoaded", (e)=>{
    console.log("DOM loaded!")
    const sidebar = document.getElementById('sidebar-menu');
    const menuButton = document.getElementById('ham-menu');

    menuButton.addEventListener('click', ()=>{
        sidebar.classList.toggle('off-screen');
        console.log('toggled menu');
    });   

});