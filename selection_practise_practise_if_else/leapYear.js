let a=parseInt(prompt("Enter the year: "));
if(a%4===0){
	if(a%100!=0){
		if(a%400==0){
			console.log("Leap year")
		}
	}
}
else{
	console.log("Not a leap year");
}
