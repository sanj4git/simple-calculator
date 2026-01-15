// Numeral Converter Functions
function toNum() {
    let input = document.getElementById("textInput").value.toLowerCase().trim();
    let wordToNumber = {
        "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
        "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
        "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
        "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
        "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30,
        "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70,
        "eighty": 80, "ninety": 90, "hundred": 100, "thousand": 1000,
        "lakh": 100000
    };
    let words = input.split(" ");
    let result = 0;
    let current = 0;
    for (let word of words) {
        let num = wordToNumber[word];
        if (num < 100) {
            current += num;
        } else if (num === 100) {
            current *= num;
        } else {
            current *= num;
            result += current;
            current = 0;
        }
    }
    result += current;
    document.getElementById("textOutput").innerText = result;
}

function toText() {
    let num = parseInt(document.getElementById("numInput").value);
    if (isNaN(num)) {
        document.getElementById("numOutput").innerText = "Invalid input";
        return;
    }
    let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    function convertBelow100(n) {
        if (n < 10) return ones[n];
        if (n < 20) return teens[n - 10];
        return tens[Math.floor(n / 10)] + (n % 10 ? " " + ones[n % 10] : "");
    }

    function convertBelow1000(n) {
        if (n < 100) return convertBelow100(n);
        return ones[Math.floor(n / 100)] + " hundred" + (n % 100 ? " " + convertBelow100(n % 100) : "");
    }

    if (num === 0) {
        document.getElementById("numOutput").innerText = "zero";
        return;
    }
    let result = "";
    if (num >= 100000) {
        result += convertBelow1000(Math.floor(num / 100000)) + " lakh ";
        num %= 100000;
    }
    if (num >= 1000) {
        result += convertBelow100(Math.floor(num / 1000)) + " thousand ";
        num %= 1000;
    }
    if (num > 0) {
        result += convertBelow1000(num);
    }
    document.getElementById("numOutput").innerText = result.trim();
}

// Navigation Functions
function showStringCalc() {
    document.getElementById("numeralPage").classList.add("hidden");
    document.getElementById("stringPage").classList.remove("hidden");
}

function showNumeralCalc() {
    document.getElementById("stringPage").classList.add("hidden");
    document.getElementById("numeralPage").classList.remove("hidden");
}

// String Operation Functions
function concatStrings() {
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;
    let result = str1 + str2;
    document.getElementById("stringOutput").innerText = "Concatenated: " + result;
}

function reverseString() {
    let str1 = document.getElementById("string1").value;
    let result = str1.split("").reverse().join("");
    document.getElementById("stringOutput").innerText = "Reversed: " + result;
}

function uppercaseString() {
    let str1 = document.getElementById("string1").value;
    let result = str1.toUpperCase();
    document.getElementById("stringOutput").innerText = "Uppercase: " + result;
}

function lowercaseString() {
    let str1 = document.getElementById("string1").value;
    let result = str1.toLowerCase();
    document.getElementById("stringOutput").innerText = "Lowercase: " + result;
}