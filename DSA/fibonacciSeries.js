//* Approach 1 : iterative approach

function iterativeApproach(n)
{
    let a = 0;
    let b = 1;
    console.log(a,b)

    for(let i=3;i<=n;i++)
    {
        const c = a + b;
        console.log(c)
        a = b;
        b = c;
    }
}

iterativeApproach(6)

//* Approach 2 : Recursion call

function recursionCall(n,a=0,b=1)
{
    // base case
    if(n == 0 )
        return a;

    // explore futher
    return recursionCall(n-1,b,a+b)
}

console.log(recursionCall(6))


