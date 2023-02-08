/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("----------------------- Esercizio 1 -----------------------")


const me = {
  name: 'Joh',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.skills.pop();
console.log(me);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

console.log("----------------------- Esercizio 2 -----------------------")

let numArray = [];

  for (let i = 0; i <= 100; i++ ) {
    
    if (i % 2 !== 0) {    

      numArray.push(i);

    } 
  }

 console.log(numArray);


/* ESERCIZIO 3
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
 */
console.log("----------------------- Esercizio 3 -----------------------")


let arrayRandom = [];

for (let i = 0; i <=100; i++) {

  let rand = Math.floor(Math.random() * 100 + 1);
  arrayRandom.push(rand);

}

console.log(arrayRandom);



/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

console.log("----------------------- Esercizio 4 -----------------------")

let numArrayPari = [];

  for (i = 0; i  <= 100; i++) {

    if (i % 2 == 0 ) {

      numArrayPari.push(i); 
      
    }
  }

  console.log(numArrayPari);




/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

console.log("----------------------- Esercizio 5 -----------------------");

let numJoin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numJoin.join(''));



/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/
console.log("----------------------- Esercizio 6 -----------------------");

for (i = 0; i < numJoin.length; i++) {

  numJoin[i] = numJoin[i] + 1;  

}
console.log(numJoin);






/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/

console.log("----------------------- Esercizio 7 -----------------------");


let numPari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


for (let i = 0; i <= numPari.length; i++) {


  if (numPari[i] % 2 == 0) {

    numPari.splice(i--, 1);

  };

}

console.log(numPari);



/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */
console.log("----------------------- Esercizio 8 -----------------------");

let randomArr = [];

for (i = 0; i < 10; i++) {
  // console.log("---", i, "---");

  let randomVal = (Math.floor(Math.random() * (10 + 1) )) ; 
  // console.log(randomVal);
  
  //Math.floor(math.random()*(max-min+1)) + min);

  if (randomArr.includes(randomVal)){
    // console.log("the value is already in the array", randomVal);
    i = i - 1; 
    continue;

  };

  
  // if (!randomArr.includes(randomVal)){
  // };


   randomArr.push(randomVal);
  
}

console.log(randomArr);




/* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

console.log("----------------------- Esercizio 9 -----------------------");


let oggetti = ["bicicletta", "fotocamera", "bottiglia", "palla"];

for (let i = 0; i < oggetti.length; i++) {

  oggetti[i] = oggetti[i].length;

}

console.log(oggetti);



/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/
console.log("----------------------- Esercizio 10 -----------------------");


let reverse = [5, 6, 7, 8];

reverse.reverse();

console.log(reverse);

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

console.log("----------------------- Esercizio 11 -----------------------");



let numeri = [50, 51, 52, 53];
let max = numeri[0];

for (i = 0; i < numeri.length; i++) {

  if(numeri[i] > max) {
    max = numeri[i];
  }

}

console.log(max);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/
console.log("----------------------- Esercizio 12 -----------------------");

let maxYear = parseInt(movies[0].Year) ;
let oldest 

for (i = 0; i < movies.length; i++) {

  let yearParsed = parseInt(movies[i].Year);
  
  if (yearParsed > maxYear) {
    oldest = movies[i];
  } 

}
console.log(oldest);




/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

console.log("----------------------- Esercizio 13 -----------------------");

console.log(movies.length);

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

console.log("----------------------- Esercizio 14 -----------------------");

let titoli = [];

for ( i = 0; i < movies.length; i++) {

  titoli[i] += movies[i].Title;

}

console.log(titoli);




/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

console.log("----------------------- Esercizio 15 -----------------------");

for ( i = 0; i < movies.length; i++) {

  if (movies[i].Year >= 2000 ) {

    console.log(movies[i]);

  }

}






/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/

console.log("----------------------- Esercizio 16 -----------------------");


const id = 'tt0355702'

let movieID 

for (i = 0; i < movies.length; i++) {

  if (movies[i.imdbID] = id) {

    movieID = movies[i.imdbID];
    console.log(movies[i]);

    break;

  }

}




/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

console.log("----------------------- Esercizio 17 -----------------------");


let sommaAnni = 0 ;


for (i = 0; i < movies.length; i++) {

  let parsYear = parseInt(movies[i].Year);
  
  sommaAnni += parsYear;

}

console.log(sommaAnni);



/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/


