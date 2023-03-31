let time = 3
let bed = "I am in bed"
let home = "I am at home"
let commuting = "I am commuting to work"
let work = "I am at work"
let na = "this is not applicable"



// if (time >= 0 && time <= 5) {
//     console.log(bed)} 
// else {
// if (time >= 6 && time < 8) {
//     console.log(home)} 
// }

// if (time = 8) {
//     console.log(commuting)}
// else{
// if (time >= 9 && time <= 17) {
//     console.log(work)}
   
// if (time = 18) {
//     console.log(commuting)}
  
// if (time >=19 && time <= 22) {
//     console.log(home)}

// if (time = 23) {
//     console.log(bed)}

// if (time > 24) {
//     console.log(na)}   

switch (true){
    case (time >= 0 && time <= 5):
    case (time == 23):
        console.log(bed)
break;
    case (time >= 6 && time < 8):
    case (time >=19 && time <= 22):
        console.log(home)
break;
    case (time == 8):
    case (time == 18):
        console.log(commuting)
break;
    case (time >= 9 && time <= 17):
        console.log(work)
break;
    default:
        console.log(na)}
