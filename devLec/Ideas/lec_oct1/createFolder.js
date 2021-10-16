// node createFolder.js --source=teams.json --dest=root

let path = require("path");
let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source,"utf-8");  //reads the source file 
let teams = JSON.parse(teamsJSON);  //json -> jso so that we can manipulate it 

for(let i=0;i<teams.length;i++){
    let folderName = path.join(args.dest,teams[i].name); //
    fs.mkdirSync(folderName);  //creates folder with the path
}