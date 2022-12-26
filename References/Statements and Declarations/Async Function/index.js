let myPromise = new Promise(function(myResolve, myReject){//myResolve and myReject identifiers are named by the programmer, - remember here we are defining the function, or in other words we are declaring the object and initializing the object.
//The function that I am defining is called my executer.
  myResolve();//When  successfull
  myReject();//When error
});

// myPromise.result //You cannot access the promise properties state and result
myPromise.then(
  function(){console.log("We are here ")},
  function(error){console.log(error)}
);
//Promise.then takes two arguments, a callback for success and another for failure.
//Both are optional, so you can add a callback for success or failure only.



