function divisableBy5and3(num){
    if ((num%5)==0 && (num%3)==0) {
        return "fizz buzz";
    }
    if ((num%3)==0) {
        return "fizz";
    }
    if ((num%5)==0) {
        return "buzz";
    }
    else {
        return "num";
    }}
    
    console.log(divisableBy5and3(6))