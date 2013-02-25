// alert("JavaScript works!");

// Author: Susan R. Miller
// Course: SDI 1302
// Assignment #4: Code Library
// Notes: Console.logs will all be removed after grading.  They are present just to help with readout of the overall assignment.
//        Functions with similar purpose (ie. number analysis) can be combined into objects for simplicity of call after grading.
//        Make-up element marked by comments within functions and noted in console.logs and comments of function problem numbers.

// **** STRING FUNCTIONS **** //


//  1. Does a string follow a 123-456-7890 pattern like a phone number?

console.log("1. Does a string follow a 123-456-7890 pattern like a phone number?");


var phoneNumber = {
    isValidNumber: function (phoneNumber) {
        var validNumber;
        if ((phoneNumber.charAt(3) === "-") && (phoneNumber.charAt(7) === "-")) {
            if ((isNaN(phoneNumber.slice(0,3))===false && isNaN(phoneNumber.slice(4,7))===false && isNaN(phoneNumber.slice(8,11))===false) && (phoneNumber.length === 12)) {
                validNumber = true;
            } else {
                validNumber = false;
            }
        } else {
            validNumber = false;
        }
        return validNumber;
    }
};

console.log(phoneNumber.isValidNumber("212-555-1212"));
console.log(phoneNumber.isValidNumber("212-55S-121Z"));
console.log(phoneNumber.isValidNumber("212.555.1212"));
console.log(phoneNumber.isValidNumber("212-555-12121"));


//  2. Does a string follow an aaa@bbb.ccc pattern like an email address?
// MAKE UP ELEMENT

console.log("******************************************************************************************************");
console.log("2. Does a string follow an aaa@bbb.ccc pattern like an email address? ** 1 MAKE UP ELEMENT");


var emailAddress = {
    isValidEmail: function (email) {
        var validEmail;
        if (email.indexOf(" ") >= 0) {
            validEmail = false;
        } else if (((email.charAt(email.length - 4) === ".") || (email.charAt(email.lentgh - 3 === "."))) && (email.indexOf("@") >= 0)) {   // MAKE UP: Use of multiple booleans, Deliverable 2
            validEmail = true;
        } else {
            validEmail = false;
        }
        return validEmail;
    }
};

console.log(emailAddress.isValidEmail("satr@mac.com"));
console.log(emailAddress.isValidEmail("satr@ mac.com"));
console.log(emailAddress.isValidEmail("satr@kiwi.co.nz"));
console.log(emailAddress.isValidEmail("donkeykong.com"));



// 3. Is the string a URL? (Does it start with http: or https:?)

console.log("******************************************************************************************************");
console.log("3. Is the string a URL? (Does it start with http: or https:?)");


var url = {
    isValidUrl: function (url) {
        var validUrl;
        if (url.startsWith("http://") || url.startsWith("https://")) {
            validUrl = true;
        } else {
            validUrl = false;
        }
        return validUrl;
    }
};

console.log(url.isValidUrl("http://www.domain.com"));
console.log(url.isValidUrl("https://www.domain.com"));
console.log(url.isValidUrl("www.domain.com"));



//  4. Title-case a string (split into words, then uppercase the first letter of each word)
//  Make-up Element

console.log("******************************************************************************************************");
console.log("4. Title-case a string (split into words, then uppercase the first letter of each word) ** 1 MAKE UP ELEMENT");


var caseManip = {
    titleCase: function (title) {
        var titled = [];
        var words = title.split(" ");                                                    // Splits string into array
            for (x = 0; x < words.length; x++) {                                         // Cycles through words in array       // MAKE UP: for loop, Deliverable 2
                var breakOut = words[x];
                var firstLetter = breakOut.slice(0,1);                                   // Pulls first letter from word
                var restOfWord = breakOut.slice(1,breakOut.length);                      // Places rest of word in own var
                var capped = "";                                                         // Creates an empty string to concat into
                var newWord = capped.concat(firstLetter.toUpperCase() + restOfWord.toLowerCase());     // Concats the two parts of the word together, with first part capped
                titled.push(newWord);                                                    // Adds now capped word into array
            }
        return titled.join(" ");
    }
};

console.log(caseManip.titleCase("it's a dog eat dog world, and I'm wEARing milkbone underwear."));



//   5. Given a string that is a list of things separated by a given string, as well as another string separator,
//      return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

console.log("******************************************************************************************************");
console.log("5. Given a string that is a list of things separated by a given string, as well as another string separator,");
console.log("   return a string with the first separator changed to the second: \"a,b,c\" + \",\" + \"/\" → \"a/b/c\".\"");


var stringSeparator = {
    switch: function (string, originalSeparator, newSeparator) {
        var words = string.split(originalSeparator);
        return words.join(newSeparator);
    }
};

console.log(stringSeparator.switch("dogs, cats, fish, bones", ",", " -"));



// **** NUMBER FUNCTIONS **** //

//  6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
// MAKE UP ELEMENT

console.log("******************************************************************************************************");
console.log("6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 ** 1 MAKE UP ELEMENTS");


