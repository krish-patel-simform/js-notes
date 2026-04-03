// * Write a function that finds the first non-repeating character in a string.

function firstNonRepeatingChar(str)
{
    str = str.trim().replace(/\s+/,' ');

    //indexof == lastIndexof
    for(const char of str)
    {
        if(str.indexOf(char) === str.lastIndexOf(char))
            return char;
    }
    return null;

}

console.log(firstNonRepeatingChar('swiss')) // w
console.log(firstNonRepeatingChar('leetcode')) // l
console.log(firstNonRepeatingChar('aabbcdde')) // c
console.log(firstNonRepeatingChar('aabbccdeeff')) // d
console.log(firstNonRepeatingChar('aabbcc')) // null
