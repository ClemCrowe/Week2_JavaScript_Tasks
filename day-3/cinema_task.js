let customerAge = 900;

// if (customerAge > 17 && customerAge < 60); {
//     console.log("Adult (18+): £10.95");
// } else {
//     if (customerAge < 18); {
//         console.log("Child (below 18): £8");
//     }
//     else if (customerAge > 60) {
//         console.log("Senior (60+): £7.50");
//     }
// }

if (customerAge > 17 && customerAge <60) {
    console.log("Adult (18+): £10.95");
} else {
    if (customerAge <18) {
        console.log("Child (below 18): £8")
    }
    else if (customerAge >60) {
        console.log("Senior (60+): £7.50")
    }
}