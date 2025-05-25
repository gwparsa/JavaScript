//First Assignment

function calculate(firstInput, secondInput, operator) {
    switch(operator){
    case "+" : return firstInput + secondInput; break;
    case "-" : return firstInput - secondInput; break;
    case "*" : return firstInput * secondInput; break;
    case "/" : return firstInput / secondInput; break;
    default : return "invalid arguments!";
    }
}

console.log(calculate(3, 4, '+'));
console.log(calculate(5, 4, '-'));
console.log(calculate(5, 4, '*'));
console.log(calculate(5, 4, '%'));





//Second Assignment:

function isPrime(number){
    if(typeof number == "number"){
        if(number <= 1){
            return false;
        }else{
            for(i = 2; i < number; i++){
                if (number % i === 0) {
                    return false;
                }
            }
        }
    }else{
        return "invalid argument!"
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(6));
console.log(isPrime('two'));