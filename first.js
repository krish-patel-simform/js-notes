
// * Hoisting is technique that declare the variable on top of their scope 
 
console.log(x) //^ this is hoisted 
console.log(getName) //^ function are default hoisted completely
console.log(getName())

var x = 7

function getName()
{
    console.log("Function Call is invoked")
}



// function scope

var x = 1

a() // 100 print
b() // 200 print

console.log(x) // 1 print

function a()
{
    var x = 100
    console.log("A function called")
}

function b()
{
    var x = 200
    console.log("B function is called")
}