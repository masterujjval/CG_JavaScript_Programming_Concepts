console.log("Enter a single digit number: ");
process.stdin.on("data",(data)=>{
const c=parseInt(data);
if(c<=9){

if(c===1)console.log("one");
else if(c===2)console.log("two");
else if(c===3)console.log("three");
else if(c===4)console.log("four");
else if(c===5)console.log("five");
else if(c===6)console.log("six");
else if(c===7)console.log("seven");
else if(c===8)console.log("eight");
else if(c===9)console.log("nine");

}
else console.log("Not a single digit number");

})
