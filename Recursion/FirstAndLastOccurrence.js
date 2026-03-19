// first occurance 
function firstOccurenceBinarySearch(arr, target)
{
    let low = 0;
    let high = arr.length -1

    while(low<=high)
    {
        let mid = low + Math.floor((high - low)/2)
    
        // found and still look for first occurance
        if(arr[mid] >= target)
        {
            high = mid - 1
        }
        else
        {
            low = mid + 1
        }
    }
    return low
}


// last occurance 
function lastOccurenceBinarySearch(arr,target)
{
    let low = 0;
    let high = arr.length - 1;

    
    while(low <= high)
    {
        let mid = low + Math.floor((high - low) / 2)
            
        // target found still look for last occurence
        if(arr[mid] <= target)
            low = mid + 1
        else
            high = mid - 1
    }
    return high
}

arr = [1,2,1,4,5]
arr.sort((a,b)=>{
    return a - b
})
console.log(arr)

console.log(firstOccurenceBinarySearch(arr,1))
console.log(lastOccurenceBinarySearch(arr,1))

// total occurance
