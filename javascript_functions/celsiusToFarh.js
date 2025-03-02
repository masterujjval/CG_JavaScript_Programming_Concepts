const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const convertTemperature = (choice, temp) => {
    switch (choice) {
        case 1:
            return (temp >= 0 && temp <= 100) ? `${temp}°C = ${(temp * 9/5 + 32).toFixed(2)}°F` : "Invalid! Enter temperature between 0°C and 100°C";
        case 2:
            return (temp >= 32 && temp <= 212) ? `${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C` : "Invalid! Enter temperature between 32°F and 212°F";
        default:
            return "Invalid Choice! Enter 1 for °C to °F or 2 for °F to °C";
    }
};

console.log(`
Choose Conversion:
1. Celsius to Fahrenheit
2. Fahrenheit to Celsius
`);

rl.question("Enter choice (1-2): ", (choice) => {
    rl.question("Enter temperature: ", (temp) => {
        console.log(convertTemperature(parseInt(choice), parseFloat(temp)));
        rl.close();
    });
});

