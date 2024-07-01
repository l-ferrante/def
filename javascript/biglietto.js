/*Se l'utente compra un biglietto per un posto in piedi (ultimoCarattere==P), la funzione genera un numero casuale
tra 1 e 18962; se il posto scelto dall'utente è a sedere, la funzione genera un numero casuale tra 1 e 2052*/
function generaNumero(){
    try{
        let minP=1;
        let maxP=18962;
        let minT=1;
        let maxT=2052;
        if(ultimoCarattere=="P"){
            let nP = Math.floor(Math.random() * (maxP + minP));
            nP=String(nP);
            let numP=document.createTextNode(ultimoCarattere+" "+nP);
            nodoNumero_biglietto.appendChild(numP);
        } else if(ultimoCarattere=="T"){
            let nT = Math.floor(Math.random() * (maxT + minT));
            nT=String(nT);
            let numT=document.createTextNode(ultimoCarattere+" "+nT);
            nodoNumero_biglietto.appendChild(numT);
        }        
    } catch(e){
        alert("generaNumero "+e)
    }   
}

//Apre il menù stampa del browser che permette di salvare il biglietto in formato pdf o di stamparlo su carta
function stampaPagina() {
    try{
        window.print();
    } catch(e){
        alert("stampaPagina "+e)
    }
}

/*La funzione recupera le informazioni (tramite metodo get) dalla barra del link,
poi elimina il "?" che si trova all'inizio. Questa funzione, come anche parte del gestoreLoad,
è ripresa quasi integralmente dal materiale del professor Carlini*/
function QueryString() {
    return window.location.search.slice(1);
}


var nodoInformazioni;
var nodoNumero_biglietto;
var nodoStampa;
var ultimoCarattere;
var qs;
var stringa;

/*Inizializza le variabili e scrive su righe separate tutte le informazioni recuperate con metodo get;
poi chiama le altre funzioni*/
function gestoreLoad(){
    try{
        nodoInformazioni = document.getElementById("informazioni");
        nodoNumero_biglietto=document.getElementById("numero_biglietto");
        nodoStampa=document.getElementById("stampa");

        qs=QueryString().split('&');
        for (let i=0; i<qs.length; i++) {
            stringa=qs[i];
            stringa=stringa.replace(/[=+%]/g, " ");
            stringa=stringa.replace(/2B/g, "+");
            stringa=stringa.replace(/E2 82 AC/g, "€");
            stringa=stringa.replace(/3A/g, ":");
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