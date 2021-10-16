'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive_number = 0, negative_number = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive_number += 1;
        } else if (arr[i] < 0) {
            negative_number += 1;
        } else {
            zero += 1;
        }
    }
    let positive_proportion = (positive_number/arr.length).toFixed(6);
    let negative_proportion = (negative_number/arr.length).toFixed(6);
    let zero_proportion = (zero/arr.length).toFixed(6);
    console.log(positive_proportion);
    console.log(negative_proportion); 
    console.log(zero_proportion);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
