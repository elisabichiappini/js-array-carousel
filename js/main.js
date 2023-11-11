/********************************* FILE JS ****************************************/

// Programma:
// ## MILESTONE 1
// - rimuovere markup statico (togli immagine)
// - add tutte le immagini dinamicamente con array 
// - ciclo for=crea un template literal;
// - immagini disposte a livelli diversi;
// - (condizione) sei la prima img? 
// --SE SI img visibile w/ classe active;
// --ALTRIMENTI classe no visibile, no active;

// ## MILESTONE 2
// - immagine 1 classe active;
// - (condizione) vuoi scorrere l'img?
// -- SE SI evento click su arrow allora visibile immagine successiva w/classe active;


// 1) array di immagini e creare successivamente concatenazione
const imagesLands = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// 2) dichiarare e assegnare il valore da manipolare  
const items = document.querySelector('.items');

// 7) dichiarare e assegnare variabile per prima immagine che verrà visualizzata è in posizione 0
let currentImage = 0;

// 9) creo collegamento Prev e Next a elementoPrev e elementoNext dichiarando e assegnandoli una variabile
const elementPrev = document.querySelector('.prev');
const elementNext = document.querySelector('.next');

// 3) creare per ogni immagine un elemento da inserire in DOM
for(let i = 0; i < imagesLands.length; i++) {

    // 4) creo elementBoxImage (elemento che contiene l'immagine) da inserire in DOM
    const elementBoxImage = document.createElement('div');
    // controllo che siano state create - console.log(containerImages);
    elementBoxImage.classList.add('item');

    // 8) condizione se indice = currentImage allora a elementBoxImage add classe active in DOM
    if (i === currentImage) {
        elementBoxImage.classList.add('active');
    };

    // 5) creo elementoImmagine (elemento immagine) da inserire in DOM
    const elementImg = document.createElement('img');
    elementImg.src = `img/${imagesLands[i]}`;
    elementImg.alt = `Landscape ${i}`;
    
    // 6) appendere elementoImg a elementContenitore in DOM
    elementBoxImage.append(elementImg);
    items.append(elementBoxImage);
};


// 11) prendere più valori interni nel dom (NodeList) per manipolarli
const elementBoxesImagesDom = document.querySelectorAll('.item');
console.log(elementBoxesImagesDom);

// 10) genero EVENTO di click su elementPrev e elementNext 
elementNext.addEventListener('click',
function () {
console.log('ho cliccato su next');
// 12) condizione currentImage è inferiore a il NodeList allora incremento currentImage di 1, essendo possibile cliccare fino al penultimo elemento aggiungo -1
if (currentImage < elementBoxesImagesDom.length-1) {
    // 13) per visualizzare l'immagine quindi classe active segue currentImage che man mano incrementa al click
    // nello specifico: prendimi di elementBoxesImagesDom l'immagineCurrent (0) e rimuovi active
    elementBoxesImagesDom[currentImage].classList.remove('active');
    // incrementa currentImage
    currentImage++;
    // riprendimi di elementBoxesImagesDom l'immagineCurrent (1 perchè incrementata) e aggiungi active
    elementBoxesImagesDom[currentImage].classList.add('active');
}
});
elementPrev.addEventListener('click',
function () {
console.log('ho cliccato su prev');

// 13) condizione currentImage > 0 è possibile decrementare currentImage
if (currentImage > 0) {
    // 13) per visualizzare l'immagine quindi classe active segue currentImage che man mano incrementa al click
    // nello specifico: prendimi di elementBoxesImagesDom l'immagineCurrent (0) e rimuovi active
    elementBoxesImagesDom[currentImage].classList.remove('active');
    // incrementa currentImage
    currentImage--;
    // riprendimi di elementBoxesImagesDom l'immagineCurrent (1 perchè incrementata) e aggiungi active
    elementBoxesImagesDom[currentImage].classList.add('active');
}
});