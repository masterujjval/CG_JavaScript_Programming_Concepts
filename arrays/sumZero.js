function findTriplets(arr) {
    let found = false;
    let n = arr.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(`Triplet Found: (${arr[i]}, ${arr[j]}, ${arr[k]})`);
                    found = true;
                }
            }
        }
    }

    if (!found) {
        console.log("No triplet found");
    }
}


let nums = [0, -1, 2, -3, 1, -2, 3];
findTriplets(nums);


