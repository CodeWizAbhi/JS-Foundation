let arr = [1,2,3,4,5,6,7,8,9,10];
let target = 6;
console.log(isFound(arr,target));
function isFound(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true;
        }
    }
    return false;
    
}