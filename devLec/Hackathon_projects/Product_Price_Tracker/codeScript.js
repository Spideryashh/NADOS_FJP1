// node codeScript.js --url="https://www.amazon.in/Logitech-C270-HD-Webcam-Black/dp/B008QS9J6Y/" --minPrice=2000
let nodemailer = require('nodemailer');
let nightmare = require('nightmare')()
let minimist = require("minimist");
let args = minimist(process.argv);

checkPrice()
async function checkPrice() {
    let priceString = await nightmare.goto(args.url)
                                     .wait(".a-size-medium.a-color-price.priceBlockDealPriceString")
                                     .evaluate(() => document.querySelector(".a-size-medium.a-color-price.priceBlockDealPriceString").innerText)
                                     .end()
    let price = priceString.replace(',', '');
    let priceNumber = parseInt(price.replace('₹', ''))
    console.log("Current Price is : "+priceString);
    // console.log(priceNumber);
    if (priceNumber < args.minPrice) {
      sendNotification(priceString)
    }
}

async function sendNotification(priceString) {
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '******@gmail.com',
      pass: '**********'
    }
  });

  let textToSend = 'Price Is Low , go check it out your product is in your budget \n '+"Current Price = "+priceString+ "\n url : "+args.url;
  let htmlText = ""

  let info = await transporter.sendMail({
    from: '"Product_Price_Tracker" <******@gmail.com>',
    to: "yashvarshneyxih@gmail.com",
    subject: "Product Notification", 
    text: textToSend,
    html: htmlText
  });

  console.log("Message sent: %s", info.messageId);
}