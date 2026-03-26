function caeserCipherEncryption(sentence,key = 3)
{

    // increse by 3 
    sentence = sentence.trim().toUpperCase();

    //iterate over an sentence modulo 
    return sentence.split("").map((char)=> String.fromCodePoint(((char.codePointAt(0) - 65 + key) % 26) + 65)).join("")
}


function caeserCipherDescyption(sentence,key = 3)
{
    // reduce bt 3
    sentence = sentence.trim().toUpperCase();

    return sentence.split("").map((char)=> String.fromCodePoint(((char.codePointAt(0) - 65 - key) % 26) + 65)).join("")
}


console.log(caeserCipherEncryption("Abc"))
console.log(caeserCipherDescyption("DEF"))

