const os=require("os");
// const arc=os.arch();
// const mem=os.freemem();
// const tot=os.totalmem();
const name=os.hostname();
// const platform=os.platform();
const temp=os.tmpdir();
const type=os.type();
console.log(type);

// console.log(`${tot/1024/1024/1024} gb`);
