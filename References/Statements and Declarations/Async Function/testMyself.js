// // doSomething(function (result){
// //     doSomethingElse(result, function (result){
// //         doThirdThing(newResult, function (finalResult){
// //             console.log(`Got the final : ${finalResult}`);
// //         })
// //     })
// // })

// function getValue(number)
// {
//     // console.log(number);//I want to take these results then process them
//     console.log(`The number entered is ${number}`)
//     return number;
// }

// function processResults(callback)
// {
//     let newValue = callback + +1;
//     console.log("Getting the new number from the \"getValue()\" function");
//     console.log(`Proccessing the new number into its new result which is : ${newValue}`)
//     return `The new value is ${newValue}`;
// }

// function displayResults(callback)
// {
//     return `The new processed number is ${callback}`;
// }
// // console.log(displayResults(processResults(getValue(1))));

// let enterValue = (value)=>{
//     console.log(`The numebr entered is ${number}`);
//     return number;
// }


// let getInitialValue = (number)=>{
//     console.log(`The number entered is ${number}`)
//     processInitialValue = (value)=>{
//         let newValue = value + +1;
//         console.log("Getting the new number from the \"getValue()\" function");
//         console.log(`Proccessing the new number into its new result which is : ${newValue}`);
//         displayFinalResults = (newValue)=>{
//             console.log(`The new processed number is ${newValue}`);
//         }
//         displayFinalResults(newValue);
//     }
//     processInitialValue(number);
// }



// getInitialValue(1);

// function doSomething()
// {
//     console.log("Hi there");
// }

// doSomething()
//     .then(function (result){
//         return doSomethingElse(result);
//     })
//     .then(function (newResult){
//         return doThirdThing(newResult);
//     })
//     .then(function (finalResult){
//         console.log(`Got the final results: ${finalResult}`)
//     })
//     .catch(failureCallBack);

//     doSomething()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThirdThing(newResult))
//   .then((finalResult) => {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

// let doSomething = Promise;
// console.log(doSomething.resolve());

// new Promise((resolve, reject) => {
//     console.log("Initial");
//     // console.log(resolve());
//     resolve();
//   })
//     .then(() => {
//       throw new Error("Something failed");
  
//       console.log("Do this");
//     })
//     .catch(() => {
//       console.error("Do that");
//     })
//     .then(() => {
//       console.log("Do this, no matter what happened before");
//     });
  
let names = new Promise((resolve)=>{
    resolve();
})
.then(()=>{
    setTimeout(() => {
        console.log("1");
        new Promise((resolve)=>{
            resolve();
        })
        .then(()=>{
            setTimeout(() => {
                console.log("This is the last Called Function")
            }, 5000);
        })
        .then(()=>{
            setTimeout(() => {
                console.log("We are nested inside our promise");
            }, 2000);
        })
        .then(()=>{
            setTimeout(() => {
                console.log("1.1")
            }, 1000);
        })
    }, 2000);

})
.then(()=>{
    console.log("2");
})
.catch(()=>{
    console.error("Error Found");
})
.then(()=>{
    console.log("3");
})
// Promise().then().then().then();
