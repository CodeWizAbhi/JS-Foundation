let calculator = {
    read(a,b){
        console.log(`a = ${a} and b = ${b}`);
    },
    sum(a,b){
        return a + b;
    },
    mul(a,b){
        return a * b;
    }
}
calculator.read(10,20);
console.log(calculator.sum(10,20));
console.log(calculator.mul(10,20));