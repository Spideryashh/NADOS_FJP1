let Minimist = require("minimist");
let args = Minimist(process.argv);
let fs = require("fs");

//read
let stext = fs.readFileSync(args.source,"utf-8");

//capitalize
let dtext = stext.toUpperCase();

//write
fs.writeFileSync(args.dest,dtext,"UTF-8");