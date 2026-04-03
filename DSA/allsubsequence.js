function allSubsequence(ans,arr,currList,ind)
{
    //base case
    if(ind == arr.length)
    {
        // stop
        ans.push([...currList])
        return;
    }
 
    // include the element
    currList.push(arr[ind])
    allSubsequence(ans,arr,currList,ind + 1);
 
    //exclude the element
    currList.pop()
    allSubsequence(ans,arr,currList,ind + 1);
}
 
 
const ans = [];
const arr = [1,2,3];
allSubsequence(ans,"123",[],0)
console.log(ans)
