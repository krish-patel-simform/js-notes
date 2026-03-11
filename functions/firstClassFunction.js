
// * Function called first Class function if is assign to variable or pass as an argument or return from any function

//^1 store function as variable

const hello = ()=>{
    console.log("Hello")
}

hello() // invoke the variable as we call the function


//^ 2 pass function as argument

const sayHello = ()=>{
    return "Hello "
}

const greeting  = (helloCallback,name)=>{
    return helloCallback() + name
}

console.log(greeting(sayHello,"Krish"))

//^ 3 return function from outer function

function outer()
{
    return ()=>{
        console.log("inner function invoked ")
    }
}

const func = outer()
func()