// Write a "for of" loop that goes over the foods array.
let foods = ["apple", "orange", "rice", "bread", "tofu"];

let allergies = ["gluten", "soy"];

// Write your loop here
myLoop = (counterFunction, allergyFunction) => {
    for (const each of foods) {
        //! Gold
            console.log(each + ' ' + counterFunction(each) + ' ' + 'and' + ' ' + allergyFunction(allergies, each))
    }
}

// Write your function here
//! Bronze
const fourCheck = (string) => {
    if (typeof(string) == 'string' && string.length > 4) {
        return ('is a long word')
    } else {
        return ('is not a long word')
    }
}
//! Silver
const allergyCheck = (array, string) => {
    if (array.includes('gluten') && string == 'bread') {
        return 'you can\'t eat it with your allergies'
    } else  if (array.includes('soy') && string == 'tofu'){
        return 'you can\'t eat it with your allergies'
    } else {
        return 'you can eat it with your allergies'
    }
}

myLoop(fourCheck, allergyCheck)
/*
Goals!

Bronze
Write a function that checks the length of a string and if it is more than 4 char, have it return true, else return false. 
console.log() these from inside the "for of" loop.
*/

/*
Silver
Write another function that takes in an a food and the allergies array and will return "You can eat " if they can eat the item, otherwise return 
"You can't eat " if they can't. Use this function in the loop also. Hint: Gluten == no bread, soy == no tofu
*/

/*
Gold
Bronze + Silver + Write logic that console logs "__ (is/is not) a long word, and you (can/can't ) eat it with your allergies. For all elements of the foods array.
*/