// alert("JavaScript works!");

// Author: Susan R. Miller
// Course: SDI 1302
// Assignment #4: Code Library

//  Does a string follow a 123-456-7890 pattern like a phone number?

var phoneNumber = {
    isValidNumber: function (phoneNumber) {
        if ((phoneNumber.charAt(3) === "-") && (phoneNumber.charAt(7) === "-")) {
            var validNumber = true;
            console.log("Thank you for entering a valid phone number, " + phoneNumber + ".");
            return validNumber;
        } else {
            var validNumber = false;
            console.log(phoneNumber + " is not a valid phone number. Please enter your number using xxx-xxx-xxxx format.");
            return validNumber;
        }
    }
};

phoneNumber.isValidNumber("212-555-1212");
phoneNumber.isValidNumber("212.555.1212");

//  Does a string follow an aaa@bbb.ccc pattern like an email address?

var emailAddress = {
    isValidEmail: function (email) {
        if (((email.charAt(email.length - 4) === ".") || (email.charAt(email.lentgh - 3 === "."))) && (email.indexOf("@") >= 0)) {
            var validEmail = true;
            console.log(email + " appears to be a valid email address.");
            return validEmail;
        } else {
            var validEmail = false;
            console.log(email + " does not appear to be a valid email address.  Please try again.");
            return validEmail;
        }
    }
};

emailAddress.isValidEmail("satr@mac.com");
emailAddress.isValidEmail("satr@kiwi.co.nz");
emailAddress.isValidEmail("donkeykong.com");

// Is the string a URL? (Does it start with http: or https:?)

var url = {
    isValidUrl: function (url) {

        if (url.startsWith("http://") || url.startsWith("https://")) {                          // Tests starting letters of each string
            var validUrl = true;
            console.log(url + " appears to be a valid URL.");
        } else {
            var validUrl = false;
            console.log(url + " does not appear to be a valid URL.  Please use http:// or https:// format.");
        }
        return validUrl;
    }
};

url.isValidUrl("http://www.domain.com");
url.isValidUrl("https://www.domain.com");
url.isValidUrl("www.domain.com");


//  Title-case a string (split into words, then uppercase the first letter of each word)

var caseManip = {
    titleCase: function (title) {
        var titled = [];
        var words = title.split(" ");                                   // Splits string into array
            for (x = 0; x < words.length; x++) {                        // Cycles through words in array
                var breakOut = words[x];
                var firstLetter = breakOut.slice(0,1);                  // Pulls first letter from word
                var restOfWord = breakOut.slice(1,breakOut.length);     // Places rest of word in own var
                var capped = "";                                        // Creates an empty string to concat into
                var newWord = capped.concat(firstLetter.toUpperCase() + restOfWord);    // Concats the two parts of the word together, with first part capped
                titled.push(newWord)                                    // Adds now capped word into array
            }
        var cappedTitle = titled.join(" ");                             // Joins words in array together with a space between
        console.log(cappedTitle);
        return cappedTitle;
    }
};

caseManip.titleCase("it's a dog eat dog world, and I'm wearing milkbone underwear.");


//   Given a string that is a list of things separated by a given string, as well as another string separator,
//   return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

var stringSeparator = {
    switch: function (string, originalSeparator, newSeparator) {
        var words = string.split(originalSeparator);
        var newString = words.join(newSeparator);
        console.log("\"" + string + "\" is now \"" + newString + ".\"");
        return newString;
    }
}

stringSeparator.switch("dogs, cats, fish, bones", ",", " -");

