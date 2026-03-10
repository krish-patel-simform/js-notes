// ! operator and function are automatically convered into its right type 

// ^ "6" / "2" = > ans is 3 this operator automatically converted into number

// how we convert various data type in to number

// for each primitive type there is one wrapper class is exist that used to convert to specofic data type

//* case 1 
const var1 = "33"
console.log(var1)
console.log("Before type conversion : ", typeof var1)
console.log("After Type Conversrion : "+ " value:" + Number(var1) + " type:" + typeof Number(var1))
//^ "33" = > number


//* case 2
const var2 = "33abcsd"
console.log(var2)
console.log("Before type conversion : ", typeof var2)
console.log("After Type Conversrion : "+ " value:" + Number(var2) + " type:" + typeof Number(var2)) // it return NaN because it is not valid number operation
//^ "33abcsd" => NaN (Not an Number)

//* case 3
const var3 = true
console.log(var3)
console.log("Before type conversion : ", typeof var3)
console.log("After Type Conversrion : "+ " value:" + Number(var3) + " type:" + typeof Number(var3))
// ^ true => 1 / false => 0

//* case 4
const var4= undefined
console.log(var4)
console.log("Before type conversion : ", typeof var4)
console.log("After Type Conversrion : "+ " value:" + Number(var4) + " type:" + typeof Number(var4))
// ^ undefined => NaN


//* case 5
const var5 = null
console.log(var5)
console.log("Before type conversion : ", typeof var5)
console.log("After Type Conversrion : "+ " value:" + Number(var5) + " type:" + typeof Number(var5))
// ^ null => 0

