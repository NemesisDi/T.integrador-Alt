let boton = document.getElementById("menu");
let enlaces = document.getElementById("enlaces");
let contador= 0;

boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ('listado dos');
        contador ++;
    } else{
        enlaces.classList.remover = ('listado dos');
        enlaces.className = ('listado uno');
        contador = 0;
    }
});