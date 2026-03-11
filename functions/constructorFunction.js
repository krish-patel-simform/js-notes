
function Person(name,age)
{
    this.name = name;
    this.age = age;

    this.getName = function()
    {
        return this.age
    };

    this.getNameV2 = ()=>{
        console.log(this)
        return this.age
    };
}

const obj1 = new Person('Krish',21)
console.log(obj1.getName()) // 21
console.log(obj1.getNameV2()) // 21
console.log(obj1.getNameV2) // function 

const personName = obj1.getName
console.log(personName()) // unedfined because here we call the function without specifiing from which object we want to call so by default it is window or global object

const obj = {
    name: "krish",
    age : 21,
    getName : function(){
        return this.name
    },
    getNameV2 : ()=>{
        return this.name
    }
}

console.log(obj.getName())
console.log(obj.getNameV2())

