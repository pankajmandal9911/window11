let taskbar1= document.getElementById('home');
let startmenu= document.getElementById('startmenu');

taskbar1.addEventListener('click', function start(){
    console.log('clicked')
    if(startmenu.style.left== "-57rem"){
        startmenu.style.left ="0rem";
    }
    else{
        startmenu.style.left="-57rem";
    }
    
});
