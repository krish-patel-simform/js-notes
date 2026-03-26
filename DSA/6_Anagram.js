
function isAnagram(str1,str2)
{
    if(str1.length !== str2.length)
        return false

    // make and string to same case
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    const freq = {}
    // check for charater are same and reorder 
    for(let i=0;i<str1.length;i++)
    {
        const char1 = str1.at(i);
        const char2 = str2.at(i);

        // update the freq
        if(freq[char1])
        {
            freq[char1] = ++freq[char1];
        }
        else{
            freq[char1]  = 1;
        }

        if(freq[char2])
        {
            freq[char2] = --freq[char2];
        }
        else{
            freq[char2] = -1;
        }
    }

    for(const key in freq)
    {
        if(freq[key] !== 0)
            return false;
    }
    
    // return true 
    return true

    //^ Anagram : same length , same charaqcter but reorder
}
console.log(isAnagram('aabc','abbc'))


