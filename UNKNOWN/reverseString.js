function reverseString(str) {
    let revString = str
        .split("") // ["s", "t", "r", "i", "n", "g"]
        .reverse() // ["g", "n", "i", "r", "t", "s"]
        .join(""); // "gnirts"
}

reverseString("string");
