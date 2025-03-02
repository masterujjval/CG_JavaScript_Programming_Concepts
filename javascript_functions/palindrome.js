const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isPalindrome = (num) => {
    const n = num.toString();
    return n === n.split("").reverse().join("");
};

const checker = (num1, num2) => {
    return isPalindrome(num1) && isPalindrome(num2)
        ? "Both numbers are Palindromes!"
        : "Both are NOT Palindromes!";
};

// Example Calls
rl.question("Enter the first number: ",(num1)=>{
rl.question("Enter second number: ",(num2)=>{
console.log(checker(parseInt(num1),parseInt(num2)));
rl.close();

})

}) 




