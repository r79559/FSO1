// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The Little Flowchart That Could

var say = function(message) { console.log(message); };                                                                  // for ease.

var stopNumber = 0;                                                                                                     // which stop on trip.
var blockLength = 3;                                                                                                    // how long is point a to point b?
var incrementStop = function(number) {stopNumber = number + blockLength;};                                              // function to increment stopNumber var
var journeyLength = 10;                                                                                                 // total length of journey

var friendNumber = 0;                                                                                                   // determines which friend is focus
var incrementFriend = function(number) {friendNumber = number + 1;};                                                    // increments friendNumber, moves to next object

var wizardAndWitch = {
    witch: true,
    wizard: true,
    getWickedWitch: function () {                                                                                       // This is my Boolean function.
        if (this.witch && this.wizard) {                                                                                // Are witch and wizard both present?
            say("There was the witch! \"Lion, hand me that bucket of water!\" I yelled, then I threw it on the witch and she melted away.");
            wizardAndWitch.witch = false;                                                                               // Witch has melted; reassign variable.
            status = "Oh, Wizard, now that the Witch of the West is dead, will you help us?";
        } else {
            status = "I turned to the wizard and asked, \"Oh, great and powerful Oz, will you help us?\"";
        }
        return status;
    },

    askTheWizard: function (go) {                                                                                       //
        if (go = true) {
        say("\"I'd like to go home, sir.\"");
        for (x = 0; x < characters.goodGuys.length; x++) {                                                              // For loop
            var character = characters.goodGuys[x];
            if (character.journeyman === true) {
                say("\"I need " + character.need + ",\" said " + character.name + ".");
            }
        };
        wishesStated = true;
        } else {
        wishesStated = false;
        }
        return wishesStated;                                                                                            // Boolean return
    },

    getNeeds: function (value) {                                                                                        // Method: Procedure, Argument: Boolean
        if (value === true) { say("Then you shall have it!"); }
        else { say("Speak up!")}
    }
};

var rubySlippers =  {
    color: "red",
    heelClicks: 3,
    phrase: "There's no place like home!",
    action: function() {

        say(this.color);

    }
};

var progress = function(distance) {                                                                                     // function that deals with distance

    if ((distance > 1) && (distance < journeyLength)) {                                                                 // Boolean comparison

        say("We've traveled " + distance + " miles.  We only have " + (journeyLength - distance) + " to go!");

        incrementStop(stopNumber);

    } else if (distance < 1) {

        say("I don't think we're in Kansas anymore, Toto!");

        incrementStop(stopNumber);

    } else {

        say("We have arrived!");

    }

    return distance;

};

var getFriend = function(friendNumber) {                                                                                // shortens JSON data call with incremented var

    friend = characters.goodGuys[friendNumber];

    return(friend);
};



// Begin storytelling


progress(stopNumber);
say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);

say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);

say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);

say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);

say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);

say(wizardAndWitch.getWickedWitch());

say("What do you need?");

wizardAndWitch.getNeeds(wizardAndWitch.askTheWizard(true));