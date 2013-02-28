// alert("JavaScript works!");

// Author: Susan R. Miller
// Course: SDI 1302
// Assignment #4: Code Library
// Notes: Make-up element marked by comments within methods and noted in console.log of the particular methods.

// **** STRING FUNCTIONS **** //

var myLibrary = function () {

// Check for ###-###-#### phone number pattern.

    var checkPhone = function(phoneNumber) {
        var validNumber;
            if ((phoneNumber.charAt(3) === "-") && (phoneNumber.charAt(7) === "-")) {
                validNumber = ((isNaN(phoneNumber.slice(0,3))===false && isNaN(phoneNumber.slice(4,7))===false && isNaN(phoneNumber.slice(8,11))===false) && (phoneNumber.length === 12));
            } else {
                validNumber = false;
            }
        return validNumber;
    };

// Check for valid email address *** MAKE UP ELEMENT

    var checkEmail = function (email) {
        var validEmail;
            if (email.indexOf(" ") >= 0) {
                validEmail = false;
            } else {
                validEmail = (((email.charAt(email.length - 4) === ".") || (email.charAt(email.length - 3) === ".")) && (email.indexOf("@") >= 0));
            }                                                                                       // MAKE UP: Use of multiple booleans (line above), Deliverable 2
        return validEmail;
    };

// Check for valid URL

    var checkUrl = function (url) {
        var validUrl;
            validUrl = url.startsWith("http://") || url.startsWith("https://");
        return validUrl;
    };

// Convert a string to Title Case *** MAKE UP ELEMENT

    var titleCase = function (title) {
        var words = title.split(" ");                                                               // Splits string into array
        var titled = [];
        var noCap = [ "a", "an", "the", "of", "and", "but", "or", "for", "nor", "yet" ];            // Sets words that should not be capped until first word
        var capped = "";
        var breakOut;
        var firstLetter;
        var restOfWord;
        var newWord;
            for (var x = 0; x < words.length; x++) {                                               // MAKE UP: for loop, Deliverable 2
                breakOut = words[x];
                    if ((x != 0) && (noCap.indexOf(breakOut) >= 0)) {titled.push(breakOut)}
                    else {
                        firstLetter = breakOut.slice(0,1);
                        restOfWord = breakOut.slice(1,breakOut.length);
                        newWord = capped.concat(firstLetter.toUpperCase() + restOfWord.toLowerCase());      // Concats the two parts of the word together, with first part capped
                        titled.push(newWord);                                                                   // Adds now capped word into array
                    }
            }
        return titled.join(" ");
    };

// Switch the separator for a list, such as "," to "/"

    var switchSeparator = function (string, originalSeparator, newSeparator) {
        var words = string.split(originalSeparator);
        return words.join(newSeparator)
    };

// Set decimal to requested place *** MAKE UP ELEMENT

    var decimalPlace = function (number, places) {
        var a = Number(number);
        var b = Number(places);
            if ((isNaN(a) === true) || (isNaN(b) === true)) { return "Please use valid numerals."}
        return a.toFixed(b);                                                             // MAKE-UP: Return Number Output, Deliverable 2
    };

// Fuzzy match - two numbers within a given percent of each other? *** MAKEUP ELEMENTS

    var fuzzyMatch = function (a, b, decimalPercent) {                                             // MAKE-UP: Number Data Type, Deliverable 2
        var numA = Number(a);
        var numB = Number(b);
        var decimal = Number(decimalPercent);
        var diff = Math.abs(numA - numB);                                                                // MAKE-UP: Number variable, Deliverable 2
        var withinPercent;
            if ((isNaN(numA) === true) || (isNaN(numB) === true) || (isNaN(decimal) === true)) { return "Please use valid numerals."; }
        withinPercent = ((diff / numA) <= decimal) || ((diff / numB) <= decimal);
        return withinPercent;
    };

// Calculate the difference between two dates in hours or days

    var dateDiff = function (firstDate, secondDate, hoursOrDays) {
        var dateA = new Date(firstDate);
        var dateB = new Date(secondDate);
        var difference;
        var elapsed = dateB - dateA;
            if (hoursOrDays === "hours") {
                difference = Math.abs(elapsed / 1000 / 60 / 60);
            } else if (hoursOrDays === "days") {
                difference = Math.abs(elapsed / 1000 / 60 / 60 / 24);
            }
            if (difference != Math.floor(difference)) {                                              // Limits partial days/hours to 2 decimal places
                difference = difference.toFixed(2);
            }
        return difference;
    };

// Determine if a string is a number and, if so, convert it to a number

    var stringToNum = function (string) {
        var goAhead = isNaN(string);
        var number;
            if (goAhead === false) {
                number = Number(string);
            } else {
                number = "Not a valid number.";
            }
        return number;
    };

//  Find the smallest value in an array that is larger than a given number

    var arrayValue = function (array, value) {
        var numericArray = [];
        var isIt;
        array.push(value);
            for (var x = 0; x < array.length; x++) {
                value = array[x];
                if ((value !== false) && (value !== true)) {                                                // Keeps Booleans from reappearing in array.
                    isIt = isNaN(value);
                    if (isIt === false) {
                        numericArray.push(value);                                                            // Adds numeric values to numeric-only array.
                    }
                }
            }
        numericArray.sort(function (a,b) {return a - b;});                                                  // Sorts the array numerically
        return numericArray[(numericArray.lastIndexOf(value) + 1)];                                             // Returns next highest number
    };

//  Total the number, whether entered as numbers or strings, in an array including mixture of variable types *** MAKE UP ELEMENT

    var arrayTotal = function (array) {                                                             // MAKE UP: Array method, Deliverable 2
        var total = 0;
        var value;
        var isIt;
            for (var x = 0; x < array.length; x++) {
                value = array[x];
                if ((value !== false) && (value !== true)) {                                        // Keeps Booleans from reappearing in array.
                    isIt = isNaN(value);
                    if (isIt === false) {
                        value = Number(value);
                        total += value;
                    }
                }
             }
        return total;
    };

// Sort objects within an array by a given key

    var keySort = function (array, key) {
        array.sort(function(a, b){
            var item1 = a[key];
            var item2 = b[key];
                if (item1 > item2) {return 1}
                else {return -1 }
        });
        return array;
    };


    return {
        "checkPhone":       checkPhone,
        "checkEmail":       checkEmail,
        "checkUrl":         checkUrl,
        "titleCase":        titleCase,
        "switchSeparator":  switchSeparator,
        "decimalPlace":     decimalPlace,
        "fuzzyMatch":       fuzzyMatch,
        "dateDiff":         dateDiff,
        "stringToNum":      stringToNum,
        "arrayValue":       arrayValue,
        "arrayTotal":       arrayTotal,
        "keySort":          keySort
    }

};

