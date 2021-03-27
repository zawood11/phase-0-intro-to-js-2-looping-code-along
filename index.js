// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];
const occasion = 'surprise';

function writeCards(names, occasion){

    const thankYouArray = []
    for (let i = 0; i < names.length; i++){
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
        debugger;
    }
    
    return thankYouArray;
}

function countDown(integer){

    while (integer >= 0){
        console.log(integer--)
    }
}