// Code your solutions in this file
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++)
// {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// writeCards(["Ada", "Brendan", "Ali"], "birthday");

// const names = ["Ada", "Brendan", "Ali"];

function writeCards( names, event ) {
    let cards = []
    for (let i = 0; i < names.length; i++)
    {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards
}


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }
}