//* Write a function that takes an array of numbers and a target sum. Determine if there are two numbers in the array that add up to the target sum.


function twoSum(arr,target)
{
    // sort an array
    arr = arr.sort((a,b)=> a - b);

    let i=0,j = arr.length-1;

    while(i<j)
    {
        const sum = arr[i] + arr[j];
        if(sum === target)
            return true;

        else if(sum > target)
        {
            j--;
        }
        else
        {
            i++;
        }
    }
    return false;
}

console.log(twoSum([2, 7, 11, 15],9))
console.log(twoSum([1, 2, 3, 4],8))
console.log(twoSum([5, 1, 9, 3],10))