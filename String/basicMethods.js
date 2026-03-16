let str = "Krish Patel"

console.log(str.toUpperCase())
console.log(str.toLowerCase())

str = "\tKrish\tPatel\t"
console.log("before the trim :"+str)
console.log("After trim :"+str.trimEnd())


str = 'As sly as a fox, as strong as an ox';

console.log(str.startsWith("sly",-str.length))

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  console.log(foundPos)
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}

let arr = [1,2,3]
for(let index in arr)
{
    console.log(index)
}