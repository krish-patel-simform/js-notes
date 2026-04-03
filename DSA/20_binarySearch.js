// *Implement a binary search function that takes a sorted array and a target value, returning the index of the target value in the array.

function BinarySearch()
{
    
}

BinarySearch.prototype.sort = function(arr,target)
{
    let low = 0,high = arr.length;

    while(low<=high)
    {
        const mid = low + Math.floor((high - low) / 2);

        if(target === arr[mid])
            return mid;
        else if(target < arr[mid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

const obj = new BinarySearch();

console.log(obj.sort([1,2,3,4,5,6,7,8],5))
console.log(obj.sort([1,2,3,4,5,6,7,8],10))
console.log(obj.sort([1,2,3,4,5,6,7,8],-5))