/*
SNACK 1
Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:
```
[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']
```
Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come proprietà:
nome del tavolo (tableName),
nome dell'ospite (guestName),
posto occupato (place),
Generiamo e stampiamo in console la lista per i segnaposto.

*/

/*
0. creo costante tavolo
1. genero la lista ad oggetti partendo dall'array
2. mostro in console i dati
*/

//* FASE PREPARATORIA
// creo costante e array
const table = 'Tavolo Vip';
const guest = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

//variabile
const placeHolder = [];

//? FASE DI ELABORAZIONE
guest.forEach((g, i) => {
    placeHolder.push({ name: g, place: i + 1, tableName: table });
});

console.log(placeHolder);

/*
SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
1. Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
*/

/*
0.creo array ad oggetti fornito
1.creo array con i nomi in maiuscolo
2.creo le liste degli studenti con le varie categorie di voti
*/

//*FASE PREPARATORIA
const students = [
    { id: 213, name: 'Marco della Rovere', Grades: 78 },
    { id: 110, name: 'Paola Cortellessa', Grades: 96 },
    { id: 250, name: 'Andrea Mantegna', Grades: 48 },
    { id: 145, name: ' Gaia Borromini', Grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', Grades: 68 },
    { id: 102, name: 'Piero della Francesca', Grades: 50 },
    { id: 120, name: 'Francesca da Polenta', Grades: 84 }
];

//? FASE DI ELABORAZIONE
// array nomi in maisucolo
const names = students.map(s => s.name.toUpperCase());
console.log(names);
