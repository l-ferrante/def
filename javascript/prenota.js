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

        //Genera dinamicamente le option del select #concerti
/**/        function creaSelect (nodoSelect, opzioni){
/**/            for (let opzione in opzioni){
/**/                let nodoOpzione=document.createElement("option");
/**/                let nodoTesto=document.createTextNode(opzione);
/**/                nodoOpzione.appendChild(nodoTesto);
/**/                nodoSelect.appendChild(nodoOpzione);

                    if(opzione=="Seleziona un evento"){
                        nodoOpzione.setAttribute("disabled", "disabled");
                    }
                }
            }

        //Genera dinamicamente le option del select #settori
/**/        function creaSelect2 (nodoSettori, opzioni2){
/**/            for (let opzione2 in opzioni2){
/**/                let nodoOpzione2=document.createElement("option");
/**/                let nodoTesto2=document.createTextNode(opzione2);
/**/                nodoOpzione2.appendChild(nodoTesto2);
/**/                nodoSettori.appendChild(nodoOpzione2);
                }
            }

//Gestisce la visualizzazione e le variazioni del prezzo del biglietto
function gestorePrezzo(){
    try{
        concertoSelezionato=nodoConcerti.options[nodoConcerti.selectedIndex].value;
        prezzoCorrente=CONCERTI[concertoSelezionato];
        settoreSelezionato=nodoSettori.options[nodoSettori.selectedIndex].value;
        settoreCorrente=SETTORI[settoreSelezionato];
        if(nodoP_1.checked){
            nodoSelezione.style.display="none";
            nodoSelezione.removeAttribute("class", "ingresso");
            nodoControllo.value="P"
            nodoPrezzo.value=prezzoCorrente*nodoN_biglietti.value;
        } else if (nodoP_2.checked){
            nodoSelezione.style.display="grid";
            nodoSelezione.setAttribute("class", "ingresso");
            nodoControllo.value="T";
            nodoPrezzo.value=(prezzoCorrente*nodoN_biglietti.value)+(nodoN_biglietti.value*settoreCorrente);
        }
    } catch(e){
        alert("gestorePrezzo "+e)
    }
}

//Gestisce la presenza o l'assenza del riquadro per l'inserimento del numero di carta di credito
function gestoreCartaCredito(){
    try{
        if(nodoMetodo_pagamento.options[nodoMetodo_pagamento.selectedIndex].value=="Carta di credito"){
            carta=true;
        } else{
            carta=false
        }

        if(carta==false){
            nodoN_carta.removeAttribute("required")
            nodoN_carta.style.display="none";
            nodoN_carta_.style.display="none";
            nodoN_carta.name="";
            nodoN_carta.value="";
            nodoMetodo_pagamento.style.gridColumn = "1/3";
            nodoPaga.value="Continua"
        } else{
            nodoN_carta.style.display="inline";
            nodoN_carta_.style.display="flex";
            nodoN_carta.setAttribute("required", "");
            nodoIcona_carta.setAttribute("class", "icona");
            nodoPaga.value="Paga e continua";
                if (window.innerWidth<620) {
                    nodoMetodo_pagamento.style.gridColumn = "1/3";
                } else {
                    nodoMetodo_pagamento.style.gridColumn = "1/2";
                }
        }
    } catch(e){
        alert ("gestoreCartaCredito "+e)
    }
    
}


//Azzera il numero di campi di inserimento dati e chiama la funzione che li genera (gestoreDati)
function azzeraDati(){
    try{
        let nomi_nuovi=document.getElementsByClassName("nome_nuovo");
        let cognomi_nuovi=document.getElementsByClassName("cognome_nuovo");
        let contenitore_nuovo=document.getElementsByClassName("contenitore_nuovo");

        while((nomi_nuovi.length)!=0 && (cognomi_nuovi.length)!=0 && (contenitore_nuovo.length)!=0){
            nomi_nuovi[nomi_nuovi.length-1].remove();
            cognomi_nuovi[cognomi_nuovi.length-1].remove();
            contenitore_nuovo[contenitore_nuovo.length-1].remove();
        }

        gestoreDati();
    } catch(e){
        alert("azzeraDati "+e)
    }
    
}

