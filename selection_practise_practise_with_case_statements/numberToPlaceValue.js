const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberToPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        case 100000: return "One Lakh";
        case 1000000: return "Ten Lakh";
        case 10000000: return "One Crore";
        default: return "Invalid input! Enter 1, 10, 100, 1000, etc.";
    }
}

rl.question("Enter a number (1, 10, 100, ...): ", (num) => {
    console.log(numberToPlaceValue(parseInt(num)));
    rl.close();
});

