// 4 types streams==>readable, writable (duplex,transform ==> rearly used)

// events==>data (this will be called during reading ex,watching youtube vid), end, error, finish

const fs=require('fs');
const http=require('http');
const server=http.createServer();

server.on('request',(req,res)=>{ //if someone do request to our server
    //1.without data streaming 
    // fs.readFile("input.txt",(err,data)=>{ 
    //     if(err)return console.log(err);
    //     res.end(data.toString())
    // });

    //2.data streaming long way
    const rStream=fs.createReadStream("input.txt") //create a readable stream
        //call/fire data event to read avaliable data
    // rStream.on('data', (chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rStream.on('end',()=>{
    //     res.end();
    // });
    // rStream.on('error',(err)=>{

    //         res.end("file not found");
    // })

    //3.data streaming short and new way

rStream.pipe(res);

});
server.listen(3000,"127.0.0.1");
