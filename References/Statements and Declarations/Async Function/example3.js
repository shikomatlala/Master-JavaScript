//a promise
let value = true;
let promise = new Promise(function myFunction (resolve, reject){
    //Thsi rejected because it did not get the value from where it was supposed to get the value.
    if(value)//Value we can read - so I am learning that when it comes to reading some values we can read them very well without any stress
    {
        setTimeout(() => {
            resolve("Promise Resolved");
        }, 4000);
    }
    else
    {
        reject("Promise Rejected");
    }
    // setTimeout(() => {
    //     resolve("Promise Resolved");//Remember you can pass anything inside resolve.
    // }, 4000);
});

let myAsync = async ()=>
{
    try
    {
        //wait until the promise resolves
        let myResult = value;
        let result = await promise;
        console.log(`${result}  | also the value is: ${value}`);
        return value;
    }
    catch(error)
    {
        console.log(`The error is ${error}`);
    }

}

// asyncFunction();

myAsync().then(function(result){
    console.log(result);
})