var decimalPlace = {
    setToTwo: function (number, places) {
        return number.toFixed(places);                                                                                  // MAKE-UP: Return Number Output, Deliverable 2
    }
};

console.log(decimalPlace.setToTwo(36, 4));
console.log(decimalPlace.setToTwo(3.14159, 2));
console.log(decimalPlace.setToTwo(796.309, 1));



//  7. Fuzzy-match a number: is the number above or below a number within a certain percent?
//  MAKE UP ELEMENTS

console.log("******************************************************************************************************");
console.log("7. Fuzzy-match a number: is the number above or below a number within a certain percent? ** 2 MAKE UP ELEMENT");


var numberAnalysis = {
    fuzzyMatch: function (a, b, decimalPercent) {                                                                       // MAKE-UP: Number Data Type, Deliverable 2
        var diff = Math.abs(a - b);                                                                                     // MAKE-UP: Number variable, Deliverable 2
        var withinPercent;
        if (((diff/a) <= decimalPercent) || ((diff/b) <= decimalPercent)) {
            withinPercent = true;
        } else {
            withinPercent = false;
        }
        return withinPercent;
    }
}

console.log(numberAnalysis.fuzzyMatch(36,42,.15));
console.log(numberAnalysis.fuzzyMatch(75,23,.55));



//  8. Find the number of hours or days difference between two dates.

console.log("******************************************************************************************************");
console.log("8. Find the number of hours or days difference between two dates.");


var dateAnalysis = {
    dateDiff: function (var1, var2, hoursOrDays) {
            var dateA = new Date(var1);
            var dateB = new Date(var2);
            var difference;
            var elapsed = dateB - dateA;
                if (hoursOrDays === "hours") {
                    difference = Math.abs(elapsed / 1000 / 60 / 60);
                } else if (hoursOrDays === "days") {
                    difference = Math.abs(elapsed / 1000 / 60 / 60 / 24);
                }
                if (difference != Math.floor(difference)) {                                                             // Limits partial days/hours to 2 decimal places
                    difference = difference.toFixed(2);
                }
        return difference;
    }

};

console.log(dateAnalysis.dateDiff("10/31/2001", "2/29/2004", "days"));
console.log(dateAnalysis.dateDiff("10/31/2001", "2/29/2004", "hours"));
console.log(dateAnalysis.dateDiff("May 17, 2005", "July 13, 2005", "days"));
console.log(dateAnalysis.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "days"));
console.log(dateAnalysis.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "hours"));



//  9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.

console.log("******************************************************************************************************");
console.log("9. Given a string version of a number such as \"42\", return the value as an actual Number, such as 42.");


var numberAnalysis2 = {
    stringToNum: function (string) {
        var goAhead = isNaN(string);
        var number;
        if (goAhead === false) {
            number = Number(string);
            return number;
        } else {
            return "Not a valid number.";
        }
    }
};

console.log(numberAnalysis2.stringToNum("48,930"));
console.log(numberAnalysis2.stringToNum("37.4"));
console.log(numberAnalysis2.stringToNum("42"));
console.log(numberAnalysis2.stringToNum("Bob"));



// **** ARRAY FUNCTIONS **** //

//  10. Find the smallest value in an array that is greater than a given number

console.log("******************************************************************************************************");
console.log("10. Find the smallest value in an array that is greater than a given number");


var arrayAnalysis = {
    arrayValue: function (array, value) {
        array.push(value);                                              // Adds the given value to the array
        array.sort(function (a,b) {return a - b;});                     // Sorts the array numerically
        return array[(array.indexOf(value) + 1)];                       // Returns next highest number
    }
};

console.log(arrayAnalysis.arrayValue([5, 17, 11, 4, 7, 13], 9));



//  11. Find the total value of just the numbers in an array, even if some of the items are not numbers.
//  MAKE UP ELEMENT

console.log("******************************************************************************************************");
console.log("11. Find the total value of just the numbers in an array, even if some of the items are not numbers. ** 1 MAKE UP ELEMENT");


var arrayAnalysis2 = {
    arrayTotal: function (array) {                                                                                      // MAKE UP: Array method, Deliverable 2
        var total = 0;
        var value;
        var isIt;
        for (x = 0; x < array.length; x++) {
            value = array[x];
            if ((value !== false) && (value !== true)) {                                                                // Keeps Booleans from reappearing in array.
                isIt = isNaN(value);
                if (isIt === false) {
                    value = Number(value);
                    total += value;
                }
            }
        }
        return total;
    }
};

console.log(arrayAnalysis2.arrayTotal([15, "37", "dog", false, "cat", 9, true, "9"]));




//  12. Given an array of objects and the name of a key, return the array sorted by the value of that key
//      in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

console.log("******************************************************************************************************");
console.log("12. Given an array of objects and the name of a key, return the array sorted by the value of that key");
console.log("    in each of the objects: \"a\" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].");


var arraySort = {
    keySort: function (array, key) {
        array.sort(function(a, b){
            item1 = a[key];
            item2 = b[key];
            if (item1 > item2) {return 1};
            if (item2 > item1) {return -1};
        });
        return array;
    }
};

console.log(arraySort.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "b"));
console.log(arraySort.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "num"));