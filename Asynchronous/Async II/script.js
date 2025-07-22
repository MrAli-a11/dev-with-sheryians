// call back and call back hell

// function stepOne(cb){
//   console.log('step 1');
//   cb()
// }

// function stepTwo(cb){
//   console.log('step 2');
//   cb()
// }

// function stepThree(cb){
//   console.log('step 3');
//   cb()
// }

// // call back hell

// stepOne(()=>{
//   stepTwo(()=>{
//     stepThree(()=>{
//       console.log('all are executed');

//     })
//   })
// })



// promises

// function stepOne() {
//   return new Promise((res, rej) => {
//     console.log('step 1');
//     res()
//   })
// }

// function stepTwo() {
//   return new Promise((res, rej) => {
//     console.log('step 2');
//     rej()
//   })
// }

// function stepThree() {
//   return new Promise((res, rej) => {
//     console.log('step 3');
//     res()
//   })
// }

// stepOne()
// .catch(stepTwo)
// .then(stepThree)
// .then(()=>{
//   console.log('All steps are done');
// })


