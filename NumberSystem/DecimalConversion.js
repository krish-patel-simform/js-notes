function decimalConversion(no,base)
{
    const ans = []
    while(no != 0)
    {
        let r = no % base;
        
        //here answer comes 
        if(base === 16 && r >= 10)
            r =  String.fromCharCode(65 + (r - 10))

        ans.push(r)

        no = Math.floor(no / base)
    }
    return(ans.reverse().join(""))
}

console.log("Decimal to Octal")
console.log("10=>" + decimalConversion(10,2))
console.log("5=>" + decimalConversion(5,2))


console.log("Decimal to Octal")
console.log("10=>" + decimalConversion(10,8))
console.log("5=>" + decimalConversion(5,8))


console.log("decimal to Hexa")
console.log("10=>" + decimalConversion(1010,16))
console.log("5=>" + decimalConversion(5,16))

