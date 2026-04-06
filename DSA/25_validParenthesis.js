//* Write a function that takes a string of parentheses and determines if the order of the parentheses is valid.


function isValidParentheses(expression)
{
    let count = 0;
    
    for(const char of expression)
    {
        if(char === '(')
            count++;
        else if(char === ')')
            count --;
    }

    return count === 0;
}

console.log(isValidParentheses("")) // true
console.log(isValidParentheses("(")) // false
console.log(isValidParentheses(")")) // false
console.log(isValidParentheses("()()")) // true
console.log(isValidParentheses("(())")) // true