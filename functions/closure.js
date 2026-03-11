//* A **closure** is the **combination of a function** bundled together (enclosed) with **references to its surrounding** state (the **lexical environment**).

//* it means it give you access to outer scope of the function

function outer()
{
    var count = 0
    function inner(){
        count++;
        console.log(count)
    }

    return inner;
}

const func = outer()
func()
func()
func()


//^ case 2 counter for both increment and decrement

function counter()
{
    let privateCount = 0

    function changeCount(val)
    {
        privateCount += val
        console.log(privateCount)
    }

    return {
        increment: ()=>{
            changeCount(1)
        },
        decrement :()=>{
            changeCount(-1)
        }
    }
}

const Counter = counter()
Counter.increment()
Counter.increment()
Counter.decrement()
// Counter.increment()