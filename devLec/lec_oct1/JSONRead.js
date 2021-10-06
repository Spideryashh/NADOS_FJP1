//node JSONRead.js --source = teams.json

let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,json){

    if(err){
        console.log("err");
    }else{
        console.log(json);
    }
})
// JSO -> JSON using JSON.stringify [ because JSO cannot be printed]
// JSON -> JSO using JSON.parse [ because JSON file cannot be manipulated]