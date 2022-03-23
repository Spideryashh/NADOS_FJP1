// pop : removes 1 value from the end
// pop : returns the removed value

let arr = [20,30,40,50,60];
displayArray(arr);

let rv = arr.pop();
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length)
}