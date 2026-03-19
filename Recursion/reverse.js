function reverseArray(arr,index)
{   

    //base case
    if(index == arr.length)
        return;

    // go futher
    reverseArray(arr, index+1) // head recursion we call the recursion first then perform the tasks
    console.log(arr[index])
}


function printArray(arr,index)
{
    // base case 
    if(index == arr.length)
        return;

    console.log(arr[index]) // tail recursion means perform task then recurion code
    printArray(arr,index+1)
}

const arr = [1,2,3,4,5]

console.log("Array in reverse order")
reverseArray(arr,0)

console.log()
console.log("array in correct order")
printArray(arr,0)




