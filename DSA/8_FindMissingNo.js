function findMissingNo(arr)
{   
    let totalPossibleSum = ((arr.length+1) * (arr.length + 2)) / 2
    return totalPossibleSum - arr.reduce((acc,ele)=> acc + ele)
}

console.log(findMissingNo([1,2,4,5]))
console.log(findMissingNo([1,2,3,4,7,8,6]))