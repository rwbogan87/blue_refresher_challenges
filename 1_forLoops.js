//Modify this "for" loop to go over the "Foods" array backwards.
let foods = ["apple", "orange", "rice", "bread", "tofu"]
/*
Goals!

Bronze
Console logging each element of the array but backwards.
*/
//? I read this two ways, solved it both ways
//! A) reverse order
// let reverseFoods = [];
// for (let i = foods.length - 1; i >= 0; i--){
//     reverseFoods.push(foods[i])
// }
// console.log(reverseFoods)

//! B) flip the strings
// let reverseFoods = [];
// for (let i = foods.length - 1; i >= 0; i--){
//     reverseFoods.push(foods[i].split("").reverse().join(""))
// }
// console.log(reverseFoods)
/*
Silver
Bronze + console logging each element of the array with the first letter capitalized.
*/
//! A) reverse order
// let reverseFoods = [];
// for (let i = foods.length - 1; i >= 0; i--){
//     reverseFoods.push(foods[i])
//     console.log(foods[i].charAt(0).toUpperCase() + foods[i].slice(1))
// }
// console.log(reverseFoods)

//! B) flip the strings
let reverseFoods = [];
for (let i = foods.length - 1; i >= 0; i--) {
    reverseFoods.push(foods[i].split("").reverse().join(""))
    console.log((foods[i].charAt(0).toUpperCase() + foods[i].slice(1)).split("").reverse().join(""))
}
console.log(reverseFoods)

/*
Gold
Bronze + Silver + Console log only the odd indexed elements
*/
//! A) reverse order
// let reverseFoods = [];
// for (let i = foods.length - 1; i >= 0; i--){
//     if (i%2!==0) {
//         reverseFoods.push(foods[i])
//         console.log(foods[i].charAt(0).toUpperCase() + foods[i].slice(1))
//     }
// }
// console.log(reverseFoods)

//! B) flip the strings
// let reverseFoods = [];
// for (let i = foods.length - 1; i >= 0; i--) {
//     if (i%2!==0) {
//         reverseFoods.push(foods[i].split("").reverse().join(""))
//         console.log((foods[i].charAt(0).toUpperCase() + foods[i].slice(1)).split("").reverse().join(""))
//     }
// }
// console.log(reverseFoods)