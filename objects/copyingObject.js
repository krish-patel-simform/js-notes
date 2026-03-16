//* there are two type object coping 

//^ 1 : shallow Copy : means a seperate copy of object it create a first level copy , nested are still reference 

const obj1 = {
    name : "Krish",
    age : 21,
    address : {
        city : "Ahm"
    }
}

const obj3 = obj1 // shallow copy
obj3.address = "mum"
console.log(obj1,obj3)

const obj2 = {...obj1}
obj2.age = 20

console.log("Obj 1",obj1)
console.log("Obj 2",obj2)
console.log(obj1 == obj2)
console.log(obj1 === obj2)
console.log(obj1.address == obj2.address)


//^ 2 Deep copy using structuredClone
            // structuredClone()
const clone = structuredClone()




// !circular copy
const user = {
    // me : this
}
user.me = user

const copy = structuredClone(user)

console.log(copy.me == copy)
