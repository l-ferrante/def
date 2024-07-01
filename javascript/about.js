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


/*La funzione gestisce l'apparizione dell'elemento freccia_su, che dalla parte inferiore
 della pagina riporta in cima, per mezzo dell'effetto opacity. L'opacità è impostata su 0 in CSS
 e qui viene riportata a 1 (e dunque la freccia diventa visibile) solo quando lo scroll della pagina
 supera i 500 pixel.*/
 function gestoreFreccia(){ 
    try{
        freccia.style.transition="opacity 0.2s";
        if (document.documentElement.scrollTop > 500) {
        freccia.style.opacity="1";
        } else {
        freccia.style.opacity="0";
        }
    } catch (e){
        alert("gestoreFreccia "+e);
    }
}

//Variabili che si riferiscono al menu nascosto (#menu2) che appare su schermi piccoli (da 300 a 619px)
var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //Variabile booleana, inizializzata a false: sta a significare che di default #menu2 non è visualizzato


//Si riferisce all'elemento #freccia_su
var freccia;


function gestoreLoad(){
    try{
        nodoApri_Menu=document.getElementById("apri_menu");
        nodoMenu2=document.getElementById("menu2");
        visualizzato=false;
        nodoApri_Menu.onclick=gestoreApri_Menu;

        freccia=document.getElementById("freccia_su");
    } catch(e){
        alert("gestoreLoad "+e);
    }
}

window.onload=gestoreLoad;
window.onscroll=gestoreFreccia;