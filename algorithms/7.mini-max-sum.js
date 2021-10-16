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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let sorted_array = arr.sort((a,b) => {return a - b});
    let mini_sum = 0, max_sum = 0;
    for (let i = 0; i < arr.length -1; i++) {
        mini_sum += sorted_array[i];
    }
    for (let i = 1; i < arr.length; i++) {
        max_sum += sorted_array[i];
    }
    console.log(mini_sum, max_sum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
