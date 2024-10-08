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
/*const table = 'Tavolo Vip';
const guest = ['Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello'];

//variabile
const placeHolder = [];

//? FASE DI ELABORAZIONE
guest.forEach((g, i) => {
    placeHolder.push({ name: g, place: i + 1, tableName: table });
});

console.table(placeHolder);

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
/*const students = [
    { id: 213, name: 'Marco della Rovere', Grades: 78 },
    { id: 110, name: 'Paola Cortellessa', Grades: 96 },
    { id: 250, name: 'Andrea Mantegna', Grades: 48 },
    { id: 145, name: 'Gaia Borromini', Grades: 74 },
    { id: 196, name: 'Luigi Grimaldello', Grades: 68 },
    { id: 102, name: 'Piero della Francesca', Grades: 50 },
    { id: 120, name: 'Francesca da Polenta', Grades: 84 }
];

//? FASE DI ELABORAZIONE
// array nomi in maisucolo
const names = students.map(s => s.name.toUpperCase());
console.table(names);

// array voti superiori a 70 
const over70Grade = students.filter(s => s.Grades > 70);
console.table(over70Grade);

// array voti superiori a 70 con id superiore a 120
const overIdGrade = over70Grade.filter(s => s.id > 120);
console.table(overIdGrade);



/*
SNACK 3
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

//FASE PREPARATORIA
const bikes = [
    { name: 'gravel', weight: 10 },
    { name: 'Ebike', weight: 23 },
    { name: 'scatto fisso', weight: 9 },
    { name: 'cronometro', weight: 7 },
    { name: 'aeroad', weight: 7.5 },
    { name: 'endurance', weight: 6.5 },
    { name: 'MTB', weight: 13 }
];

//recupero gli elementi dal DOM
const bikeList = document.getElementById('bike');
const result = document.getElementById('light');

//variabili
let lighterBike;
let bikeWeight;

//FASE DI ELABORAZIONE
bikes.forEach(b => {
    const { name, weight } = b;
    bikeList.innerHTML += `
    <li>
    <b>${name}</b>
    peso ${weight} kg
    </li>`;
    if (!(bikeWeight < weight)) {
        bikeWeight = weight;
        lighterBike = `${name} con peso pari a ${weight} kg`;
    };
})

//FASE DI OUTPUT
result.innerText = lighterBike;
console.log(lighterBike);

/*
SNACK 4
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/


//FASE PREPARATORIA
const clubs = [
    {
        name: 'Inter',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Juventus',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Milan',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Parma',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Atalanta',
        goals: 0,
        fouls: 0
    },
    {
        name: 'Torino',
        goals: 0,
        fouls: 0
    },
];


//recupero gli elementi dal DOM
const serie = document.getElementById('serie');
const foulsForClub = document.querySelector('.fouls-clubs');

//FASE DI ELABORAZIONE
clubs.forEach(c => {
    c.goals = Math.floor(Math.random() * 100);
    c.fouls = Math.floor(Math.random() * 50);
    serie.innerHTML += `
    <li>
      <h3>${c.name}</h3>
      <ul>
        <li>goals: ${c.goals}</li>
        <li>falli: ${c.fouls}</li>
      </ul>
    </li>    
    `;

    foulsForClub.innerHTML += `
    <li>
      <h3>${c.name}</h3>
      <ul>
        <li>falli: ${c.fouls}</li>
      </ul>
    </li>    
    `;

})


const foulsClub = clubs.map(c => {
    const { name, fouls } = c;
    return { name, fouls }
})

console.table(clubs);
console.table(foulsClub);
