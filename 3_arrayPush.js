// Array Push Challenge

let cards = [2, 8, "K", 9, 10, 3, 4, "Q", 7, "J",5, 6, "A"];
let faceCards = [];
let numberedCards = [];

/*
Goals!

Bronze
Write a loop that uses array push to fill the face card & numbered card arrays. with elements from cards.


Silver
Bronze + also empty the cards array as you go, so in the end you should have an empty cards array and faceCards/numberedCards filled

Gold
Bronze + Silver + Write a function that uses a switch to return the card type and use that in your code.
*/

console.log('Cards: ', cards)
console.log('faceCards: ', faceCards)
console.log('numberedCards: ', numberedCards)

//! Gold
const typeFunction = (card) => {
    let type;
    switch(typeof(card)) {
        case 'number':
            type = 'numberedCard';
            break;
        case 'string':
            type = 'faceCard';
    }
    return type;
}
//! Bronze
for (let i=0; i< cards.length; i++) {
    if (typeof(cards[i]) == 'number') {
        numberedCards.push(cards[i])
    } else {
        faceCards.push(cards[i])
    }
    console.log(cards[i],':',typeFunction(cards[i]))
    //! Silver
    cards.splice(i, 1);
    i--
}

console.log('Cards: ', cards)
console.log('faceCards: ', faceCards)
console.log('numberedCards: ', numberedCards)

