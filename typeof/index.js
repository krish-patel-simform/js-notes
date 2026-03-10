// Type of operator is used to check what type of operant it is 

console.log(typeof undefined) // 'unedfined'

console.log(typeof 1) // 'number'
 
console.log(typeof 123456n) // 'bigint'

console.log(typeof "Hello") // 'string'

console.log(typeof true) // 'boolean'

console.log(typeof Symbol()) // 'symbol'


console.log(typeof null) // 'object' here is bug in js that still not resoved , null is primitive datatype but show as object

console.log(typeof [1,2,3]) // 'object'

console.log(typeof function(){}) // 'function'
