// const obj = {
//     name : "krish",
//     age : 21,
//     getName : function getName()
//     {
//         console.log(this.name)
//     }
// }

// var name = "siddharth"


// obj.getName()



function sayHi()
{
    return this
}

const obj1 = {name : "krish"};
const obj2 = {name : "jenith"};

obj1.sayHi = sayHi;
obj2.sayHi = sayHi;

console.log(obj1.sayHi()) // this from obj1
console.log(sayHi()) // this from obj2

const obj5 = {
    name : "xyz",
    sayHi :  function()
    {
        function inner(){
            console.log(this.name)
        }
        inner()
    }
}

obj5.sayHi()