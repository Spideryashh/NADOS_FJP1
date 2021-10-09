let minimist = require("minimist");
let axios = require("axios");
let jsdom = require("jsdom");
let excel = require("excel4node");
let pdf = require("pdf-lib");
let fs = require("fs");
let path = require("path");


let args = minimist(process.argv);

// download html using axios
downloadPromise = axios.get(args.source);
downloadPromise.then(function(response){
    let html = response.data;
    // console.log(html);

    // process data using jsdom  (to use dom document features in pc we use jsdom)
    let dom = new jsdom.JSDOM(html);
    let document = dom.window.document;
    // console.log(document.title);

    let matches=[];  // made an array of matches to put match details
    let ScoreBoxes=document.querySelectorAll("div.match-info-FIXTURES");  //fetch scoreBox of all 48 teams on the page

    //made an array to to get each box one by one
    for(let i=0;i<ScoreBoxes.length;i++){    
        let ScoreBox=ScoreBoxes[i];  

        // made match object to put info of Scorebox
        let match = {       
            t1 : "",
            t2 : "",
            t1s : "",
            t2s : "",
            result : "",
        };

        //fetched team names t1 and t2
        let teamPara = ScoreBox.querySelectorAll("div.name-detail > p.name"); 
        match.t1 = teamPara[0].textContent;
        match.t2 = teamPara[1].textContent;
        //fetched t1s and t2s
        let teamSspan = ScoreBox.querySelectorAll("div.score-detail>span.score");
        if(teamSspan.length == 2){
            match.t1s = teamSspan[0].textContent;
            match.t2s = teamSspan[1].textContent
        }else if(teamSspan.length == 1){
            match.t1s = teamSspan[0].textContent;
            match.t2s = "";
        }else{
            match.t1s = "";
            match.t2s = "";
        }
        //fetched result 
        let resultSpan = ScoreBox.querySelector("div.status-text > span"); 
        match.result = resultSpan.textContent;
    
        matches.push(match);
    }
    // console.log(ScoreBoxes.length);
    // console.log(matches);

    let teams = [];
    for(let i=0;i<matches.length;i++){
        teamList(teams,matches[i]);
    }
    console.log(teams);
      
});

function teamList(teams,match){
    
}