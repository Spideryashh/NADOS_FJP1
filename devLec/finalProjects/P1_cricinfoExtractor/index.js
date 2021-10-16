//node index.js --excel=Worldcup.csv --dataFolder=data --source="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results"

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

    let Boxes=document.querySelectorAll("div.match-info-FIXTURES");  //fetch Box of all 48 teams on the page
    let matches=[];  // made an array of matches to put match details

    //made an array to to get each box one by one
    for(let i=0;i<Boxes.length;i++){    
        let Box=Boxes[i];  

        // made match object to put info of box
        let match = {       
            t1 : "",
            t2 : "",
            t1s : "",
            t2s : "",
            result : "",
        };

        //fetched team names t1 and t2
        let teamPara = Box.querySelectorAll("div.name-detail > p.name"); 
        match.t1 = teamPara[0].textContent;
        match.t2 = teamPara[1].textContent;
        //fetched t1s and t2s
        let teamSspan = Box.querySelectorAll("div.score-detail>span.score");
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
        let resultSpan = Box.querySelector("div.status-text > span"); 
        match.result = resultSpan.textContent;
    
        matches.push(match);
    }
    // console.log(Boxes.length);
    console.log(matches);

    let teams = [];
    for(let i=0;i<matches.length;i++){
        teamList(teams,matches[i].t1);
        teamList(teams,matches[i].t2);
    }
    console.log(teams);

    for(let i = 0;i<matches.length;i++){
        addMatchesToList(teams,matches[i].t1,matches[i].t2,matches[i].t1s,matches[i].t2s,matches[i].result);
        addMatchesToList(teams,matches[i].t2,matches[i].t1,matches[i].t2s,matches[i].t1s,matches[i].result);
    }
    
});
    function teamList(teams,teamName){
        let tidx = -1;
        for(let i=0;i<teams.length;i++){
            if(teams[i].name == teamName){
                tidx = i;
                break;
            }
        }
        if(tidx == -1){
            teams.push({
                name : teamName,
                matches : []
            })
        }
    }

    function addMatchesToList(teams,homeTeam,oppTeam,selfScore,oppScore,result){
        let tidx = -1;
        for(let i=0;i<teams.length;i++){
            if(teams[i].name == homeTeam){
                tidx = i;
                break;
            }
        }
        let team = team[tidx];
        team.matches.push({
            vs : oppTeam,
            selfScore : selfScore,
            oppScore : oppScore,
            result : result
        })
    }
    