// let newFunct = async function f()
// {
//     console.log('Async function.');
//     return Promise.resolve(1);//Resolve is the result that we are going to pas to the then functions.
//     //Or let me rather say to the callback functions.
// }

// newFunct()
// .then(function(result){
//     console.log(result);
// })


let newValue;
//A promise
// let finalResultVariable;
let promise = new Promise(function (resolve, reject){
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 4000);
})

//Async Function
async function asyncFunction()
{
    //wait until the promise resolve
    let result = await promise;//Wait for 4 seconds before you run the program.
    console.log(result);//The result is gotten from the promise - 
    //This puts all the .thens inside an enclosing.
    console.log("Hello");
    newValue = result;//On this part of the track or in this time in space the newValue will get result - but if we get out of this frame of reference it wont work.


    //So because it is inside this block it waited first for the promise first before it displayed the hello.
    //I like how this tunred out.
    //So instead of waiting for the .then we just did it this way.
}

promise
.then(function(result){
    console.log(result);//What is interesting about these promises
    console.log(newValue);//Since it is not within the chain it won't work.
    //Is that both our results are going to execute in parallel to each other.
    return result;
})
.then(function(result){
    console.log("Hello");
    return result;
})
.then(function(result){
    console.log(`This is the result: ${result}`);//Result will be null because because we did not pass it down from the first function
    finalResultVariable = result;
})

//Calling the function
asyncFunction();

// console.log(finalResultVariable)//This will give us a null or undefined;
//So how can I get that result?
//In order for me to get that result I need to wait for it to come and then get it.
//Well the truth is we did get it, but not at the time that we wanted to get it at.
// var async finalResultVariable = await promise;
//Now let us say that I want to get into another part of the program and use it - that means the whole program is going to have to wait.
// console.log(finalResultVariable);
let returnedValue = promise.finally(function(){
    console.log("we are good")//But how can it display the finally while thepromise is still pending?
    return "Here is my answer";
});
// console.log(finalResultVariable = await promise.)

console.log(`The returned value is: ${returnedValue}` );//still not going to work because we cannot display the answer before the value has been returned.
