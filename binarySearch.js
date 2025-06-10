let arr=[10,20,30,40,50,60,70,80,90];
let target=10;
console.log(binarySearch(arr,target,0,arr.length-1));
function binarySearch(arr,target,start,end) {
    if (start>end) {
        return false;
    }
    let mid=Math.floor((start+end)/2);

    
    if (arr[mid]===target) {
        return true;
    } else if(arr[mid]>target) {
        return binarySearch(arr,target,start,mid-1);
    } else {
        return binarySearch(arr,target,mid+1,end);
    }
}
