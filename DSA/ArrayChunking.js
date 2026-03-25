function chunkArray(arr,n)
{
    // split the array to n length
    // keep slicing 
    const result = []

    let i = 0
    while(i<arr.length)
    {
        result.push(arr.slice(i,i+n))
        i += n;
    }

    return result
}

const arr = [1,2,3,4,5,6,7]

console.log(chunkArray(arr,3))
// [ [1,2,3] ,[4,5,6],[7] ]

// n * 1 = 3 start
// start  + n

