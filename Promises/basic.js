// //* create an promise

// const p = new Promise((resolev,reject)=>{
//     console.log('Sync flow')
//     resolev({name: "kp",age : 21})
// })


// console.log(p)

// p.then((result)=>{
//     console.log(result)
// })


// const p2 = new Promise((resolve,reject)=>{
//     resolve(10)
// })


// const p21 = p2.then()
// console.log(p21)

const p = Promise.resolve(10);

const p1 = p.then(value => value * 2);   // new Promise resolves with 20
const p2 = p.then(value => Promise.resolve(value + 5)); // new Promise resolves with 15
const p3 = p.then(value => { throw "Oops"; }); // new Promise rejected


Promise.reject("ok")
.finally((result) => {
        console.log(result)
		console.log("finally");
  })
.then((value) => {
		console.log(value);// ok
  });