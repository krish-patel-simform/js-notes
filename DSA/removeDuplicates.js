function removeDuplicate(arr)
{
    const n = arr.length;
    let i = 0;
    let j = i+1;
    while(j<n)
    {
        // check for first unique elemenrt
        if(arr[i] !== arr[j])
        {
            // // unique found
            // arr[i+1] = arr[i+1] ^ arr[j];
            // arr[j] = arr[i+1] ^ arr[j];
            // arr[i+1] = arr[i+1] ^ arr[j];
 
            // // update the index
            // i++;
 
            // better solution
            arr[i+1] = arr[j] // just override the value
            i++;
        }
        j++;
    }
    return arr.slice(0,i+1)
}
 
 
// important to sort the element
 
// [1,2,3,1,2,4,5] => [1,2,3,4,5,....]
// [1,2,2,2,3,4,5]
// so sorting first
const arr = [1,2,3,1,2,4,5]
arr.sort((a,b)=> a-b)
console.log(removeDuplicate(arr))
 
// if different then swwp
 
// [1,2,1,2,3,4,5]
// [1,2,3,2,1,4,5]
// [1,2,3,4,1,2,5]
// [1,2,3,4,5]
 
 
 