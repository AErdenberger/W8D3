const { read } = require("fs");
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const absurdBubbleSort = function(arr, sortCompletionCallback) {
    let madeAnySwaps = true;
    const outerBubbleSortLoop = function(madeAnySwaps) {
        console.log("In Outer Bubble Sort");
        if (madeAnySwaps === true) {
            innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
        } else {
            console.log("sorting is done!");
            sortCompletionCallback(arr);
        }
    }
    outerBubbleSortLoop(madeAnySwaps);
}

const askIfGreaterThan = function(el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2}? Yes or No.`, (response) => {
        if (response === "Yes") {
            // console.log("true");
            callback(true);
        } else {
            // console.log("false");
            callback(false);
        }
        // reader.close();
    });
}

const innerBubbleSortLoop = function(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < (arr.length - 1)) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                let swapped = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swapped;
                innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
            } else {
                innerBubbleSortLoop(arr, i+1, false, outerBubbleSortLoop);
            }
        });
    } else {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});
