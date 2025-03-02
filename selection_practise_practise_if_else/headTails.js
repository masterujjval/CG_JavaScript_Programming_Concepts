console.log("Press Enter to flip the coin...");

process.stdin.on("data", () => {
    let randomNumber = Math.floor(Math.random() * 100); // 0-99 random number
    let result = (randomNumber % 2 === 0) ? "Heads" : "Tails";
    
    console.log(`Coin flipped: ${result}`);
    console.log("Press Enter to flip again...");  
});

