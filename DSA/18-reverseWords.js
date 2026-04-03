function reverseWord(sentence)
{
    sentence = sentence.trim().replace('/\s+/',' ');

    return sentence.split(' ').reverse().join(' ')
}

console.log(reverseWord("Hello World"))
console.log(reverseWord("krish patel"))
console.log(reverseWord("Krish   "))