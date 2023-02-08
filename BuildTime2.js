// Carrello e sconti particolari - BuildTime #2

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
*/

const marco = {
  name: 'Marco',
  lastName: 'Rossi',
  isAmbassador: true,
}

const paul = {
  name: 'Paul',
  lastName: 'Flynn',
  isAmbassador: false,
}

const amy = {
  name: 'Amy',
  lastName: 'Reed',
  isAmbassador: false,
}

const prices = [200, 5, 2]
const shippingCost = 50

//----------------------

let utente = amy ;
let totalPrice = 0 ;


for( i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}
  
  console.log("Total:", totalPrice, "€")


 //------isAmbassador 30%------

    if (utente.isAmbassador === true) {
      totalPrice = (totalPrice - (totalPrice * 0.30));
      console.log("Ambassador discount (-30%):", Math.trunc(totalPrice) + "€");

    } 

    else {
      console.log("Total price no ambassador discount:", totalPrice+"€");
    };



//------spedizione----------------

    if (totalPrice < 100) {
      console.log("Total price:", Math.trunc(totalPrice) + "€" , "+", "Shipping cost:", shippingCost+"€", "=", "Total to pay:",totalPrice + shippingCost + "€");
    }
    
    else {
      console.log("Free shipping:", Math.trunc(totalPrice)+"€")
    }



  