var myLib = new myLibrary();

console.log("**** STRING FUNCTIONS ****");
console.log(" ");

console.log("1. Does a string follow a 123-456-7890 pattern like a phone number?");
console.log("212-555-1212: " + myLib.checkPhone("212-555-1212"));
console.log("212-55S-121Z: " + myLib.checkPhone("212-55S-121Z"));
console.log("212.555.1212: " + myLib.checkPhone("212.555.1212"));
console.log("212-555-12121: " + myLib.checkPhone("212-555-12121"));

console.log(" ");
console.log("2. Does a string follow an aaa@bbb.ccc pattern like an email address?");
console.log("                      MAKE UP ELEMENT");

console.log("satr@mac.com: " + myLib.checkEmail("satr@mac.com"));
console.log("satr@ mac.com: " + myLib.checkEmail("satr@ mac.com"));
console.log("satr@kiwi.co.nz: " + myLib.checkEmail("satr@kiwi.co.nz"));
console.log("donkeykong.com: " + myLib.checkEmail("donkeykong.com"));

console.log(" ");
console.log("3. Is the string a URL? (Does it start with http: or https:?)");

console.log("http://www.domain.com: " + myLib.checkUrl("http://www.domain.com"));
console.log("https://www.domain.com: " + myLib.checkUrl("https://www.domain.com"));
console.log("www.domain.com: " + myLib.checkUrl("www.domain.com"));

console.log(" ");
console.log("4. Title-case a string (split into words, then uppercase the first letter of each word (except user specified words, such as a, an, the, etc.))");
console.log("                      MAKE UP ELEMENT");

console.log("it's a dog eat dog world, and I'm wEARing milkbone underwear >> " + myLib.titleCase("it's a dog eat dog world, and I'm wEARing milkbone underwear."));
console.log("an apple a day keeps the doctor away, and for every season, there is an allergy. >> " + myLib.titleCase("an apple a day keeps the doctor away, and for every season, there is an allergy."));

