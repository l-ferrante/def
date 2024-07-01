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


//Se qualche nodo di testo (v1, v2 o v3) fosse presente nel campo #didascalia, la funzione lo rimuove
function controlloImmagini(){
    try{
        if(v1==true){
            nodoDidascalia.removeChild(testo1);
            v1=false;
        } else if(v2==true){
            nodoDidascalia.removeChild(testo2);
            v2=false;
        } else if(v3==true){
            nodoDidascalia.removeChild(testo3);
            v3=false;
        }
    } catch(e){
        alert("controlloImmagini "+e)
    }
}

/* Al clic delle rispettive foto (#palco, #illuminazione, #console) le funzioni chiamano controlloImmagini
(che "pulisce" il campo di testo #didascalia rimuovendo qualsiasi nodo di testo) e poi
applicano il nodo di testo specifico*/
function gestorePalco() {
    try {
        if(v1==false) {
            controlloImmagini();
            nodoDidascalia.appendChild(testo1);
            v1=true;
        } else {
            nodoDidascalia.removeChild(testo1);
            v1=false;
        }
    } catch (e) {
        alert("gestorePalco " + e);
    }
}

function gestoreIlluminazione(){
    try {
        if(v2==false) {
            controlloImmagini();
            nodoDidascalia.appendChild(testo2);
            v2=true;
        } else {
            nodoDidascalia.removeChild(testo2);
            v2=false;
        }
    } catch (e) {
        alert("gestoreIlluminazione " + e);
    }
}

function gestoreConsole(){
    try {
        if(v3==false) {
            controlloImmagini();
            nodoDidascalia.appendChild(testo3);
            v3=true;
        } else {
            nodoDidascalia.removeChild(testo3);
            v3=false;
        }
    } catch (e) {
        alert("gestoreConsole " + e);
    }
}


/**/    function gestoreAvanti(){ //Gestisce il pulsante "avanti"
/**/        try{
/**/            cambiaFoto(+1);
/**/        } catch(e) {
/**/            alert("gestoreAvanti "+e)
/**/        }
/**/    }

/**/    function gestoreIndietro(){ //Gestisce il pulsante "indietro"
/**/        try{
/**/            cambiaFoto(-1);
/**/        } catch(e) {
/**/            alert("gestoreIndietro "+e)
/**/        }
/**/    }

//Al clic dei pulsanti avanti o indietro, la funzione scorre l'array galleria e mostra la foto precedente o successiva
/**/    function cambiaFoto(x){
            try{
                nodoFoto.style.opacity=0; // Imposta l'opacità a 0 per iniziare la transizione
                setTimeout(function() {
/**/                indiceFoto+=x;
/**/                if(indiceFoto==numeroFoto){
/**/                    indiceFoto=0;
/**/                }
/**/                if(indiceFoto<0){
/**/                    indiceFoto=numeroFoto-1;
/**/                }
/**/                nodoFoto.setAttribute("src", galleria[indiceFoto]);
                    nodoFoto.style.opacity=1;
                },1000); // Aspetta 1 secondo prima di cambiare l'immagine, realizzando così una transizione
            } catch (e){
                alert("cambiaFoto "+e)
            }   
        }


//Gestisce lo scorrimento automatico delle foto
/**/    function cambiaFotoInAutomatico(){
/**/        try{
/**/            cambiaFoto(+1);
/**/        } catch (e){
/**/            alert("cambiaFotoInAutomatico "+e);
/**/        }
/**/    }


//La funzione crea l'animazione di incremento numeri al caricamento della pagina
function incrementaNumeri(){
    try{
        if(numero<numeroMassimo){
            numero=numero+499;
            nodoN.value=numero;
        }else{
            clearInterval(intervallo);
        }
        if(numero2<numeroMassimo2){
            numero2=numero2+76;
            nodoN2.value=numero2;
        } else{
            clearInterval(intervallo2);
        }
        nodoTotale.value=numero+numero2;
    }catch(e){
        alert("incrementaNumeri "+e);
    }

}


//Variabili che gestiscono il funzionamento del carosello
/**/    const RITARDO=5000; //5 secondi
/**/    var nodoIndietro;
/**/    var nodoAvanti;
/**/    var indiceFoto;
/**/    var automatico;
/**/    var numeroFoto;
/**/    var nodoFoto
        var timer;

        var galleria=[
            "media/carosello2/1.png",
            "media/carosello2/2.png",
            "media/carosello2/3.png",
            "media/carosello2/4.png",
        ];

