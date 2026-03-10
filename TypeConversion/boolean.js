//! boolean only understand 0 and 1 
//! for string : isEmpty so cosider as 0/false and with any length is consider as 1/True

//* case 1
const var1 = "";
console.log(var1)
console.log("Before type conversion : ", typeof var1)
console.log("After Type Conversrion : "+ " value:" + Boolean(var1) + " type:" + typeof Boolean(var1))
//^ "" => false

//* case 2
const var2 = "vnkfdngvksfd";
console.log(var2)
console.log("Before type conversion : ", typeof var2)
console.log("After Type Conversrion : "+ " value:" + Boolean(var2) + " type:" + typeof Boolean(var2))
//^ "jksdbvjkfd" => true


//* case 3
const var3 = 1;
console.log(var3)
console.log("Before type conversion : ", typeof var3)
console.log("After Type Conversrion : "+ " value:" + Boolean(var3) + " type:" + typeof Boolean(var3))
//^ 1 => true


//* case 4
const var4 = 0;
console.log(var4)
console.log("Before type conversion : ", typeof var4)
console.log("After Type Conversrion : "+ " value:" + Boolean(var4) + " type:" + typeof Boolean(var4))
//^ 0 => false


//* case 5
const var5 = 3;
console.log(var5)
console.log("Before type conversion : ", typeof var5)
console.log("After Type Conversrion : "+ " value:" + Boolean(var5) + " type:" + typeof Boolean(var5))
//^ 3 => true


//* case 6
const var6 = null;
console.log(var6)
console.log("Before type conversion : ", typeof var6)
console.log("After Type Conversrion : "+ " value:" + Boolean(var6) + " type:" + typeof Boolean(var6))
//^ null => false

//* case 7
const var7 = undefined;
console.log(var7)
console.log("Before type conversion : ", typeof var7)
console.log("After Type Conversrion : "+ " value:" + Boolean(var7) + " type:" + typeof Boolean(var7))
//^ undefined => false