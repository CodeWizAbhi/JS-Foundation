let salaries = {
    "John": 100,
    "pete": 300,
    "Mary": 250
};
function sumSalaries(salaries){
    let arr,sum=0;
    if(!(salaries)){
        return 0;
    }else{
        for(let salary of Object.values(salaries)){
            sum+=salary;
        }
        return sum;
    }
}
console.log(sumSalaries(salaries));