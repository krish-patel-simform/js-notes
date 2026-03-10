//* for loop (Entry Controlled Loop)

//^ normal syntax
// for (initialization; condition; update) {
//    code
// }

//^ skip the initialized part and increment/decrement part
let i = 0
for(;i<3;)
{
    console.log(i++)
}
console.log("outside the loop:",i)

//^ we can skip every thing to create an infiinite loop
// for(;;)
// {
//     console.log("hello world")
// }
//^ print only even number from 2 to 10
for(let i=2;i<=10;i+=2)
{
    console.log(i)
}


//* while loop (Entry controlled Loop)
// while(condition){
//    // code
// }
let var2 = 1;

while (var2 <= 5) {
  console.log(var2);
  var2++; // if forget to put increment/decrement then it create the infite loop
}

//* do while (Exit Controlled loop)
// do{
//     //code
// }while(condition)

let var3 = 1;
do {
  console.log(var3);
  var3++;
} while (var3 <= 5);

do{
    const no = prompt("Enter Number Greater than 100",0)
}while(no<=100 && no)


//* for of loop : used to iterate over value used only for iterable type
const arr = [1,2,3,4,5]
for(const value of arr)
{
    console.log(value) // print the value
}

const obj = {name: "kp",age : 21} // this is not iterable type so we can not use for of
// for(const val of obj)
// {
//     console.log(val)
// }


//* for in loop : used to iterate over key 

for(const key in obj)
{
    console.log(key)
}

for(const value in arr)
{
    console.log(value) // array index is key 
}


// scenarios
const n = 10
for(let i=2;i<=n;i++)
{
    let isPrime = true
    for(let j=2;j<i;j++)
    {
        if((i % j) == 0)
        {
            isPrime = false
            break
        }
    }   
    
    if(isPrime)
        console.log(i)
}