// let password = "TheBigBadCowOfTheFarSouth2468"

// switch (true) {
//     case (password.length > 8):
//         console.log(password);
//      break;
//     case (password.length < 8):
//         console.log("Your password is too short.");
// }

// if (password.length > 8) {
//     console.log(password);
// }
// else {console.log("Your password is too short.")};

function divisableBy5and3(num){
if ((num%5)==0 || (num%3)==0) {
    return "This number is divisable by 3 or 5";
}
else {
    return false;
}}

console.log(divisableBy5and3(5))
