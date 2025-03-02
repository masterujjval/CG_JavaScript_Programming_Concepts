console.log("Enter three numbers (a, b, c):");

process.stdin.on("data", (data) => {
    const inputs = data.toString().trim().split(" ").map(Number);

    if (inputs.length !== 3 || inputs.some(isNaN)) {
        console.log("Invalid input! Please enter exactly three numbers separated by spaces.");
        return;
    }

    const [a, b, c] = inputs;

    // Perform arithmetic operations
    const result1 = a + b * c;
    const result2 = a % b + c;
    const result3 = c + a / b;
    const result4 = a * b + c;

    // Store results in an array
    const results = [result1, result2, result3, result4];

    // Find max and min
    const maxResult = Math.max(...results);
    const minResult = Math.min(...results);

    console.log(`Results:`);
    console.log(`1. a + b * c  = ${result1}`);
    console.log(`2. a % b + c  = ${result2}`);
    console.log(`3. c + a / b  = ${result3}`);
    console.log(`4. a * b + c  = ${result4}`);
    console.log(`\nMaximum result: ${maxResult}`);
    console.log(`Minimum result: ${minResult}`);
});

