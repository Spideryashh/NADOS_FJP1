//simple method
// task 1 = read a file (disk)
// task 2 = calculate prime

//cmd: node lackOfCallback.js --source=f1.txt --dest=f2.txt --n=50000

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);
function IsPrime(x){
    let isprime = true;
    for(let div=2;div*div<args.n;div++){
        if(x%div == 0){
            isprime = false;
            break;
        }
    }
    return isprime;
}

//task-1
let t1 = Date.now();
console.log("Starting task 1 at "+t1);

let data = fs.readFileSync(args.source);
let t2 = data;

t2 = Date.now();
console.log("Finishing task 1 at "+ t2);
console.log(t2-t1);
//---------------------------------

//task-2
let t3 = Date.now();
console.log("Starting task-2 at "+t3);

let arr = [];
for(let i=2;i<args.n;i++){
    let isprime = IsPrime(i);
    if(isprime == true){
        arr.push(i);
    }
}
let t4 = Date.now();
console.log("Finishing task-2 at "+t4);
console.log(t4-t3);
console.log(t4-t1);

