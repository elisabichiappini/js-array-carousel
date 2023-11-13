# Carosello Mono Array

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
![carousel](/screenshot/screenshot.JPG)

Programma:
## MILESTONE 1
- rimuovere markup statico
- add tutte le immagini dinamicamente con array 
- ciclo for=crea un template literal;
- immagini disposte a livelli diversi;
- (condizione) sei la prima img? 
--SE SI img visibile w/ classe active;
--ALTRIMENTI classe no visibile, no active;

## MILESTONE 2
- immagine 1 classe active;
- (condizione) vuoi scorrere l'img?
-- SE SI evento click su arrow allora visibile immagine successiva w/classe active;

## BONUS
### BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
### BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

### BONUS 3:
Al click sulla thumbnail, viene visualizzata l'immagine selezionata;

✨ 10_11_2023