let bobFollowers = [
    "Tim Smith",
    "Brian Christian",
    "Li Jackson",
    "Lucy Travis",
    "Evan Williams",
    "Ethan Winters",
    "Clancy Javis",
    "Stacy Grant",
    "Holly Doris",
    "Andy Francis"
]
let hannahFollowers = [
    "Wayne Freeman",
    "Steven Brent",
    "Clancy Javis",
    "Lucy Travis",
    "Timothy Parker",
    "Che Henson",
    "Erica Molina",
    "Artemisa Pascal",
    "Ethan Winters",
    "Jon Brown"
]

let mutualFollowers = []

for(let i = 0; i < bobFollowers.length; i++) {
    for(let j = 0; j < hannahFollowers.length; j++) {
        if(bobFollowers[i] === hannahFollowers[j]) {
            mutualFollowers.push(bobFollowers[i]);
        }
    }
}

console.log(mutualFollowers);