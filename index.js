const express = require("express");
const app = express();
const morgan = require("morgan");

app.use((req, res, next) => {
    let date = new Date();
    let timeTaken;
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    
  res.on("finish", () => {
    let endTime = new Date();
      timeTaken = endTime.getMilliseconds() - date.getMilliseconds();
      console.log("TimeTaken-" + timeTaken+" milliseconds");
  });
    console.log("Nipun's MiddleWare");
    console.log("Requested Url-"+req.url+"\n"+"Requested Method-"+req.method+"\n"+"TimeStamp-"+time);
  next();
});

app.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen(3213, () => {
  console.log("running");
});