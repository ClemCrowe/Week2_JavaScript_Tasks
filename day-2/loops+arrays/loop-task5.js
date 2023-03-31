for(let i = 0; i < 6; i++) {
    let rdmNo = Math.floor(Math.random()*30);
    console.log(divisableBy7(rdmNo))
}

function divisableBy7(rdmNo){
        if ((rdmNo%7)==0) {
            return "This number is divisable by 7";
        }
        else {
            return rdmNo;
        }}
    