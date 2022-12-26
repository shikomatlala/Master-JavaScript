const number = [3, 1, -5, -2, -7, -8, -1, 10, 23, 55];



function removeNeg(number, callback)
{
    var positiveArray = [];
    for(const i of number)
    {
        if(callback(i))
        {
            positiveArray.push(i);
        }
    }
    return positiveArray;
}

positiveNumbers = removeNeg(number, (x)=>{return x >= 0});
console.log(positiveNumbers);


// const myNumbers = [4, 1, -20, -7, 5, 9, -6];
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Display Result
// console.log(posNumbers);

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//   const myArray = [];
//   for (const x of numbers) {
//     if (callback(x)) {
//       myArray.push(x);
//     }
//   }
//   return myArray;
// }