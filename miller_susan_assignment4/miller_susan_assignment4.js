// alert("JavaScript works!");

// Author: Susan R. Miller
// Course: SDI 1302
// Assignment #4: Code Library

//  Does a string follow a 123-456-7890 pattern like a phone number?

var phoneTest = function (phoneNumber) {
    if ((phoneNumber.charAt(3) === "-") && (phoneNumber.charAt(7) === "-")) {
        validNumber = true;
        console.log("Thank you for entering a valid phone number.");
        return validNumber;
    } else {
        validNumber = false;
        console.log("Please enter a valid phone number using xxx-xxx-xxxx format.");
        return validNumber;
    }
};


//  Does a string follow an aaa@bbb.ccc pattern like an email address?
