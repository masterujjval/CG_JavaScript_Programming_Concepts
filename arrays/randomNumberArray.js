

function rand(arr){
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 1000); 
    }
    }

// to find the 2nd largest
function secondHighest(arr){
let temp1=arr[0];
let temp2=0;
for (let i = 1; i < 10; i++) {
   if(arr[i]>temp1){
   temp2=temp1;
   temp1=arr[i];
   }
   else if(arr[i]>temp2)temp2=arr[i];
   
}
console.log(`Second largest number is ${temp2}`);
}
function main(){
let arr = new Array(10);
rand(arr);
secondHighest(arr);
}
main();
