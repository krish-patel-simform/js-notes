//*  Write a function that takes a string and returns the number of vowels (a, e, i, o, u) in the string.

function countVowel(str)
{
    str = str.trim().toUpperCase();

    const possibleVowels = ['A','E','I','O','U']
    
    return str.split('').reduce((acc,char)=> possibleVowels.includes(char) ? acc + 1: acc ,0)
}

console.log(countVowel('Krish'))