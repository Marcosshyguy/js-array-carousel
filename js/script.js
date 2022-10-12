// **Consegna:**
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// **MILESTONE 1**
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.


// creazione array con percorso immagini

const imgPath = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"]

let slider = document.getElementById("slider");
// ciclo for per la creazione e l'inserimento delle immagini tramite template literal
for(let i = 0; i < imgPath.length; i++){
    const images = imgPath[i];
    // console.log(images);

    const imgElement = `<img class="image d-none" src="${images}">`
    slider.innerHTML += imgElement;
}

// dichiaro una variabile con queryall che vada a raggruppare le img appena vreate nel ciclo for per poi poterle gestire con i bottoni ed aggiungere classi hidden ecc.

let slide = document.getElementsByClassName("image");
// console.log(slide, slide[1],);

// ed essendo diventati degli array posso gestirli in questo caso tramiteil loro numero di indice impostando una variabile che ne indichi l'inizio

let position = 0
slide[position].classList.remove("d-none");


// dichiaro i bottoni che mi serviranno

const buttonDown = document.getElementById("button-bottom");
const buttonUp = document.getElementById("button-top");
// console.log(buttonDown, buttonUp)

// BONUS2 aggiungo con select by class le nuove immagini
const transparentImages = document.getElementsByClassName("colum-images");
console.log(transparentImages);
transparentImages[position].classList.add("focus-on-image");
// do la stessa classen di position anche ha queste immagini

// e creo il primo listener che toglierà un d none si sposterà di uno e lo riaggiungerà 

buttonDown.addEventListener("click", function(){

    if(position < slide.length - 1){
         
        slide[position].classList.add("d-none");
        transparentImages[position].classList.remove("focus-on-image");
        position++;
        slide[position].classList.remove("d-none");
        transparentImages[position].classList.add("focus-on-image");
    }
})
// creo secondo bottone con listener

buttonUp.addEventListener("click", function(){

         if(position > 0){
            transparentImages[position].classList.remove("focus-on-image");
             slide[position].classList.add("d-none");
             position--;
             slide[position].classList.remove("d-none");
             transparentImages[position].classList.add("focus-on-image");
         }
})