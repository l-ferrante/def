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


//Genera dinamicamente le option del select #concerti
/**/        function creaSelect (nodoSelect, opzioni){
                try{
/**/                for (let opzione in opzioni){
/**/                    let nodoOpzione=document.createElement("option");
/**/                    let nodoTesto=document.createTextNode(opzione);
/**/                    nodoOpzione.appendChild(nodoTesto);
/**/                    nodoSelect.appendChild(nodoOpzione);

                        if(opzione=="Seleziona un evento"){
                            nodoOpzione.setAttribute("disabled", "disabled");
                        }
                    }
                } catch(e){
                    alert("creaSelect (concerti) "+e);
                }
            }

        //Genera dinamicamente le option del select #settori
/**/        function creaSelect2 (nodoSettori, opzioni2){
                try{
/**/                for (let opzione2 in opzioni2){
/**/                    let nodoOpzione2=document.createElement("option");
/**/                    let nodoTesto2=document.createTextNode(opzione2);
/**/                    nodoOpzione2.appendChild(nodoTesto2);
/**/                    nodoSettori.appendChild(nodoOpzione2);

                        if(opzione2=="Seleziona un settore"){
                            nodoOpzione2.setAttribute("disabled", "disabled");
                        }
                    }
                } catch(e){
                    alert("creaSelect2 (settori) " +e);
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
            nodoSettori.removeAttribute("name");
            nodoSelezione.style.display="none";
            nodoSelezione.removeAttribute("class", "ingresso");
            nodoControllo.value="P"
            nodoPrezzo.value=prezzoCorrente*nodoN_biglietti.value;
        } else if (nodoP_2.checked){
            nodoSettori.setAttribute("name", "Settori:")
            nodoSelezione.style.display="grid";
            nodoSelezione.setAttribute("class", "ingresso");
            nodoControllo.value="T";
            nodoPrezzo.value=(prezzoCorrente*nodoN_biglietti.value)+(nodoN_biglietti.value*settoreCorrente);
        }
    } catch(e){
        alert("gestorePrezzo "+e);
    }
}

//Gestisce la presenza o l'assenza del riquadro di input per l'inserimento del numero di carta di credito
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
            nodoPaga.value="Continua";
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
        alert ("gestoreCartaCredito "+e);
    }
    
}


/*Al variare del numero dei biglietti (nodoN_biglietti.onchange),
azzera il numero di campi di inserimento dati (nome e cognome) e invoca la funzione che li genera (gestoreDati)*/
function azzeraDati(){
    try{
        let nomi_nuovi=document.getElementsByClassName("nome_nuovo");
        let cognomi_nuovi=document.getElementsByClassName("cognome_nuovo");
        let contenitori_nuovi=document.getElementsByClassName("contenitore_nuovo");

        while((nomi_nuovi.length)!=0 && (cognomi_nuovi.length)!=0 && (contenitori_nuovi.length)!=0){
            nomi_nuovi[nomi_nuovi.length-1].remove();
            cognomi_nuovi[cognomi_nuovi.length-1].remove();
            contenitori_nuovi[contenitori_nuovi.length-1].remove();
        }
        gestoreDati();
    } catch(e){
        alert("azzeraDati "+e);
    }
}

//Genera ulteriori campi di testo per l'inserimento dei dati degli acquirenti, in numero pari ai biglietti richiesti
function gestoreDati(){
    try{
        let n=nodoN_biglietti.value;
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
                nuovoNome.setAttribute("name", "Nome " + i+": ");

                let nuovoCognome = document.createElement("input");
                nuovoCognome.setAttribute("id", "cognome" + i);
                nuovoCognome.setAttribute("required", "");
                nuovoCognome.setAttribute("placeholder", "Cognome");
                nuovoCognome.setAttribute("class", "cognome_nuovo");
                nuovoCognome.setAttribute("name", "Cognome " + i+": ");

                nodoDati.appendChild(contenitore);
                nodoDati.appendChild(nuovoNome);
                nodoDati.appendChild(nuovoCognome);
            }
            if(n!=1){ //Cioè: se l'utente compra un solo biglietto, i name rimangono "Nome:" e "Cognome:"; se i biglietti acquistati sono più di uno, i name cambiano in "Nome 1:" e "Cognome 1:", di riflesso rispetto a "Nome 2:" e "Cognome 2:", ecc...
                nodoNome.name="Nome 1:";
                nodoCognome.name="Cognome 1:";
            }
        }
        gestorePrezzo();
    } catch(e){
        alert("gestoreDati "+e);
    }
}

//Si riferisce all'elemento #freccia_su
var freccia;

/*Variabili che si riferiscono al calcolo del prezzo del/dei biglietto/i e alla generazione dei campi
di input dati (nome e cognome), così come quello del numero della carta di credito*/
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
var carta; //Variabile booleana: se true il metodo di pagamento selezionato è la carta di credito (di default è true)

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
    "Settore blu +€5 a persona":5,
    "Settore viola +€10 a persona":10,
    "Settore giallo +€5 a persona":5,
    "Settore verde +€10 a persona":10,
    "Settore rosso +€15 a persona":15,
    "Settore arancione +€10 a persona":10
};

//Variabili che si riferiscono al funzionamento del menu nasconsto su schermi piccoli (da 300 a 619px)
var nodoApri_Menu;
var nodoMenu2;
var visualizzato; //variabile booleana che indica se l'elemento #menu2 appare a schermo


/*Nel gestoreLoad sono inizializzate le variabili globali definite immediatamente sopra.
Inoltre, qui sono invocate le altre funzioni e inizializzati diversi eventi*/        
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
        freccia=document.getElementById("freccia_su");
        nodoControllo.value="P"
        nodoP_1.checked=true;
        nodoNome.value="";
        nodoCognome.value="";
        nodoNome.name="Nome:";
        nodoCognome.name="Cognome:";
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
        alert("gestoreLoad "+e);
    }
}

window.onload=gestoreLoad;
window.onscroll=gestoreFreccia;