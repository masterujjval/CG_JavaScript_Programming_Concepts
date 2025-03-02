const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function unitConversion(choice, value) {
    switch (choice) {
        case 1: return `${value} Feet = ${value * 12} Inches`;
        case 2: return `${value} Feet = ${value * 0.3048} Meters`;
        case 3: return `${value} Inches = ${value / 12} Feet`;
        case 4: return `${value} Meters = ${value * 3.28084} Feet`;
        default: return "Invalid choice! Enter between 1 to 4.";
    }
}

console.log(`
Choose Unit Conversion:
1. Feet to Inches
2. Feet to Meters
3. Inches to Feet
4. Meters to Feet
`);

rl.question("Enter conversion choice (1-4): ", (convChoice) => {
    rl.question("Enter value to convert: ", (value) => {
        console.log(unitConversion(parseInt(convChoice), parseFloat(value)));
        rl.close();
    });
});

