// const count = true;

// let countValue = new Promise(function (resolve, reject){
//     if(count)
//         resolve("There is a count value");
//     else
//         reject("There is no count value");
// });
// console.log(countValue);
// countValue
// .then(
//     function(){console.log("We are about to count value")},//If resolve is true -- or rather promise.status is fulfilled
//     function(error){console.log("We are not going to count any value"); return false}//promise.status is rejected - it is rejected when 
// )
// // .then(
// //     function(value){console.log("We are not doing well")},
// //     function(error){console.log("We are ending here")}
// // )
// console.log(countValue);

let myPromise  = new Promise(function(resolve, reject){
    var newValue = true;
    if(newValue)
    {
        resolve("The value is true");
    }
    else
    {
        let myObject = {name: "Thato", surname: "Continue"}
        reject(myObject);//This takes a promise and returns.
    }
});

myPromise
.then(function successfull(result){//The result gotten from the promise
    console.log(result);//I see here we get the result -- but what do we do with the result after we get it -- where does it go after here?
    //Here is where we get the result
    return result;//We can take the same result and then pass it another promise
    //If we do not write a return then we are not going to have the result later.
})
.then(function notSuccessfull(result){
    console.log(`Hi there the result is: ${result}`);
    let newResult = `${result} notSuccesfull has made some changes`;
    return newResult;
})
.then(function showFinalAnswer(result){
    console.log(result);
})
.catch(function weAreCatching(result){
    console.log(result);
    return result;
})
.finally(function returnAll(result){
    console.log(`This is what happend ${result}`);
    /*A finally callback will not receive any argument, since there's no reliable means of determining if the promise was fulfilled or rejected. This use case is for precisely when you do not care about the rejection reason, or the fulfillment value, and so there's no need to provide it.*/
})
