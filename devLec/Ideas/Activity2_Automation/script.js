let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config,"utf-8");
let configJSO = JSON.parse(configJSON);

console.log(args.url);


async function run (){
    let browser = await puppeteer.launch({
        headless : false,
        args : ['--start-maximized'],
        defaultViewport : null,
    })

    let pages = await browser.pages();
    let page = pages[0];
    
    await page.goto(args.url);
    await page.click("a[data-event-action = 'Login']");
    await page.click("span.fl-button-text");
}
run();