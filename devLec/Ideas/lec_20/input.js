let args = process.argv;  //it prints everything we type in cmd line , also data of node and filename we run
console.log(args);

let i = args[2]; //the input value we provide is at the [2] index so we store it in a variable so other garbage values are not printed
console.log(i); 

//for better understanding of process.argv the following output is made

//input of cmd => node input.js 17 march 2001
console.log("at 0 "+ args[0]);  //at 0 C:\Program Files\nodejs\node.exe
console.log("at 1 "+ args[1]);  //at 1 C:\Users\Yash Varshney\OneDrive\Desktop\devclasses\Module1\sumeetSirLec\lec_20\input.js
console.log("at 2 "+ args[2]);  //at 2 17
console.log("at 3 "+ args[3]);  //at 3 march
console.log("at 4 "+ args[4]);  //at 4 2001
// so we understand out input starts from [2]index

//input of cmd => node input.js 17 "march 2001"
console.log("at 0 "+ args[0]);  //at 0 C:\Program Files\nodejs\node.exe
console.log("at 1 "+ args[1]);  //at 1 C:\Users\Yash Varshney\OneDrive\Desktop\devclasses\Module1\sumeetSirLec\lec_20\input.js
console.log("at 2 "+ args[2]);  //at 2 17
console.log("at 3 "+ args[3]);  //at 3 march 2001
console.log("at 4 "+ args[4]);  //at 4 undefined
// anything inside quotes are treated an single quantity

// cmd input node input.js 10
// value of i is in line 4
console.log(typeof i); // prints the variable datatype
i=i+30;                 // it prints 1030 as datatype is string so it concanetate
console.log(i);

let j = parseInt("10",10); //parseInt converts the datatype to int , first 10 is value and next 10 is base value
console.log(j);
console.log(typeof j);
j=j+30;                 //  prints 40 because datatype is converted into int , so it sums it up
console.log(j);