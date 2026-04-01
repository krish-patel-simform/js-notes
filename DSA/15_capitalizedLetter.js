//* Write a function that takes a sentence and capitalizes the first letter of each word

function capitalizeLetter(sentence)
{
    sentence = sentence.trim().replace(/\s+/,' ');

    return sentence.split(' ').map((letter)=> letter.at(0).toUpperCase() + letter.slice(1)).join(' ')
}

console.log(capitalizeLetter('i am learning javascript'))

console.log(capitalizeLetter('hello    world'))