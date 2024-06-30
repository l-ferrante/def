/*Gestisce la visualizzazione di #menu2, il menu nascosto che appare su schermi piccoli, da 400 a 619px*/
function gestoreApri_Menu(){
    if(visualizzato==false){
        nodoMenu2.style.opacity = "1";
        nodoMenu2.style.visibility = "visible";
        visualizzato=true;
    } else{
        nodoMenu2.style.opacity = "0";
        nodoMenu2.style.visibility = "hidden";
        visualizzato=false;
    }
}


var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //variabile booleana che indica se l'elemento #menu2 appare a schermo


/*Nella funzione sono inizializzate le variabili globali immediatamente prima dichiarate*/
function gestoreLoad(){
    try{
        nodoApri_Menu=document.getElementById("apri_menu");
        nodoMenu2=document.getElementById("menu2");
        visualizzato=false;
        nodoApri_Menu.onclick=gestoreApri_Menu;

    } catch(e){
        alert("gestoreLoad "+e);
    }
}

window.onload=gestoreLoad;