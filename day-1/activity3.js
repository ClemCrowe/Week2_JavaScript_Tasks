const refDate = Date.now()
let birthDate = "April 5 1998"
let birthDateFigure = new Date(birthDate).getTime()

let difference = (refDate-birthDateFigure)/(1000 * 60 * 60 * 24)

// console.log(refDate)
// console.log(birthDateFigure)

// console.log(difference)
console.log(`I have been alive for ${Math.floor(difference)} days`)