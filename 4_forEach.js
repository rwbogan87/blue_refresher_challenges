// ForEach Challenge

let animals = [
    "bat", "tiger", "yak",
    "monkey", "snake", "lizard",
    "panda", "monkey", "hyena"
]
let zooTrip = {
    seen: [],
    animalsSeen: 0
}

/*
Goals!

Bronze
Write code that uses .forEach() to create and print templated strings for all the animals in the array, be creative.


Silver
Bronze + Write a function to be used in the forEach() that also adds the animal to the zooTrip object's "seen" array.
? only adds unique animals seen
Gold
Bronze + Silver + Update the zooTrip's "animalsSeen for each unique animal in the "seen" array!
*/
//! Silver
takePhoto = (target) => {
    if (zooTrip.seen.includes(target)) {
        return (target)
    } else {
        zooTrip.seen.push(target)
        //! Gold
        zooTrip.animalsSeen++
        return(target)
    }
}
//! Bronze
animals.forEach((item, index) => {
    let customStringObject = {}
    customStringObject.string = `I saw a ${item} at the zoo`
    console.log(customStringObject)
    takePhoto(item)
})

console.log(`Unique animals seen: `, zooTrip.seen)
console.log(`Unique count: `, zooTrip.animalsSeen)
