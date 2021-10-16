let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

let arr = [];
for(let i=0;i<50;i++){  // for making file size 2 gb put 50000000 instead of 50
    arr.push(i);
}

let str = arr.join("\n");
//console.log(str);

fs.writeFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");
fs.appendFileSync(args.dest,str,"utf-8");