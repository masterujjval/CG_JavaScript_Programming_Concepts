const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


const getPalindrome = (num) => parseInt(num.toString().split("").reverse().join(""));


const checkPrimePalindrome = (num) => {
    if (!isPrime(num)) return `${num} is NOT a prime number.`;
    
    const palindrome = getPalindrome(num);
    return isPrime(palindrome)
        ? `${num} is Prime & its Palindrome ${palindrome} is also Prime!`
        : `${num} is Prime but its Palindrome ${palindrome} is NOT Prime!`;
};


rl.question("Enter a number: ", (num) => {
    console.log(checkPrimePalindrome(parseInt(num)));
    rl.close();
});

