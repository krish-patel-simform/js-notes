const p = new Promise((resolve,reject)=>{
    console.log("Executor executing the promise ")
    resolve(10)
})


p.then((result)=>{ 
    console.log(result)
}).then((result)=>{
    console.log(result)
})

function delay(ms) {
  // your code

  return new Promise((resolve,reject)=>{
    setTimeout(resolve, ms);
  })
}

delay(3000).then(() => alert('runs after 3 seconds'));



new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});


//* the execution: catch -> then
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));


//* rethow the error
new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) { // (*)

  if (error instanceof URIError) {
    // handle it
  } else {
    alert("Can't handle such error");

    throw error; // throwing this or another error jumps to the next catch
  }

}).then(function() {
  /* doesn't run here */
}).catch(error => { // (**)

  alert(`The unknown error has occurred: ${error}`);
  // don't return anything => execution goes the normal way

});

new Promise((resolve, reject) => {

  throw new Error("Whoops!");

}).catch(function(error) {

  console.log("The error is handled, continue normally");

}).then(() => console.log("Next successful handler runs"));