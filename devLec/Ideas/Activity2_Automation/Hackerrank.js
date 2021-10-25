// npm install puppeteer 
// node Hackerrank.js --url="https://www.hackerrank.com/auth/login"
let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require("puppeteer");
let args = minimist(process.argv);

const id = "labivos809@sc2hub.com"
const pw = "87654321"
let tab;

(async() => {
    let browser = await puppeteer.launch({
        headless : false,
        defaultViewport : null,
        args: ["--start-maximized"],
    });
    let pages = await browser.pages();
    await pages[0].goto(args.url);
        tab = pages[0];
        await tab.type("#input-1", id);
        await tab.type("#input-2", pw);
        await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"); // login hojata hai click se
        
        // await browser.close();
        console.log("browser closed");
})();
