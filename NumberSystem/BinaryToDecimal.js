
let no = 110

let decimal = 0;
let powerOf2 = 1;

while(no !== 0)
{
    const lastBit = no % 10;
    decimal = decimal + (lastBit * powerOf2);
    powerOf2 = powerOf2 * 2;
    no = Math.floor(no / 10);
}

console.log(decimal)



// binary -> decimal -> octal