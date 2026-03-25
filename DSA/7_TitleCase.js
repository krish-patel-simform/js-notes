function titleCase(sentence)
{
    // convert the first letter to uppercase for each word
    sentence = sentence.trim().replace(/\s+/g,' ');
    return sentence.split(" ").map((letter)=> letter.at(0).toUpperCase() + letter.slice(1)).join(" ");
}


console.log(titleCase('i am learning javascript'))

console.log(titleCase('hello    world'))