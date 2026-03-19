// find maximum and minimum from array

arr = [1,4,2,6,9,3,-9,-10,66]
function maximum(arr,maxi,secondMaximum,index)
{
    // base case
    if(index == arr.length) 
        return {maximum : maxi,secondMaximum : secondMaximum == -Infinity ? maxi : secondMaximum}

    //element comes
    if(maxi < arr[index])
    {
        secondMaximum = maxi
        maxi = arr[index]
    }

    // go futher
    return maximum(arr,maxi,secondMaximum,index + 1)
}

let maxi = secondMaximum = -Infinity
console.log(maximum(arr,maxi,secondMaximum,0))



function minimum(arr,mini,secondMinimum,index)
{

    // base case
    if(index == arr.length)
        return {minimum : mini,secondMinimum : secondMinimum == Infinity ? mini : secondMinimum}

    if(mini > arr[index])
    {
        secondMinimum = mini;
        mini = arr[index]
    }

    // go futher
    return minimum(arr,mini,secondMinimum,index+1)
}

let mini = secondMinimum = Infinity
console.log(minimum(arr,mini,secondMinimum,0))
