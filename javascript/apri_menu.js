//Gestisce la visualizzazione di #menu2, il menu nascosto che appare su schermi piccoli, da 300 a 619px
function gestoreApri_Menu(){
    try{
        if(visualizzato==false){
            nodoMenu2.style.opacity = "1";
            nodoMenu2.style.visibility = "visible";
            visualizzato=true;
        } else{
            nodoMenu2.style.opacity = "0";
            nodoMenu2.style.visibility = "hidden";
            visualizzato=false;
        }
    } catch(e){
        alert("gestoreApri_Menu "+e);
    }
}

var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //Variabile booleana, inizializzata a false: sta a significare che di default #menu2 non è visualizzato

/*Nella funzione gestoreLoad sono inizializzate le variabili globali immediatamente prima dichiarate.
Inoltre è dichiarato l'evento onclick che chiama la funzione gestoreApri_Menu*/
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