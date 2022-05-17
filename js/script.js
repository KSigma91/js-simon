/*
Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

const numeriVisualizzati = document.getElementById("mio_id");
const tastoGenera = document.querySelector("button");

// genero 5 numeri in maniera randomica
tastoGenera.addEventListener("click",

    function generatoreNumeri() {
        for (let i = 0; i < 5; i++){
            let numeriRandom = Math.floor(Math.random() * 50) + 1;
            console.log(numeriRandom);
        }       
    }
);






// dopo aver generato i numeri verranno mostrati al giocatore e da lì partirà un timer di 30 secondi





// dopo 30 secondi il giocatore dovrà inserire i 5 numeri generati nel campo apposito (prompt)





// alla fine della partita il software dirà quanti e quali numeri sono stati indovinati