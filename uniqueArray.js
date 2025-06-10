function unique(arr) {
    let set = new Set();
    for(let i=0;i<arr.length;i++){
            set.add(arr[i]);
    }
    let arr2 = set.values();
    return arr2;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log( unique(values) ); 