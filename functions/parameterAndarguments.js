function sayHello(name) // all paramrer are not in temoprary dead zone 
{
    var name = "kp"
    console.log("Hello",name)
}

sayHello("Krish") // when you pass the value that are argument of function

//* default parameter
function greet(name ="Guest") //^ default parameter should be as last paramter
{
    console.log("Welcome back,",name)
}
greet("Krish")
greet()


// * reset parameter: used for variable length arguments and it converted into array
function sum(...numbers)
{
    console.log(numbers.reduce((sum,no)=> sum+no,0))
}
sum(1,2,3,4,5)

//*arguments object before rest operator exist
function oldStyle()
{
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[5])
    console.log(arguments.length)
}

oldStyle(10,20,30)

function xyz()
{
    return
         (some + long + expression + or + whatever * f(a) + f(b))
}

console.log(xyz())