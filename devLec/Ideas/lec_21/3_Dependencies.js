let Minimist = require ("minimist");
let args = Minimist(process.argv);

// console.log(args);    for showing minimist feature 
// cmd : node 3_Dependencies.js --name="yash Varshney" --age=20
let name = args.name;
let age = args.age;

if(age>30){
    console.log("hello "+ name +"go home");
}else{
    console.log("hey  "+name+" let's party!!");
}