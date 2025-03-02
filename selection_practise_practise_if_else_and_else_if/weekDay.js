console.log("Enter the weekday between 1 to 7");
process.stdin.on("data",(data)=>{
let b=parseInt(data);
if(b===1)console.log("sunday");
else if(b===2)console.log("monday");
else if(b===3)console.log("tuesday");
else if(b===4)console.log("wednesday");
else if(b===5)console.log("thursday");
else if(b===6)console.log("friday");
else if(b===7)console.log("saturday");
});

