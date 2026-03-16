// safer way to access the nested property

const person = {
    name :  "Krish",
    age : 21,
    address: {
        city :"Ahm"
    }
}

// console.log(person.city.xyz)
console.log(person.city())

let user = {}; // a user without "address" property

console.log(user?.address?.street); // undefined 


// const obj = {
//     me : "krish",
//     self : this,
//     fn : function(){
//         console.log(this)
//     }
// }

// obj.fn()


const obj = {
    name :1
}
console.log(obj + 10)