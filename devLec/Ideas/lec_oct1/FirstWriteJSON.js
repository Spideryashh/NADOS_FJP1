// node FirstWriteJSON.js --dest=teams.json
let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);
let teams = [
    {
        name:"India",
        rank:1,
        matches:[
            {
                vs : "Australia",
                result : "Win"
            },
            {
                vs : "England",
                result : "Win"
            }
        ]
    },
    {
        name:"Australia",
        rank:1,
        matches:[
            {
                vs : "India",
                result : "Loss"
            },
            {
                vs : "England",
                result : "Win"
            }
        ]
    },
    {
        name:"England",
        rank:1,
        matches:[
            {
                vs : "Australia",
                result : "Loss"
            },
            {
                vs : "India",
                result : "Loss"
            }
        ]
    }
];

let json = JSON.stringify(teams);
fs.writeFileSync(args.dest,json,"utf-8");