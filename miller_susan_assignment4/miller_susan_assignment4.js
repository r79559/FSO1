// alert("JavaScript works!");

// Author: Susan R. Miller
// Course: SDI 1302
// Assignment #4: Code Library


// **** STRING FUNCTIONS **** //


//  1. Does a string follow a 123-456-7890 pattern like a phone number?
console.log("Does a string follow a 123-456-7890 pattern like a phone number?");

var phoneNumber = {
    isValidNumber: function (phoneNumber) {
        if ((phoneNumber.charAt(3) === "-") && (phoneNumber.charAt(7) === "-")) {
            var validNumber = true;
            console.log("Thank you for entering a valid phone number, " + phoneNumber + ".");                           // can be removed after grading
            return validNumber;
        } else {
            var validNumber = false;
            console.log(phoneNumber + " is not a valid phone number. Please enter your number using xxx-xxx-xxxx format.");      // can be removed after grading
            return validNumber;
        }
    }
};

phoneNumber.isValidNumber("212-555-1212");
phoneNumber.isValidNumber("212.555.1212");

//  2. Does a string follow an aaa@bbb.ccc pattern like an email address?
console.log("******************************************************************************************************");
console.log("2. Does a string follow an aaa@bbb.ccc pattern like an email address?");

var emailAddress = {
    isValidEmail: function (email) {
        if (((email.charAt(email.length - 4) === ".") || (email.charAt(email.lentgh - 3 === "."))) && (email.indexOf("@") >= 0)) {
            var validEmail = true;
            console.log(email + " appears to be a valid email address.");                                               // can be removed after grading
            return validEmail;
        } else {
            var validEmail = false;
            console.log(email + " does not appear to be a valid email address.  Please try again.");                    // can be removed after grading
            return validEmail;
        }
    }
};

emailAddress.isValidEmail("satr@mac.com");
emailAddress.isValidEmail("satr@kiwi.co.nz");
emailAddress.isValidEmail("donkeykong.com");

// 3. Is the string a URL? (Does it start with http: or https:?)
console.log("******************************************************************************************************");
console.log("3. Is the string a URL? (Does it start with http: or https:?)");

var url = {
    isValidUrl: function (url) {

        if (url.startsWith("http://") || url.startsWith("https://")) {
            var validUrl = true;
            console.log(url + " appears to be a valid URL.");                                                           // can be removed after grading
        } else {
            var validUrl = false;
            console.log(url + " does not appear to be a valid URL.  Please use http:// or https:// format.");           // can be removed after grading
        }
        return validUrl;
    }
};

url.isValidUrl("http://www.domain.com");
url.isValidUrl("https://www.domain.com");
url.isValidUrl("www.domain.com");


//  4. Title-case a string (split into words, then uppercase the first letter of each word)
console.log("******************************************************************************************************");
console.log("4. Title-case a string (split into words, then uppercase the first letter of each word)");

var caseManip = {
    titleCase: function (title) {
        var titled = [];
        var words = title.split(" ");                                                    // Splits string into array
            for (x = 0; x < words.length; x++) {                                         // Cycles through words in array
                var breakOut = words[x];
                var firstLetter = breakOut.slice(0,1);                                   // Pulls first letter from word
                var restOfWord = breakOut.slice(1,breakOut.length);                      // Places rest of word in own var
                var capped = "";                                                         // Creates an empty string to concat into
                var newWord = capped.concat(firstLetter.toUpperCase() + restOfWord);     // Concats the two parts of the word together, with first part capped
                titled.push(newWord);                                                    // Adds now capped word into array
            }
        var cappedTitle = titled.join(" ");                                              // Joins words in array together with a space between
        console.log(cappedTitle);                                                                                       // can be removed after grading
        return cappedTitle;
    }
};

caseManip.titleCase("it's a dog eat dog world, and I'm wearing milkbone underwear.");


//   5. Given a string that is a list of things separated by a given string, as well as another string separator,
//      return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".
console.log("******************************************************************************************************");
console.log("5. Given a string that is a list of things separated by a given string, as well as another string separator,");
console.log("   return a string with the first separator changed to the second: \"a,b,c\" + \",\" + \"/\" → \"a/b/c\".\"");
var stringSeparator = {
    switch: function (string, originalSeparator, newSeparator) {
        var words = string.split(originalSeparator);
        var newString = words.join(newSeparator);
        console.log("\"" + string + "\" is now \"" + newString + ".\"");                                                // can be removed after grading
        return newString;
    }
};

stringSeparator.switch("dogs, cats, fish, bones", ",", " -");


// **** NUMBER FUNCTIONS **** //


//  6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
console.log("******************************************************************************************************");
console.log("6. Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10");

var decimalPlace = {
    setToTwo: function (number) {
        var moneyNum = number.toFixed(2);
        console.log(number + " is now " + moneyNum);                                                                    // can be removed after grading
        return moneyNum;
    }
};

