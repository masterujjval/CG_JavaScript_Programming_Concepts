const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numberToWeekDay(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input! Enter a number between 1 and 7.";
    }
}

rl.question("Enter a number (1-7) to get the weekday: ", (num) => {
    console.log(numberToWeekDay(parseInt(num)));
    rl.close();
});

