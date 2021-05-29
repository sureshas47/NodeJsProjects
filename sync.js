const fs = require('fs');
//fs.writeFileSync('read.txt', "welcome" ) //file create with sync
//fs.writeFileSync('read.txt', "welcome to the world" )// this will overwrite the data inside read.txt file
//fs.appendFileSync("read.txt", ", mr. suresh adhikari"); //this will append data in same file

// const buf_data=fs.readFileSync("read.txt"); //read fille
// console.log(buf_data);
// results
// <Buffer 77 65 6c 63 6f 6d 65 6d 72 2e 20 73 75 72 65 73 68 20 61 64 68 69 6b 61 72 69 20 6d 72 2e 20 73 75 72 
//65 73 68 20 61 64 68 69 6b 61 72 69 2c 20 6d 72 ... 17 more bytes>

// const org_data=buf_data.toString(); //convert data to string
// console.log(org_data);
// results
//welcomemr. suresh adhikari mr. suresh adhikari, mr. suresh adhikari

//fs.renameSync("read.txt", "newRead.txt"); //rename file name

// challange..................................

// fs.mkdirSync("Thapa");
// fs.writeFileSync("Thapa/bio.txt","hello i am an youtuber teaches all different stacks everyday");
// fs.appendFileSync("Thapa/bio.txt",", i have nearly 1m subs now.");
// const data=fs.readFileSync("Thapa/bio.txt","utf-8"); //readfile without buffering !important utf-8
// console.log(data);
// fs.renameSync("Thapa/bio.txt","Thapa/mybio.txt");
// fs.rmSync("mybio.txt"); fs.unlinkSync("Thapa/mybio.txt"); //del file
//fs.rmdirSync("Thapa"); //del folder









