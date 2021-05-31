
const fs=require("fs");

const bio={
name:"suresh adhikari",
age:"24 yrs",
channelName:"code with coffee"
}

// convert object to JSON
const jsonData=JSON.stringify(bio);

fs.writeFile("json.json", `${jsonData}`,(err)=>{
    console.log("data sent to json file");
});
fs.readFile("json.json","utf-8",(error,data)=>{
    console.log(data+" /data reading");
    const object=JSON.parse(data);
    console.log(object+" /old form of data");
    console.log(object.channelName);
})




// convert json to object
// const getData=JSON.parse(jsonData);
// console.log(getData.channelName+" /object file");