/*La funzione gestisce le animazioni delle immagini dell'auto e del bus: l'auto compie
 l'animazione dopo 50px di scrolling, il bus dopo 150;
 inoltre la funzione gestisce anche le animazioni delle immagini del parcheggio. */
function gestoreMovimento(){ 
    try{
        if (document.documentElement.scrollTop>50) {
            nodoAuto.classList.add("movimento");
            nodoParcheggio.classList.add("ingresso");
        };
        if (document.documentElement.scrollTop>150){
            nodoBus.classList.add("movimento");
            nodoPalco_icona.classList.add("ingresso");
        }
    } catch (e){
        alert("gestoreMovimento "+e)
    }
    
}

/*La funzione gestisce l'apparizione dell'elemento #freccia_su, che dalla parte inferiore
 della pagina riporta in cima, per mezzo dell'effetto opacity. L'opacità è impostata su 0 in CSS
 e qui viene riportata a 1 (e dunque la freccia diventa visibile) solo quando lo scroll della pagina
 supera i 500 pixel */
function gestoreFreccia(){ 
    try{
        var freccia=document.getElementById("freccia_su");
        freccia.style.transition="opacity 0.2s";
        if (document.documentElement.scrollTop>500) {
        freccia.style.opacity="1";
        } else {
        freccia.style.opacity="0";
        }
    } catch (e){
        alert("gestoreFreccia "+e)
    }
    
}

/*Gestisce la visualizzazione di #menu2, il menu nascosto che appare su schermi piccoli, da 300 a 619px*/
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

// La funzione gestisce "l'evidenziazione" dei contatti nel footer dopo il clic del link #contattare
function gestoreContattare(){
    try{

        for(let i=0; i<nodoInfo.length; i++){
            nodoInfo[i].classList.add("info");
                setTimeout(function(){
                nodoInfo[i].classList.remove("info");
                nodoInfo[i].classList.add("info2");
            }
            ,30000)
        }
    } catch(e){
        alert("gestoreContattare "+e)
    }

}


var nodoAuto;
var nodoBus;
var nodoParcheggio;
var nodoPalco_icona;
var nodoInfo;

var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //variabile booleana che indica se l'elemento #menu2 appare a schermo

/*Nella funzione sono inizializzate le variabili globali immediatamente prima dichiarate*/
function gestoreScroll(){
    nodoAuto=document.getElementById("auto");
    nodoBus=document.getElementById("bus");
    nodoParcheggio=document.getElementById("parcheggio");
    nodoPalco_icona=document.getElementById("palco_icona");
    gestoreFreccia();
    gestoreMovimento();
}

/*Nella funzione sono inizializzate le variabili globali immediatamente prima dichiarate*/
function gestoreLoad(){
    try{
        nodoApri_Menu=document.getElementById("apri_menu");
        nodoMenu2=document.getElementById("menu2");
        visualizzato=false;
        nodoApri_Menu.onclick=gestoreApri_Menu;

        var nodoContattare=document.getElementById("contattare");
        nodoInfo=document.getElementsByClassName("evidenzia");
        nodoContattare.onclick=gestoreContattare;
    } catch(e){
        alert("gestoreLoad "+e);
    }
}


window.onscroll=gestoreScroll;
window.onload=gestoreLoad;





