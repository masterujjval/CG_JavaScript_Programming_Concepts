function rollDice() {
    return Math.floor(Math.random() * 6) + 1;  
}

function simulateDiceGame() {
    let diceMap = new Map(); 


    for (let i = 1; i <= 6; i++) {
        diceMap.set(i, 0);
    }

    let reachedTen = false;


    while (!reachedTen) {
        let roll = rollDice();  
        diceMap.set(roll, diceMap.get(roll) + 1);  


        if (diceMap.get(roll) === 10) {
            reachedTen = true;
        }
    }

    console.log("Dice Roll Results:", Object.fromEntries(diceMap));


    let maxNum, minNum;
    let maxCount = 0, minCount = 10;

    for (let [num, count] of diceMap.entries()) {
        if (count > maxCount) {
            maxCount = count;
            maxNum = num;
        }
        if (count < minCount) {
            minCount = count;
            minNum = num;
        }
    }

    console.log(` Most Frequent Number: ${maxNum} (Rolled ${maxCount} times)`);
    console.log(`Least Frequent Number: ${minNum} (Rolled ${minCount} times)`);
}

simulateDiceGame();

