let args = process.argv;
let n = parseInt(args[2]);

let arr = []; //array declaration 
for(let i=0;i<n;i++){
    let val = parseInt(args[i+3]); // because array input starts from 3rd index in the terminal
    arr.push(val);                  // or arr[i] = val;
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);            // array digits one by one printed
}

console.log(arr);                   //whole array got printed
console.log(arr.length);            //length of array got printed