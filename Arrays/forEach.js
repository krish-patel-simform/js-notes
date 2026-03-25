

const arr = [1,2,3,4]

console.log(arr.forEach((ele,index,a)=>{
    console.log(ele)
    return ele
}))

// console.log(arr.forEach(()=>{}))

console.log(["a", "b", "c"].join("-"));   // "a-b-c"
console.log([].join("-"));                // "" (empty string)
console.log([1, undefined, 3].join("|")); // "1||3"
console.log([null, "x"].join(","));       // ",x"
console.log([[1,2],[3,4]].join(";")); // 1,2;3,4


console.log(String(null),typeof String(null))
console.log(String(undefined),typeof String(undefined))

