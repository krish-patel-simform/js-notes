// * Write a function that shuffles the elements of an array randomly.
function shuffleArray(arr)
{
    const map = new Map()
    let count = 0;
    const length = arr.length;

    const result = []

    while(count < length)
    {
        //generate the ranodm index
        const index = generateRandomNo(0,length-1)
        if(!map.has(index))
        {

            map.set(index,true);
            //add to result
            result.push(arr[index]);
            ++count;
        }
    }
    // generate the random index and no repeative and no missing index 
    return result

}   

function generateRandomNo(min,max)
{
    return (Math.floor(Math.random()*(max-min+1)) + min)
}

/*
Same length
Same elements
No extra/missing elements
Order may change
*/


console.log(shuffleArray([1, 1, 2, 3]))