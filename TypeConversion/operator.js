//! Arithmetic operator

// *case 1
console.log("Basic Arithmetic operator")
console.log(`"10" - 5 => `, "10" - 5)

console.log(`"10" - "5" => `, "10" - "5")

console.log(`"10" / 5=>`, "10" / 5)

console.log(`"10" * "5"=>`, "10" * "5")


//* special case for + operator
console.log("")
console.log("special case for + operator")
console.log("if any operand is string so it concatenate")
console.log("it start from left to right look at last example")


console.log(`"10" + 5 => `, "10" + 5)
console.log(`"10" + "5" => `, "10" + "5")
console.log(`10 + 5 => `, 10 + 5)
console.log(`5 + 2 +"10" + 5 => `, 5 + 2 + "10" + 5) // start from left to right 


// equality comparison operator
console.log(`[] == ![] => `,[] == ![])
console.log(`"10" == 10 => `, "10" == 10)
console.log(`"abc" ==  10 => `, "abc" == 10)
console.log("[] == [] => ",[] == []) // [] is reference type both have different reference 