// Create a Map to store birth months and the list of individuals born in each month
let birthMonthMap = new Map();

// Initialize the map with empty arrays for all 12 months
for (let i = 1; i <= 12; i++) {
    birthMonthMap.set(i, []);
}

// Generate birth months for 50 individuals
for (let i = 1; i <= 50; i++) {
    let month = Math.floor(Math.random() * 12) + 1; // Generate a random month between 1 and 12
    birthMonthMap.get(month).push(`Person${i}`); // Store the individual in the corresponding month
}

// Print the individuals grouped by their birth month
console.log("Individuals grouped by birth month:\n");
for (let [month, persons] of birthMonthMap.entries()) {
    console.log(`Month ${month}: ${persons.length} individuals → ${persons.join(", ")}`);
}

