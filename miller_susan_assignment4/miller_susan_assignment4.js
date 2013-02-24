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

