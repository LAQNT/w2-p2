/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
console.log("--------------- Esercizio 1-a ----------------")


 let numberList = [55, 75, 103];

 let highestNumber = Math.max(...numberList);

 console.log (highestNumber);

 //-----risposta B------
 
 console.log("--------------- Esercizio 1-b ----------------")



 let n1 = 250;
 let n2 = 20;

 if (n1>n2) {
  console.log("il numero maggiore è " + n1)
 } else { console.log("il numero maggiore è " + n2)};



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
console.log("--------------- Esercizio 2 ----------------")


 let numeroFornito = 6 ;

  if (numeroFornito != 5) {
    console.log("not equal");
  } 

  else {
      console.log ("equal to five")
    }



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
console.log("--------------- Esercizio 3 ----------------")



 let numero_input = 15;

   if (numero_input % 5 === 0) {

   console.log("divisible by 5");

   }



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
console.log("--------------- Esercizio 4-a ----------------")


 let numeroA = 21;
 let numeroB = 30;

 let result = ((numeroA == 8) || (numeroB == 8) || (numeroA - numeroB == 8) || (numeroB - numeroA == 8) || (numeroB + numeroA == 8));

 console.log(result);


 //------risposta B------

 console.log("--------------- Esercizio 4-b ----------------")



 let numero_A = 8;
 let numero_B = 30;

 if (numero_A == 8){
  console.log("numero_A è uguale a 8");
 };
 if (numero_B == 8){
  console.log("numero_B è uguale a 8");
 };
 if (numero_A - numero_B == 8){
  console.log("numero_A - numero_B è uguale a 8");
 };
 if (numero_B - numero_A == 8){
  console.log("numero_B meno numero_A è uguale a 8");
 };
 if (numero_A + numero_B == 8){
  console.log("numero_A + numero_B è uguale a 8");
 };




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
console.log("--------------- Esercizio 5 ----------------")



 let prices = [10, 10, 10, 10]

 let totalShoppingCart = 0;
 let costoEspedizione = 10;



  for (i = 0; i < prices.length; i++) {
    totalShoppingCart += prices[i];
  };

     if (totalShoppingCart >= 50) {
       console.log("Costo totale =", totalShoppingCart, "€", "Espedizione gratuita");
     }

     else{
       console.log("Costo totale =", totalShoppingCart,"€", "+ 10 € di espedizione", "=", totalShoppingCart + costoEspedizione,"€");
     };
 



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("--------------- Esercizio 6 ----------------")



let prices_B = [10, 50, 10, 10];

let totalShoppingCart_B = 0;
let costoEspedizione_B = 10;



 for (i = 0; i < prices_B.length; i++) {

   totalShoppingCart_B += prices_B[i];

 };


 let prezzoSconto = totalShoppingCart_B - (totalShoppingCart_B * 0.20);

    if (totalShoppingCart_B >= 50) {
      console.log("Costo totale =", prezzoSconto, "€", "Espedizione gratuita");
    }

    else {
      console.log("Costo totale =", prezzoSconto,"€", "+ 10 € di espedizione", "=", totalShoppingCart_B + costoEspedizione_B,"€");
    };






/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("--------------- Esercizio 7-a ----------------")



let vx = 90;
let vy = 10;
let vz = 170;

 variablesArray = [ vx, vy, vz ];

 variablesArray.sort(function(a,b) {return b-a});
 console.log(variablesArray);


//---------risposta B------------ 
console.log("--------------- Esercizio 7-b ----------------")



let x = 50;
let y = 40;
let z = 30;

if(x > y && x > z) {
  if (y > z) {console.log(x +" ," +y+ ", " +z)}
  else {console.log(x +", " +z+ ", " +y)};
}
  else if (y > x && y > z) {
    if (x > z) {console.log(y +", " +x+ ", "+z)}
    else {console.log(y +", " +z+ ", "+x)};
  }

  else if (z > x && z > y) {
    if (x > y ) {console.log (z +", " +y+", " +x)}
    else {console.log (z +", " +y+", " +x)}
  }






/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("--------------- Esercizio 8-a ----------------")

    let n = 2.1;

    console.log(typeof n);

console.log("--------------- Esercizio 8-b ----------------")

    if (n % 1 == 0){
      console.log("numero intero")
    }

    else {
      console.log("numero non intero")
    };




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("--------------- Esercizio 9 ----------------")



 let nA = 6;


  if (nA % 2 == 0) {
    console.log("numero pari");
  }
  else {
  console.log("numero dispari");
  
 }



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("--------------- Esercizio 10 ----------------")



let val = 8
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }


/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/
console.log("--------------- Esercizio 11 ----------------")



let num = 21;

if (num < 5) {
  console.log("Tiny");
}  

else if (num < 10) {
  console.log("Small");
}

else if (num < 15) {
  console.log("Medium");
}

else if (num < 20) {
  console.log("Large");
}

else if (num >= 20) {
  console.log("Huge");
}



/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/
console.log("--------------- Esercizio 12 ----------------")


  let isMale = true;
  let gender = isMale ? "male" : "female";
  console.log(gender);


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

console.log("--------------- Esercizio 13 ----------------")


var i = 0

while ( i <= 5) {
  console.log(i);
  i++;
};



/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

console.log("--------------- Esercizio 14 ----------------")


for (let i = 0; i <= 10; i++) {
  let numbers = i;
  console.log(numbers);
};




/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/
console.log("--------------- Esercizio 15 ----------------")

for (let i = 0; i <= 10; i++) {

  if (i == 3) {continue;}
  else if (i == 8) {continue;}

  let numbers = i;
  console.log(numbers);

};



/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

console.log("--------------- Esercizio 16 ----------------")



 for (i = 0; i <= 15 ; i++) {

   if (i % 2 == 0) {
    console.log(i,": Numero pari")}
    
   else {
    console.log(i, ": Numero dispari")};

 };



/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

console.log("--------------- Esercizio 17 ----------------")


for(let i = 0; i <= 100; i++){
  

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }

  else if (i % 3 == 0) {
    console.log("Fizz");
  }

  else if (i % 5 == 0) {
    console.log("Buzz");
  }   

  }




/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

console.log("--------------- Esercizio 18 ----------------")


let day = 2;

switch (day) {

  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;

}


