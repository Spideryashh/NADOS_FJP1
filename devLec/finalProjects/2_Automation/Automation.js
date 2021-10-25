// node Automation.js --url="https://www.hackerrank.com/" --config=config.json
let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);
console.log(args.config);
//console.log(args.config);

let configJSON = fs.readFileSync(args.config,"utf-8");
let configJSO = JSON.parse(configJSON);
// console.log(configJSO);

run();
async function run(){
    //start browser
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : null,
        args : ['--start-maximized']
    });

    //get a tab
    let pages = await browser.pages();
    let page = pages[0];

    //go to url
    await page.goto(args.url);

    //click on login
    await page.waitForSelector('a[data-event-action="Login"]');
    await page.click('a[data-event-action="Login"]');

    //click on login2
    await page.waitForSelector("a[href='https://www.hackerrank.com/login");
    await page.click("a[href='https://www.hackerrank.com/login");

    //type userid
    await page.waitForSelector("#input-1.input");
    await page.type("#input-1.input",configJSO.userid);

    //type password
    await page.waitForSelector("#input-2.input");
    await page.type("#input-2.input",configJSO.password);

}