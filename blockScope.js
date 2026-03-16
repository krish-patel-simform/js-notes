var a = 50

{
    let a = 10 //^ Override the accesibility of global var a
    console.log("Inside the Block " + a)
}

console.log("Outside the Block " + a)


var a

console.log(a)

if(a == undefined)
    console.log("x is undefined")
else
    console.log("X is not undefined")
