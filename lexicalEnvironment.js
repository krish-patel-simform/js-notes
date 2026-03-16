a()

function a(){

    b()
    
    function b()
    {
        console.log(x)
    }
}

var x = 10
a()


var a
function a()
{
    console.log("key a is override")
}

console.log(a)