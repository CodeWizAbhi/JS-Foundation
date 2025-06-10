let schedule={};
function isEmpty(schedule){
    for(let key in schedule){
    return ;
    }
    return false;
}
schedule["8:30"]= "get up";
console.log(isEmpty);