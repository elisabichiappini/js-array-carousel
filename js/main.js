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
const imagesLands = ['land1.jpg', 'land2.jpg', 'land3.jpg', 'land4.jpg', 'land5.jpg'];
// dichiarare e assegnare il valore da manipolare  
const items = document.querySelector('.items');
// creare per ogni immagine un elemento da inserire in DOM
for(let i = 0; i < imagesLands.length; i++) {
    // creo elemento contenitore
    const elementBoxImage = document.createElement('div');
        // controllo che siano state create
        // console.log(containerImages);
    elementBoxImage.classList.add('boximage');

    
}

