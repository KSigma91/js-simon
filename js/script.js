/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

var numeriGioco = document.getElementById("mio_id");
const tastoGenera = document.querySelector("button");

// genero 5 numeri in maniera randomica
for (let i = 0; i < 5; i++){
    generatoreNumeri(numeriGioco);    
}

// i numeri verranno mostrati al giocatore e da lì partirà un timer di 30 secondi
let contoRovescia = 3;

const conteggio = setInterval(
    function() {
        numeriGioco.innerHTML = contoRovescia;
        const conteggioVis = document.createElement("h1");
        conteggioVis.append(contoRovescia);
        numeriGioco.innerHTML = contoRovescia;
    }
    , 1000);



// dopo 30 secondi il giocatore dovrà inserire i 5 numeri generati nel campo apposito (prompt)
const clock = setTimeout(
    function() {
        numeriGioco.innerHTML = "";
        let indovinaNumeri;
        if(conteggio === 0){
            clearInterval(counting);
            indovinaNumeri = parseInt(prompt("Quali sono i numeri?"));
        } else {
            contoRovescia = contoRovescia - 1;
        }
    }
    , 5000);

// alla fine della partita il software dirà quanti e quali numeri sono stati indovinati
let partitaGiocatore;

if(partitaGiocatore === numeriGioco) {
    risultato = "Hai indovinato";
} else {
    risultato = "Sbagliato! Hai perso";
}





tastoGenera.addEventListener("click", function(){
    generatoreNumeri(numeriGioco);
});

function generatoreNumeri(arrayNumGen) {
    let numeriRandom = Math.floor(Math.random() * 50) + 1;
    let divElement = document.createElement("span");
    divElement.append(numeriRandom);
    numeriGioco.append(divElement);
    console.log(numeriRandom);
}













