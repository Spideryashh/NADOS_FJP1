//READ DATA FROM THE SOURCE : cricinfo worldcup 2019 [axios];
//PROCESS DATA : Get all teams (jsdom);
//WRITE PROCESSED DATA IN EXCEL : Match result per team in their own team [excel4node];
//CREATE FOLDERS : one for each team;
//WRITE FILES : pdf files[pdf-lib];

let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let path = require("path");
let args = minimist(process.argv);

//step-1 : Downloading html of url where data is present 
let responsePromise = axios.get(args.source);  //download html promise

responsePromise.then(function(response){
    let html = response.data;
    let dom = new jsdom.JSDOM(html);            //using jsdom to process data
    let document = dom.window.document;

    let matches = [];
    let matchScoreDivs = document.querySelectorAll("div.match-score-block");
    for(let i = 0; i < matchScoreDivs.length; i++){
        let match = {
        };

        let namePs = matchScoreDivs[i].querySelectorAll("p.name");
        match.t1 = namePs[0].textContent;
        match.t2 = namePs[1].textContent;

        let scoreSpans = matchScoreDivs[i].querySelectorAll("div.score-detail > span.score");
        if(scoreSpans.length == 2){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = scoreSpans[1].textContent;
        } else if(scoreSpans.length == 1){
            match.t1s = scoreSpans[0].textContent;
            match.t2s = "";
        } else {
            match.t1s = "";
            match.t2s = "";
        }

        let spanResult = matchScoreDivs[i].querySelector("div.status-text > span");
        match.result = spanResult.textContent;

        matches.push(match);
        // console.log(i);
    }

    console.log(matches);
}).catch(function(err){
    console.log(err);
})