//Genera ulteriori campi di testo per l'inserimento dei dati degli acquirenti, in numero pari ai biglietti richiesti
function gestoreDati(){
    try{
        let n = nodoN_biglietti.value;
        if(n<=0){
            alert("Attenzione! Selezionare un valore maggiore di 0");
            nodoN_biglietti.value=1;
        } else if (n>10){
            alert("Il numero massimo di biglietti acquistabili è 10");
            nodoN_biglietti.value=1;
        } else{
            for(let i=2; i<=n; i++){
                let contenitore=document.createElement("div");
                let nuovaIcona=document.createElement("img");
                let nuovaPersona=document.createElement("span");
                let nuova_persona=document.createTextNode("Persona "+i);

                contenitore.setAttribute("class", "contenitore_nuovo");
                nuovaIcona.setAttribute("src", "media/icone/gruppo.png");
                nuovaIcona.setAttribute("class", "icona_nuovo");

                contenitore.appendChild(nuovaIcona);
                nuovaPersona.appendChild(nuova_persona);
                contenitore.appendChild(nuovaPersona);

                let nuovoNome = document.createElement("input");
                nuovoNome.setAttribute("id", "nome" + i);
                nuovoNome.setAttribute("required", "");
                nuovoNome.setAttribute("placeholder", "Nome");
                nuovoNome.setAttribute("class", "nome_nuovo");
                nuovoNome.setAttribute("name", "Nome" + i);

                let nuovoCognome = document.createElement("input");
                nuovoCognome.setAttribute("id", "cognome" + i);
                nuovoCognome.setAttribute("required", "");
                nuovoCognome.setAttribute("placeholder", "Cognome");
                nuovoCognome.setAttribute("class", "cognome_nuovo");
                nuovoCognome.setAttribute("name", "Cognome" + i);

                nodoDati.appendChild(contenitore);
                nodoDati.appendChild(nuovoNome);
                nodoDati.appendChild(nuovoCognome);
            }
        }
        gestorePrezzo();
    } catch(e){
        alert("gestoreDati "+e)
    }
}

var nodoConcerti;
var nodoN_biglietti;
var nodoDati;
var nodoNome;
var nodoCognome;
var nodoMetodo_pagamento;
var nodoN_carta;
var nodoN_carta_;
var nodoPrezzo;
var nodoIcona_carta;
var nodoPaga;
var nodoP_1;
var nodoP_2;
var nodoControllo;
var seleziona_evento;
var nodoSelezione;
var nodoSettori;

var concertoSelezionato;
var postoSelezionato;
var prezzoCorrente;
var settoreCorrente;
var settoreSelezionato;
var carta; //valore booleano: se true il metodo di pagamento selezionato è la carta di credito

//Variabili che si riferiscono al funzionamento del menu nasconsto su schermi piccoli (da 300 a 619px)
var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //variabile booleana che indica se l'elemento #menu2 appare a schermo

const CONCERTI={
    "Seleziona un evento":"",
    "Cesare Cremonini - 6 luglio 2024":35,
    "Oasis - 13 luglio 2024":55,
    "Fulminacci - 20 luglio 2024":25,
    "Adele - 27 luglio 2024":50,
    "Calcutta - 3 agosto 2024":30,
    "Jovanotti - 10 agosto 2024":35
};

const SETTORI={
    "Seleziona un settore":"",
    "Settore blu +5€":5,
    "Settore viola +10€":10,
    "Settore giallo +5€":5,
    "Settore verde +10€":10,
    "Settore rosso +15€":15,
    "Settore arancione +10€":10
}

        /*nel gestoreLoad sono inizializzate tutte le variabili globali definite immediatamente sopra.
        Inoltre, qui sono posizioneti gli EventListener mouseover e mouseout che interrompono lo slideshow quando
        il mouse è sulla foto e lo riprendono quando il mouse esce dalla foto
        */
        
        function gestoreLoad(){
            try{
                nodoConcerti=document.getElementById("concerti");
                nodoN_biglietti=document.getElementById("n_biglietti");
                nodoDati=document.getElementById("dati");
                nodoNome=document.getElementById("nome");
                nodoCognome=document.getElementById("cognome");
                nodoMetodo_pagamento=document.getElementById("metodo_pagamento");
                nodoMetodo_pagamento.selectedIndex="Carta di credito";
                nodoN_carta=document.getElementById("n_carta");
                nodoN_carta_=document.getElementById("n_carta_")
                nodoPrezzo=document.getElementById("prezzo");
                nodoIcona_carta=document.getElementById("icona_carta");
                nodoPaga=document.getElementById("paga");
                nodoP_1=document.getElementById("p_1");
                nodoP_2=document.getElementById("p_2");
                nodoControllo=document.getElementById("controllo");
                nodoSelezione=document.getElementById("selezione_posto");
                nodoSettori=document.getElementById("settori");
                nodoControllo.value="P"
                nodoP_1.checked=true;
                nodoNome.value="";
                nodoCognome.value="";
                nodoN_carta.value="";
                nodoN_biglietti.value=1;
                nodoPrezzo.value="";
                nodoPaga.value="Paga e continua";

                creaSelect(nodoConcerti, CONCERTI);
                creaSelect2(nodoSettori, SETTORI);
            
                nodoConcerti.onchange=gestorePrezzo;
                nodoSettori.onchange=gestorePrezzo;
                nodoP_1.onchange=gestorePrezzo;
                nodoP_2.onchange=gestorePrezzo;
                nodoN_biglietti.onchange=azzeraDati;
                nodoMetodo_pagamento.onchange=gestoreCartaCredito;


                nodoApri_Menu=document.getElementById("apri_menu");
                nodoMenu2=document.getElementById("menu2");
                visualizzato=false;
                nodoApri_Menu.onclick=gestoreApri_Menu;
            }catch(e){
                alert("gestoreLoad "+e)
            }
        }


window.onload=gestoreLoad;