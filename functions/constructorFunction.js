
function Person(name,age)
{
    this.name = name;
    this.age = age;

    this.getName = function()
    {
        return this.name
    };

    this.getNameV2 = ()=>{
        return this.name
    };
}

const obj1 = new Person('Krish',21)
console.log(obj1.getName()) // krish
console.log(obj1.getNameV2()) // krish
console.log(obj1.getNameV2) // function 



const personName = obj1.getName
console.log(personName()) // unedfined because here we call the function without specifiing from which object we want to call so by default it is window or global object

// const obj = {
//     name: "krish",
//     age : 21,
//     getName : function(){
//         return this.name
//     },
//     getNameV2 : ()=>{
//         return this.name
//     }
// }

// console.log(obj.getName())
// console.log(obj.getNameV2())


// Exercise 2

function Calculator()
{
    this.read = function(){
        //read the two property
        this.a = +prompt("Enter value of A:",0)
        this.b = +prompt("Enter value of B:",0)
    }
    this.sum = function(){
        return this.a + this.b
    }
    this.mul = function(){
        return this.a * this.b
    }
}

const calObj = new Calculator()

calObj.read()

console.log(calObj.sum())
console.log(calObj.mul())

//Exercise 3
function Accumulator(initVal)
{
    this.value = initVal;

    this.read = function()
    {
        this.value +=  +prompt("Enter New value",0)
    }
}

const accuObj = new Accumulator(1)
accuObj.read()
accuObj.read()

console.log(accuObj.value)


console.log({} + [])