//Variabili che si riferiscono al menu nascosto (#menu2) che appare su schermi piccoli (da 300 a 619px)
var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //Variabile booleana, inizializzata a false: sta a significare che di default #menu2 non è visualizzato

//Variabili che si riferiscono alla gestione delle foto in #testo2
var nodoPalco;
var nodoIlluminazione;
var nodoConsole;
var nodoDidascalia;
var v1;
var v2;
var v3;
var testo1;
var testo2;
var testo3;

//Variabili che si riferiscono all'animazione di incremento numeri
var nodoN;
var nodoN2;
var nodoTotale;
var numero;
var numeroMassimo;
var intervallo;
var numero2;
var numeroMassimo2;
var intervallo2;
var totale;

//Si riferisce all'elemento #freccia_su
var freccia;


/*Nel gestoreLoad sono inizializzate le variabili globali definite immediatamente sopra.
Inoltre, qui sono posizioneti gli EventListener mouseover e mouseout che interrompono lo
scorrimento delle foto nel carosello quando il mouse è sulla foto e lo riprendono quando
il mouse esce dalla foto*/
/**/        function gestoreLoad(){
/**/            try{
/**/                nodoIndietro=document.getElementById("indietro");
/**/                nodoAvanti=document.getElementById("avanti");
/**/                nodoFoto=document.getElementById("foto2");
/**/                numeroFoto=galleria.length;
/**/                automatico=true; //di default è attivo lo scorrimento automatico
/**/                indiceFoto=0;
            
/**/                nodoIndietro.onclick=gestoreIndietro;
/**/                nodoAvanti.onclick=gestoreAvanti;

/**/                cambiaFotoInAutomatico();
                    
                    // Quando il mouse entra nell'area dell'immagine, interrompe lo scorrimento delle foto
                    nodoFoto.addEventListener("mouseover", function() {
                        clearTimeout(timer); // Interrompe il timer
                    });
                    // Quando il mouse esce dall'area dell'immagine, riprende lo scorrimento delle foto
                    nodoFoto.addEventListener("mouseout", function() {
                        timer=setTimeout(cambiaFotoInAutomatico, RITARDO); // Riprende il timer
                    });

                    nodoApri_Menu=document.getElementById("apri_menu");
                    nodoMenu2=document.getElementById("menu2");
                    visualizzato=false;
                    nodoApri_Menu.onclick=gestoreApri_Menu;

                    nodoPalco=document.getElementById("palco");
                    nodoIlluminazione=document.getElementById("illuminazione");
                    nodoConsole=document.getElementById("console");
                    nodoDidascalia=document.getElementById("didascalia");
                    v1=false;
                    v2=false;
                    v3=false;
                    testo1=document.createTextNode("Il palco brilla sotto i riflettori LED: 200 metri quadrati di colori che danzano a ritmo di musica.");
                    testo2=document.createTextNode("Con un impianto di illuminazione all’avanguardia, ogni esibizione si trasforma in un’esperienza indimenticabile, in cui ogni nota brilla di luce propria.");
                    testo3=document.createTextNode("L'impianto acustico è il cuore pulsante del vostro intrattenimento. Con tecnologie all’avanguardia e una console di mixaggio di ultima generazione, garantiamo un suono cristallino che avvolge ogni angolo dell'Arena.");

                    nodoPalco.onclick=gestorePalco;
                    nodoIlluminazione.onclick=gestoreIlluminazione;
                    nodoConsole.onclick=gestoreConsole;

                    nodoN=document.getElementById("N");
                    nodoN2=document.getElementById("N2");
                    nodoTotale=document.getElementById("tot");
                    numero=0;
                    numeroMassimo=18500;
                    intervallo=setInterval(incrementaNumeri, 100);
                    numero2=0;
                    numeroMassimo2=2000;
                    intervallo2=setInterval(incrementaNumeri, 5000);
                    totale=0;

                    incrementaNumeri();

                    freccia=document.getElementById("freccia_su");
                } catch(e){
                    alert("gestoreLoad "+e);
                }
            }

window.onload=gestoreLoad;
window.onscroll=gestoreFreccia;