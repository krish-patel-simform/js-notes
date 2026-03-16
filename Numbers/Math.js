console.log(0 == -0)

function isIdentical(oldValue, newValue) {
  return Object.is(oldValue, newValue);
}

console.log("Without Object.is()")
console.log(NaN == NaN)  // false
console.log(0 === -0)    // true
console.log(5 === 5)     // true
console.log({} == {})    // false

console.log("Usiong Object.is()")
console.log(isIdentical(NaN, NaN));   // true
console.log(isIdentical(+0, -0));     // false 
console.log(isIdentical(5, 5));       // true
console.log(isIdentical("a", "b"));   // false
console.log(isIdentical({}, {}));     // false


// Math.random 


console.log(Math.random()*1)

const rand = Math.random()
console.log(rand)   // 0.7958888345951222
console.log(rand*10) // 7.958888345951221
console.log(rand*1000) // 795.8888345951221


// generatimg number from 1 to 6
console.log(Math.floor(rand*6) + 1)  


function getRandomNo(min,max)
{
    let rand = Math.random()
    const totalNoOfOutcome = (max-min+1)

    // general formula 
    // Math.floor(Math.random * totalNumberOfOutcome) + shift(min)

    rand = Math.floor(rand*totalNoOfOutcome) + min 
    return rand
}
console.log(getRandomNo(1,6))
console.log(getRandomNo(10,15))

console.log( 5.45.toFixed(1) );
console.log( 6.25.toFixed(1) );


let i = 0;
while (i != 10) {
  i += 0.2;
}

// let guestList = `Guests:
//  * John
//  * Pete
//  * Mary
// `;
let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // a list of guests, multiple lines


function greet() {
  console.log(this.name);
}
 
const obj1 = { name: "Bhavik" };
const obj2 = { name: "Rahul" };
 
const fn = greet.call(obj1).call(obj2);
// console.log(greet.bind(obj1))
// console.log(fn)
// fn();