const { use } = require("react");

const obj = {
    name : "krish",
    age : 21,
    friends:['kp','sp','jp']
}

console.log(obj.name)
console.log(obj.age)
console.log(obj.friends)


//* accessing the object using [] :  when we have multi-word key or dynamic key or accessed numberd key

let user = {
  name: "John",
  age: 30,
  "likes birds": true , // multiword property name must be quoted
  undefined: "hacked"
};

console.log(user)
// console.log(user.likes birds) //Syntax Error:  it give us error it treat like user.likes then space
console.log(user['likes birds'])

console.log(user[undefined])


// delete operator used to delete the object property only 
// it return true or false
console.log(delete user) // false it measn it only delete object propety not object
console.log(user)
console.log(delete user.hi) // true property not find
console.log(delete user.age) // true delete successfully 
console.log(delete user.age) // true property not find
const x = 10
console.log(delete x) // false it can not delete the variable 


const arr = [1,2,3,4]
arr[10] = 11
delete arr[1]
console.log(arr)

let fruit = 55;
let bag = {
  [fruit + 5]: 5 // bag.appleComputers = 5
};
console.log(bag[60]) // 5
