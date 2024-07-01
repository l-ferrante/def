/*La funzione gestisce l'apparizione dell'elemento freccia_su, che dalla parte inferiore
 della pagina riporta in cima, per mezzo dell'effetto opacity. L'opacità è impostata su 0 in CSS
 e qui viene riportata a 1 (e dunque la freccia diventa visibile) solo quando lo scroll della pagina
 supera i 500 pixel.
*/
function gestoreFreccia(){ 
    try{
        var freccia=document.getElementById("freccia_su");
        freccia.style.transition="opacity 0.2s";
        if (document.documentElement.scrollTop > 500) {
        freccia.style.opacity="1";
        } else {
        freccia.style.opacity="0";
        }

    } catch (e){
        alert("gestoreFreccia "+e)
    }
}

window.onscroll=gestoreFreccia;