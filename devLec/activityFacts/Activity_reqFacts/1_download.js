// node download.js --url="any url whose file u want to download" --dest="download.html"
//npm install axios
let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");

let args = minimist(process.argv);

// code
let DownloadPromise = axios.get(args.url); //download promise initiated for url

DownloadPromise.then(function(response){    //if promise completed then it will return it to function
    let html = response.data;               // storing response of promise in html variable
    fs.writeFileSync(args.dest,html,"utf-8");   //pasting and creating downloaded file 
}).catch(function(err){                 // if any problem occur in promise then it will return error
    console.log("something wrong");
})
//