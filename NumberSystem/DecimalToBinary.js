// decimal to binary conversion means divide the number by / 2

let no = 5;
const ans = []

while(no !==  0)
{
    const r = no % 2 ?? 1;
    ans.push(r)
    // no = Math.floor(no / 2);
    // here we can use right hift operator for faster division
    no = no >> 1
}

console.log(ans.reverse().join(""))
