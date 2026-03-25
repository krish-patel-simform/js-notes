const arr = [1,2,4,5,3]
console.log(arr.sort())
console.log(arr)


const arr = ["banana", "Apple",'apple', "cherry"];

arr.sort((a, b) => a.localeCompare(b));

console.log(arr); // more natural sorting

arr = [3,undefined,null, 1, 2,'krish'];
arr.sort();

console.log(arr);


arr = [3, , 1, , 2];
console.log(arr.length); // 5

arr.sort();
console.log(arr);

arr = [5, NaN, 2, 10];

arr.sort((a, b) => a - b);
console.log(arr);


const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

