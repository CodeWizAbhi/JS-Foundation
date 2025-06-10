let arr = [1,5.2,3.5,4,5,6,7,8,9,10];
let target = [1,5];
let sum=0;
console.log(isFound(arr,target,sum));
function isFound(arr,target,sum){
    for(let i=0;i<arr.length;i++){
        for(let j = 0; j<target.length;j++){
            if(arr[i]===target[j]){
                sum+=target[j];
            }
        }
            return sum;
    }
    return false;
}

