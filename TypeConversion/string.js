
//* case 1
const var1 = 33
console.log(var1)
console.log("Before type conversion : ", typeof var1)
console.log("After Type Conversrion : "+ " value:" + String(var1) + " type:" + typeof String(var1))
//^ 33 => "33"


//* case 2
const var2 = NaN
console.log(var2)
console.log("Before type conversion : ", typeof var2)
console.log("After Type Conversrion : "+ " value:" + String(var2) + " type:" + typeof String(var2))
//^ NaN => "NaN"

//* case 3
const var3 = true
console.log(var3)
console.log("Before type conversion : ", typeof var3)
console.log("After Type Conversrion : "+ " value:" + String(var3) + " type:" + typeof String(var3))
//^ true => "true"

//* case 3
const var4 = false
console.log(var4)
console.log("Before type conversion : ", typeof var4)
console.log("After Type Conversrion : "+ " value:" + String(var4) + " type:" + typeof String(var4))
//^ true => "false"