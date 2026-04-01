// // function makeIterator(start = 0,end = Infinity, step =1)
// // {
// //     let current = start

// //     return {

// //         next()
// //         {
// //             if(current <= end)
// //                 return { value : current++, done : false}
// //             else
// //                 return { done : true, value: null}
// //         }
// //     }
// // }

// // const myIterator = makeIterator(1,10)

// // let result = myIterator.next()
// // while(!result.done)
// // {
// //     console.log(result.value)
// //     result = myIterator.next()
// // }



// //* create an Generator 

// function* myGenerator()
// {
//     yield 1;
//     yield 2;
//     yield 3;

//     return 4;
// }

// console.log(myGenerator)
// console.log(myGenerator())


// function*gen() {
// 	console.log("A");
// 	yield 1;

// 	console.log("B");
// 	yield 2;

// 	console.log("C");
// 	return 3;
// }

// const g = gen();

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// function* generateSequence() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let sequence = [0, ...generateSequence()];

// console.log(sequence); // 0, 1, 2, 3



function* fetchData() {
  let user = yield new Promise(resolve =>
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 10000)
  );

  let posts = yield new Promise(resolve =>
    setTimeout(() => resolve(["post1", "post2"]), 2000)
  );

  return posts;
}

// console.log(fetchData().next().value)
// console.log(fetchData().next().value)

for(let p of fetchData())
{
    console.log(p)
}


function*test() {
	console.log("Hello");
	return 10;
}

console.log(test().next())
console.log(test().next())
console.log(test().next())


let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {

        if(value == 3)
            return value

      yield value;
    }
  }
};

console.log( [...range] ); // 1,2,3,4,5


function* gen() {
  const a = yield 1;
  console.log("a =", a);

  const b = yield 2;
  console.log("b =", b);
}

const g = gen();

console.log(g.next());        // start, yields 1
console.log(g.next("ONE"));   // "ONE" goes back into first yield
console.log(g.next("TWO"));   // "TWO" goes back into second yield


function* inner() {
  console.log("inner start");
  yield 1;

  console.log("inner middle");
  yield 2;

  console.log("inner end");
  return 3;
}

function* outer() {
  console.log("outer start");
  yield "A";

  console.log("before yield*");
  const result = yield* inner();
  console.log("after yield*, result =", result);

  yield "B";
}

const g = outer();


function* gen()
{
    yield 1;
    yield 2;
    yield 3;

    return 4;
    yield 5;
}
const g = gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
