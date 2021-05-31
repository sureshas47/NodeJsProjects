const http = require("http");
const fs = require("fs");
var requests = require("requests");

const homeFile = fs.readFileSync("index.html", "utf-8");

const replaceVal=(tempVal, orgVal)=>{
    let temperature =tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min);
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max);
    temperature=temperature.replace("{%location%}",orgVal.name);
    temperature=temperature.replace("{%country%}",orgVal.sys.country);
    return temperature;
    // console.log(temperature);
}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid=3142bbef4a76777754b0f736682793f0"
    ).on("data", (chunk) => {
        const objData = JSON.parse(chunk); //get chunk in object
        const arrayData = [objData]; //put objData in array
       
        const realData= arrayData.map((item)=>replaceVal(homeFile,item)).join(""); //pass homeFile argument ==>callback..join("")=>files converts into string
            // console.log(realData);
            res.write(realData); 
        // console.log(arrayData[0].name);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        console.log("end");
        res.end();
      });
  }
});
server.listen(3001, "127.0.0.1");
