function recursive(n)
{
    // base case
    if(n == 0)
        return 1;

    // take one step
    const wayToClimbBy1 = recursive(n-1);

    // take two step
    let wayToClimbBy2 = 0;
    if(n >= 2)
        wayToClimbBy2 = recursive(n-2);

    return wayToClimbBy1 + wayToClimbBy2;
}


function memorized(dp,n)
{
    // base case
    if(n <= 0)
        return 1;

    // memorized 
    if(dp[n])
        return dp[n];

    // take one step
    const wayToClimbBy1 = memorized(dp,n-1);

    let wayToClimbBy2 = 0;
    if(n >= 2)
        wayToClimbBy2 = memorized(dp,n-2);

    dp[n] = wayToClimbBy1 + wayToClimbBy2;
    return dp[n];
}

function tabularApproach(dp,n)
{
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    
    if(n>=3)
    {
        // look for n-1 + n-2 
        for(let i=3;i<=n;i++)
        {
            dp[i] = dp[i-1] + dp[i-2];
        }
    }
    return dp[n];
}

const dp = new Array(3).fill(null)

console.log(memorized(dp,3))
console.log(tabularApproach(dp,5))