//* Write a function that takes a string and returns the character that appears the most.

function maxChar(str)
{
    str = str.trim().replace(/\s+/g,'')

    // brute force
    const freq = {}

    let result = undefined;
    let currFreq = 0;

    for(const char of str)
    {
        if(!freq[char])
            freq[char]  = 1;
        else
            freq[char] += 1; 
    }

    console.log(freq)

    for(const char in freq)
    {
        if(currFreq < freq[char])
        {
            currFreq = freq[char]
            result = char;
        }
    }

    return result;
}

//* case:1 what if all charater are apepar onces :  first character 


//* case:2 krishh => h
console.log( maxChar("krishh")) // h

//* for empty string 
console.log(maxChar('')) // undefined

console.log(maxChar('Krish')) // K