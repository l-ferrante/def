//la funzione recupera i le informazioni tramite il metodo get dalla barra del link, poi elimina il "?" che si trova all'inizio
function QueryString() {
    return window.location.search.slice(1);
}

//genera un numero casuale tra 1 e 21014 (capienza massima) che è sarà assegnato a quel biglietto
function generaNumero(){
    try{
        let minp=1;
        let maxp=18962;
        let mint=1;
        let maxt=2052;
        if(ultimoCarattere=="P"){
            let np = Math.floor(Math.random() * (maxp + minp));
            np=String(np);
            let nump=document.createTextNode(ultimoCarattere+" "+np);
            nodoNumero_biglietto.appendChild(nump);
        } else if(ultimoCarattere=="T"){
            let nt = Math.floor(Math.random() * (maxt + mint));
            nt=String(nt);
            let numt=document.createTextNode(ultimoCarattere+" "+nt);
            nodoNumero_biglietto.appendChild(numt);
        }        
    } catch(e){
        alert("generaNumero "+e)
    }   
}

var nodoInformazioni;
var nodoNumero_biglietto;
var nodoStampa;
var ultimoCarattere;

//inizializza le variabili e scrive su righe separate tutte le informazioni
function gestoreLoad(){
    try{
        nodoInformazioni = document.getElementById("informazioni");
        nodoNumero_biglietto=document.getElementById("numero_biglietto");
        nodoStampa=document.getElementById("stampa");

        var qs = QueryString().split('&');
        for (var i = 0; i < qs.length; i++) {
        var stringa = qs[i];
        stringa=stringa.replace(/[=+%]/g, " ");
        stringa=stringa.replace(/2B/g, "+");
        stringa=stringa.replace(/E2 82 AC/g, "€");
        let info=document.createElement("li");
        let testo=document.createTextNode(stringa);
        info.appendChild(testo);
        nodoInformazioni.appendChild(info);
        }
        ultimoCarattere=stringa[stringa.length -1]
        
        generaNumero();
        stampaPagina();

        nodoStampa.onclick=stampaPagina;

    } catch(e){
        alert("gestoreLoad "+e)
    }
    
}

window.onload = gestoreLoad;

//apre il menù stampa del browser che permette di salvare il biglietto in formato pdf o di stamparlo su carta
function stampaPagina() {
    window.print();
}