decimalPlace.setToTwo(36);
decimalPlace.setToTwo(3.14159);
decimalPlace.setToTwo(796.309);


//  7. Fuzzy-match a number: is the number above or below a number within a certain percent?
console.log("******************************************************************************************************");
console.log("7. Fuzzy-match a number: is the number above or below a number within a certain percent?");

var numberAnalysis = {
    fuzzyMatch: function (a, b, decimalPercent) {
        var diff = Math.abs(a - b);
        if (((diff/a) <= decimalPercent) || ((diff/b) <= decimalPercent)) {
            var withinPercent = true;
            console.log(a + " and " + b + " are within " + decimalPercent + "% of each other.");                        // can be removed after grading
        } else {
            var withinPercent = false;
            console.log(a + " and " + b + " are not within " + decimalPercent + "% of each other.");                    // can be removed after grading
        }
        return withinPercent;
    }
}

numberAnalysis.fuzzyMatch(36,42,.15);
numberAnalysis.fuzzyMatch(75,23,.55);


//  8. Find the number of hours or days difference between two dates.
console.log("******************************************************************************************************");
console.log("8. Find the number of hours or days difference between two dates.");

var dateAnalysis = {
    dateDiff: function (var1, var2, hoursOrDays) {
            var dateA = new Date(var1);
            var dateB = new Date(var2);
            var elapsed = dateB - dateA;
                if (hoursOrDays === "hours") {
                    var difference = Math.abs(elapsed / 1000 / 60 / 60);
                } else if (hoursOrDays === "days") {
                    var difference = Math.abs(elapsed / 1000 / 60 / 60 / 24);
                }
            console.log("The difference between " + var1 + " and " + var2 + " is " + difference.toFixed(2) + " " + hoursOrDays);        // can be removed after grading
        return difference;
    }

};

dateAnalysis.dateDiff("10/31/2001", "2/29/2004", "days");
dateAnalysis.dateDiff("10/31/2001", "2/29/2004", "hours");
dateAnalysis.dateDiff("May 17, 2005", "July 13, 2005", "days");
dateAnalysis.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "days");
dateAnalysis.dateDiff("May 17, 1977 10:59 AM", "July 13, 2005 7:26 PM", "hours");


//  9. Given a string version of a number such as "42", return the value as an actual Number, such as 42.
console.log("******************************************************************************************************");
console.log("9. Given a string version of a number such as \"42\", return the value as an actual Number, such as 42.");

var numberAnalysis2 = {                                     // will be added to numberAnalysis object for final library - separated for ease here.
    stringToNum: function (string) {
        var goAhead = isNaN(string);
        if (goAhead === false) {
            number = Number(string);
            console.log("The string " + string + " has been converted to the number " + number + ".");                  // can be removed after grading
            return number;
        } else {
            console.log("The string " + string + " is not a valid number.  No conversion was done.");                   // can be removed after grading
            return string;
        }
    }
};

numberAnalysis2.stringToNum("48,930");
numberAnalysis2.stringToNum("37.4");
numberAnalysis2.stringToNum("42");
numberAnalysis2.stringToNum("Bob");


// **** ARRAY FUNCTIONS **** //

//  10. Find the smallest value in an array that is greater than a given number
console.log("******************************************************************************************************");
console.log("10. Find the smallest value in an array that is greater than a given number");

var arrayAnalysis = {
    arrayValue: function (array, value) {
        array.push(value);                           // Adds the given value to the array
        array.sort(function (a,b) {return a - b;});  // Sorts the array numerically
        itemsLess = array.slice(0,array.indexOf(value));              // Finds the new index of the initial value to be measured by
        console.log(itemsLess + " are less than " + value);                                                             // can be removed after grading
        return itemsLess;
    }
}

arrayAnalysis.arrayValue([5, 17, 11, 4, 7, 13], 7);

//  11. Find the total value of just the numbers in an array, even if some of the items are not numbers.
console.log("******************************************************************************************************");
console.log("11. Find the total value of just the numbers in an array, even if some of the items are not numbers.");

var arrayAnalysis2 = {                              // Can be combined into above arrayAnalysis object above after assignment graded
    arrayTotal: function (array) {
        var total = 0;
        for (x = 0; x < array.length; x++) {
            var value = array[x];
            if ((value !== false) && (value !== true)) {
                var isIt = isNaN(value);
                if (isIt === false) {
                    total += value;
                }
            }
        }
        console.log("The total of the numbers in your array is: " + total);                                             // can be removed after grading
    }
};

arrayAnalysis2.arrayTotal([15, 37, "dog", false, "cat", 9, true]);

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
            return;
        })
        console.log(array);
    }
}

arraySort.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "b");
arraySort.keySort([{num:3, b:"dog"}, {num:32, b:"cat"}, {num:93, b:"fish"}, {num:5, b:"giraffe"}, {num:6, b:"monkey"}], "num");