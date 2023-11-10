/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* I datatype in JS sono dei valori che si assegnano a una determinata variabile. ovvero un contenitore che è stato creato da noi nel codice.
Questi valori sono di vario tipo: ci sono i dati Number, ovvero dei valori numerici; i dati chiamati String, che sono sequenze di caratteri
alfanumerici strettamente delimitati da virgolette come " o '; abbiamo i dati Boolean, ovvero booleani, sno entità logiche che si assegnano
a una variabile al fine di verificarne le condizioni "true" o "false". Infine abbiamo i data Undefined e Null, che rispettivamente si associano
a una variabile non ancora definita e, per il Null, a una variabile di valore vuoto, nullo.  */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/
/*Un oggetto è un contenitore di valori di una determinata variabile, uniti insieme da due parentesi graffe allo scopo di fornire ad essa
una serie di caratteristiche per darle un'identità ben definita. */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
//console.log(12 + 20)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* let x = 12
console.log(x) */

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* let name = "filippo" 
console.log(name) */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* let x = 12
console.log( x - 4 ) */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john"
let name2 = "John"
// console.log( name1 === name2) 
console.log ( name1 === name2.toLowerCase())
