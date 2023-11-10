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


// array di immagini e creare successivamente concatenazione
const imagesLands = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];

// dichiarare e assegnare il valore da manipolare  
const items = document.querySelector('.items');

// dichiarare e assegnare variabile per prima immagine che verrà visualizzata è in posizione 0
let currentImage = 0;

// creare per ogni immagine un elemento da inserire in DOM
for(let i = 0; i < imagesLands.length; i++) {

    // creo elementBoxImage (elemento che contiene l'immagine) da inserire in DOM
    const elementBoxImage = document.createElement('div');
    // controllo che siano state create - console.log(containerImages);
    elementBoxImage.classList.add('item');

    // condizione se indice = a currentImage a quell'elemento contenitore immagine aggiungigli la classe active quindi sempre elemento 0
    if (i === currentImage) {
        elementBoxImage.classList.add('active');
    }

    // creo elementoImmagine (elemento immagine) da inserire in DOM
    const elementImg = document.createElement('img');
    elementImg.src = `img/${imagesLands[i]}`;
    elementImg.alt = `Landscape ${i}`;
    
    // appendere elementoImg a elementContenitore
    elementBoxImage.append(elementImg);
    items.prepend(elementBoxImage);

    // (condizione) se l'indice corrente è uguale alla currentImage allora aggiungi all'elemnto la classe active
   
}

