// * Write a function that returns the intersection of two arrays, i.e., the elements that appear in both arrays.


function intersection(arr1,arr2)
{
    if(arr1.length <= arr2.length)
    {
        return arr1.filter((ele)=> arr2.includes(ele) )
    }
    else
    {
        return arr2.filter((ele)=> arr1.includes(ele))
    }

}

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

console.log(intersection(arr1,arr2)) // [3,4]

arr1 = [1, 2, 2, 3]
arr2 = [2, 2, 4]

console.log(intersection(arr1,arr2)) // [2] or [2,2]