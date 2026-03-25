const p1 = new Promise((resolve,reject)=>{
    console.log('promise 1 started')

    setTimeout(()=>{
        resolve(1)
    },1000)
})

const p2 = new Promise((resolve,reject)=>{
    console.log("Promise 2 started")
    setTimeout(()=>{
        reject("ndjkfn")
    },2000)
})

const p3 = new Promise((resolve,reject)=>{
    console.log("Promise 2 started")
    setTimeout(()=>{
        resolve("ndjkfn")
    },2000)
})

// let pAll1 = Promise.all([p1,p2])
// console.log(pAll1)
// pAll1.catch((err)=>{console.log("Error hanlded",err)})

// let pAll2 = Promise.all([p1,p3])
// console.log(pAll2)
// pAll2.then((result)=>{console.log(result)})

// console.log(Promise.all([]))

// All settled

// console.log(Promise.allSettled([p1,p2,p3]))
// console.log(Promise.allSettled([]))

// race

// console.log(Promise.race([p1,p2,p3]))
// console.log(Promise.race([p2,p3]))
// console.log(Promise.race([]))

//* any
p1.then((val)=>{console.log("P1 then called", val)}).catch((err)=>{console.log("P1 error called ",err)})
p2.then((val)=>{console.log("P1 then called", val)}).catch((err)=>{console.log("P1 error called ",err)})
p3.then((val)=>{console.log("P1 then called", val)}).catch((err)=>{console.log("P1 error called ",err)})
console.log(Promise.any([p1,p2,p3]))


Promise.resolve(1)
  .then(x => x + 1)
  .then(x =>  new Error("Error here") )
  .then(x => console.log(x))
  .catch(err => console.log("Caught:", err.message));

  Promise.resolve().then(() => {
  console.log("A");
   new Error("err");
}).then(() => {
  console.log("B");
}).catch(() => {
  console.log("C");
}).then(() => {
  console.log("D");
});


Promise.reject(10)
  .then(
    res => {
      throw new Error("Inside then");
    },
    err => console.log("Error:", err)
  )
  .catch(err => console.log("Caught:", err.message));


