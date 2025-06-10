let a=0;
let b=0;
let n = prompt("Enter the value of n: ");
for(i=0;i<=n;i++){
    if(i%2==0){
        a =a+i;
    }else{
        b=b+i;
    }
}
console.log(a);
console.log(b);
console.log(`${a} mod ${b} of even numbers is: ${a%b}`);