//* Write a function that compares two objects and returns true if they are deeply equivalent (have the same values for the same keys


function deepComparision(obj1,obj2)
{
    // if any one is primitive return false

    // if both are primitive then compare it 
    if(!(obj1 instanceof Object) || !(obj2 instanceof Object))
        return obj1 === obj2;


    // for(let key in obj1)
    if(Object.keys(obj1).length !== Object.keys(obj2).length)
    {
       return false;
    }

    for(let key in obj1)
    {
        // check for nested object
        if(obj1[key] instanceof Object && obj2[key] instanceof Object)
        {
            return deepComparision(obj1[key],obj2[key])
        }

        // if obj 2 has key then check the value
        else if(!obj2[key] || obj1[key] !== obj2[key])
        {
            return false;
        }
    }
    return true
}


//* recusive for nested object 

console.log(deepComparision({a : 1,b:2},{a : 1,b : 3})) // false

console.log(deepComparision(
    { a: 1, b: { c: 3, d: 4 } },
   { a: 1, b: { c: 3, d: 4 } }
)) // true

console.log(deepComparision(
    { a: 1, b: { c: 3, d: 4 } },
    { a: 1, b: { c: 3, d: 5 } }
)) // false


console.log(deepComparision(
    { a: 1, b: { c: 3, d: 4 } },
    { a: 1, b: { c: 3 } }
))// false

console.log(deepComparision(
    { a: 1, b: { c: 3} },
    { a: 1, b: { c: 3, d: 4  } }
))// false


console.log(deepComparision(
    { a: [1, 2, 3] },
    {a: [1, 2, 3] }
)) // true


console.log(deepComparision([1,2,3],[1,2,4])) // false

console.log(deepComparision(5,5)) // true
console.log(deepComparision("kp",5)) // false

console.log(deepComparision({name : 'kp'},'kp')) // false

//* set and map 