console.log(" ");
console.log("5. Given a string that is a list of things separated by a given string, as well as another string separator,");
console.log("   return a string with the first separator changed to the second.");

console.log("dogs, cats, fish, bones >> " + myLib.switchSeparator("dogs, cats, fish, bones", ",", " -"));

console.log(" ");
console.log("**** NUMBER FUNCTIONS ****");
console.log(" ");

console.log("6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10");
console.log("                      MAKE UP ELEMENT");

console.log("36 to 4 decimal places: " + myLib.decimalPlace(36, 4));
console.log("3.14159 to 2 decimal places: " + myLib.decimalPlace(3.14159, 2));
console.log("796.309 to 1 decimal place: " + myLib.decimalPlace(796.309, 1));
console.log("796.309 to 1 decimal place (as strings): " + myLib.decimalPlace("796.309", "1"));

console.log(" ");
console.log("7. Fuzzy-match a number: is the number above or below a number within a certain percent?");
console.log("                      MAKE UP ELEMENTS");

console.log("36 and 42 within 15%? " + myLib.fuzzyMatch(36,42,.15));
console.log("75 and 23 within 55%? " + myLib.fuzzyMatch(75,23,.55));
console.log("83 and 47 within 32%? (as strings) " + myLib.fuzzyMatch("83","47",".32"));
console.log("Thirty-six and forty-two within 15%? (as strings) " + myLib.fuzzyMatch("thirty-six","forty-two","15%"));

console.log(" ");
console.log("8. Find the number of hours or days difference between two dates.");

console.log("How many days apart are 10/31/2001 and 2/29/2004? " + myLib.dateDiff("10/31/2001", "2/29/2004", "days"));
console.log("How many hours apart are 10/31/2001 and 2/29/2004? " + myLib.dateDiff("10/31/2001", "2/29/2004", "hours"));
console.log("How many days apart are February 29, 2004 and February 28, 2013? " + myLib.dateDiff("February 29, 2004", "February 28, 2013", "days"));
console.log("How many days apart are May 17, 1977 at 10:59am and July 13, 2005 at 7:26pm? " + myLib.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "days"));
console.log("How many hours apart are May 17, 1977 at 10:59am and July 13, 2005 at 7:26pm? " + myLib.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "hours"));

console.log(" ");
console.log("9. Given a string version of a number such as \"42\", return the value as an actual Number, such as 42.");

console.log("String = \"48,930\": " + myLib.stringToNum("48,930"));
console.log("String = \"37.4\": " + myLib.stringToNum("37.4"));
console.log("String = \"42\": " + myLib.stringToNum("42"));
console.log("String = \"Bob\": " + myLib.stringToNum("Bob"));

console.log(" ");
console.log("**** ARRAY FUNCTIONS ****");
console.log(" ");

console.log("10. Find the smallest value in an array that is greater than a given number");

console.log("The smallest value in the array [5, 17, 11, 4, 7, 13] that is greater than 9 is: " + myLib.arrayValue([5, 17, 11, 4, , 7, 13], 9));
console.log("The smallest value in the array [5, 17, 11, 4, 9, 7, 13] that is greater than 9 is: " + myLib.arrayValue([5, 17, 11, 4, , 9, 7, 13], 9));
console.log("The smallest value in the array [5, \"17\", \"dog\", 4, false, 13] that is greater than 9 is: " + myLib.arrayValue([5, "17", "dog", 4, false, 13], 9));
console.log("The smallest value in the array [5, \"17\", \"dog\", \"9\", 9, 4, false, 13] that is greater than 9 is: " + myLib.arrayValue([5, "17", "dog", "9", 9, 4, false, 13], 9));

console.log(" ");
console.log("11. Find the total value of just the numbers in an array, even if some of the items are not numbers.");
console.log("                      MAKE UP ELEMENT");

console.log("The total value of just the number in the array [15, \"37\", \"dog\", false, \"cat\", 9, true, \"9\"] is: " + myLib.arrayTotal([15, "37", "dog", false, "cat", 9, true, "9"]));

console.log(" ");
console.log("12. Given an array of objects and the name of a key, return the array sorted by the value of that key");
console.log("    in each of the objects: \"a\" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].");

console.log("Sorted by the key \"b\": ", myLib.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "b"));
console.log("Sorted by the key \"num\": ", myLib.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "num"));