//! as we assign the function to the variable so it become the function expression

const sayHi = function(){
    console.log("Hello Good Morning")
}

//shorter wayto write the anonymous function
const grreting = ()=>{
    console.log("Hello how are you")
}

console.log(func) //undefined
var func = function xyz()
{
    console.log(func) // or what function block?
    console.log(xyz)
    console.log(func == xyz) // both are function and function is reference type so check the reference here both are pointing the same referecne
}

func()
// xyz() here got an error 
