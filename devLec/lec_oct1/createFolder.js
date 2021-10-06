// node createFolder.js --source=teams.json --dest=root

let path = require("path");
let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

let teamsJSON = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamsJSON);

for(let i=0;i<teams.length;i++){
    let folderName = path.join(args.dest,teams[i].name);
    fs.mkdirSync(folderName);
}