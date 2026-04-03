// * Write a function that takes an array of numbers and returns an array with the smallest and largest numbers.

function finMinMax(arr)
{
    let maxi = Number.MIN_SAFE_INTEGER;
    let mini = Number.MAX_SAFE_INTEGER;

    return arr.reduce((acc,number)=>{

        if(number > acc.maxi)
        {
            acc.maxi = number;
        }
        
        if(number < acc.mini)
        {
            acc.mini = number;
        }
        return acc;

    },{maxi,mini})
}

//test case 
// [1,2,3,4,7,5] => 1,7

console.log(finMinMax([1,2,3,4,7,5]))
console.log(finMinMax([1]))
console.log(finMinMax([1,2,3,4,-7,5]))