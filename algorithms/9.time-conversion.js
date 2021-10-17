"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on("end", function () {
    inputString = inputString.split("\n");

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here

    // The slice() method extracts parts of a string and returns the extracted parts in a new string.
    let meridiem = s.slice(-2);

    // Get all characters of a string but its two last elements. Then remove ":" from it.
    let time = s.slice(0, -2).split(":");

    if (meridiem === "AM" && time[0] === "12") {
        time[0] = "00";
    } else if (meridiem === "PM") {
        time[0] = (time[0] % 12) + 12;
    }

    const converted_time = time.join(":");
    return converted_time;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
