//node server is a part of core modules
// creating and running server

//import core modules
const http = require("http"); 
const fs = require("fs"); 
const path = require("path"); 
// assign hostname and port
const hostname = "localhost";
const port = "3000";


const server = http.createServer((req, res) => {
  // console.log(req.headers);
  
  console.log(`request for "${req.url}" by method "${req.method}"`); //find url and method coming from req 

  if (req.method == 'GET') {
    var fileURL;
    if (req.url == '/') { //if url is "/"
      fileURL = "/index.html";}  //this file will be opened
    else {fileURL = req.url;}

    var filePath = path.resolve("./public" + fileURL); //give proper/absolute(complete) path
    var fileExt = path.extname(filePath); //check extension of file inside filePath
    
    if (fileExt == '.html') {
      
       fs.access(filePath, error => { //check file available or not
        if (error) {
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html");
          res.end(`connection error with ${res.statusCode}, ${fileURL} doesn't exists`);
          
        } 
          res.statusCode = 200;
          // res.setHeader("Content-Type", "text/html");
           //createReadStream > convert file inside filePath into stream of bytes and pass through pipe & give to res
          //  fs.readFile lacks in big data
           fs.createReadStream(filePath).pipe(res);
        
      });
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html");
      res.end(`connection error with ${res.statusCode}, ${fileURL} *missing`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    res.end(
      `connection error with ${res.statusCode}, ${fileURL} no GET method found`
    );
  }
  
  //creating server
    // res.statusCode=200;
    // res.setHeader('Content-Type', 'text/html');
    // res.end(`connection ok with ${res.statusCode}`);
});

// listening port & hostname on server
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}`);
});

// When to use node js => data streaming apps (never ending data on scrolling like facebooks), 
// chat apps
// Input Output Bound => non blocking io accepts multiple request from server/database/disk
// this all happen by eventloop

