let Minimist = require("minimist");
let args = Minimist(process.argv);

let fs = require("fs");
let stext = fs.readFileSync(args.source ,"utf-8");
// console.log(stext);

let words = stext.split(" ");
console.log(words);

for(let i=0;i<words.length;i++){
    words[i]=words[i].toUpperCase();
}

let dtext = words.join(" ");
// console.log(dtext);   for printing it in console
fs.writeFileSync(args.dest, dtext, "utf-8");