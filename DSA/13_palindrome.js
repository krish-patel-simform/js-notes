function isPalindrome(str)
{
 
    // for stable we can convert to lower or uppercase before comparing
    //
 
    const length = str.length
    for(let i=0;i<Math.floor(length / 2);i++)
    {
        if(str.at(i) !== str.at(-i-1))
            return false
    }
    return true
}
 
str = "AbA"
console.log(isPalindrome(str))
console.log(isPalindrome("MaaM"))
console.log(isPalindrome("krish"))
 
 
console.log(String(['k','r','i']))
 
