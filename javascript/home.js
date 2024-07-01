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

        /*Al clic dei pulsanti avanti o indietro, la funzione scorre l'array galleria e mostra la foto precedente o successiva*/
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
                },1000); // Aspetta 1 secondo prima di cambiare l'immagine
            } catch (e){
                alert("cambiaFoto "+e)
            }
        }

        /*Gestisce lo scorrimento automatico delle foto*/
/**/    function cambiaFotoInAutomatico(){
/**/        try{
/**/            cambiaFoto(+1);
                timer=setTimeout(cambiaFotoInAutomatico, RITARDO); //Serve a gestire gli eventi mouseover e mouseout (vedi giù, nel gestoreLoad)
/**/        } catch (e){
/**/            alert("cambiaFotoInAutomatico "+e);
/**/        }
/**/    }


//Variabili che gestiscono il funzionamento del carosello
/**/    const RITARDO=5000; //5 secondi
/**/    var nodoIndietro;
/**/    var nodoAvanti;
/**/    var indiceFoto; //È l'indice nell'array della foto visualizzata
/**/    var automatico; //Vale true: lo scorrimento automatico delle foto è attivo
/**/    var numeroFoto;
/**/    var nodoFoto
        var timer;

        var galleria=[
            "media/carosello/cremonini.png",
            "media/carosello/oasis.png",
            "media/carosello/fulminacci.png",
            "media/carosello/adele.png",
            "media/carosello/calcutta.png",
            "media/carosello/jovanotti.png",
        ];


//Variabili che gestiscono il menu nascosto (#menu2) che appare su schermi piccoli (da 400 a 619px)
var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //Variabile booleana che indica se l'elemento #menu2 appare a schermo

        /*nel gestoreLoad sono inizializzate tutte le variabili globali definite immediatamente sopra.
        Inoltre, qui sono posizioneti gli EventListener mouseover e mouseout che interrompono lo slideshow quando
        il mouse è sulla foto e lo riprendono quando il mouse esce dalla foto*/
/**/    function gestoreLoad(){
/**/        try{
/**/            nodoIndietro=document.getElementById("indietro");
/**/            nodoAvanti=document.getElementById("avanti");
/**/            nodoFoto=document.getElementById("foto");
/**/            
/**/            nodoIndietro.onclick=gestoreIndietro;
/**/            nodoAvanti.onclick=gestoreAvanti;
/**/            numeroFoto=galleria.length;
/**/            automatico=true; //Di default è attivo lo scorrimento automatico
/**/            indiceFoto=0;
/**/
/**/            cambiaFotoInAutomatico();
/**/            
                // Quando il mouse entra nell'area dell'immagine, interrompe lo slideshow
                nodoFoto.addEventListener('mouseover', function() {
                    clearTimeout(timer); // Interrompe il timer
                });

                // Quando il mouse esce dall'area dell'immagine, riprende lo slideshow
                nodoFoto.addEventListener('mouseout', function() {
                    timer=setTimeout(cambiaFotoInAutomatico, RITARDO); // Riprende il timer
                });

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