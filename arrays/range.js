function findRepeatedDigits() {
    let repeatedDigits = [];

    for (let i = 10; i < 100; i++) {
        let numStr = i.toString();
        if (numStr[0] === numStr[1]) {  // Check if both digits are same
            repeatedDigits.push(i);
        }
    }

    return repeatedDigits;
}


console.log("Repeated Digit Numbers:", findRepeatedDigits());


