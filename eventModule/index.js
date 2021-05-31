const EventEmitter =require("events");
const event=new EventEmitter(); //creating an instance of events

// event.on('click',()=>{
//     console.log("event click");
// });
// event.on('click',()=>{
//     console.log("pop-up on click");
// });
// event.on('click',()=>{
//     console.log("console on click");
// })

// event.emit("click"); //fire event at down so we can listen event upl..handles multiple callback functions/listeners from one event

// register event with callback

event.on("checkPage",(sc, ms)=>{
    console.log(`success code:${sc}, page ${ms}`);
})

event.emit('checkPage',200,'ok');
