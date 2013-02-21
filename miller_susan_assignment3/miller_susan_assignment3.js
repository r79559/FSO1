// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The Little Flowchart That Could

var say = function(message) { console.log(message); };                                                                  // for ease.

var stopNumber = 0;                                                                                                     // which stop on trip.
var blockLength = 5;                                                                                                    // how long is point a to point b?
var incrementStop = function(number) {stopNumber = number + blockLength;};                                              // function to increment stopNumber var
var journeyLength = 50;                                                                                                 // total length of journey

var friendNumber = 0;                                                                                                   // determines which friend is focus
var incrementFriend = function(number) {friendNumber = number + 1;};                                                    // increments friendNumber, moves to next object

var wizardAndWitch = {
    witch: true,
    wizard: true,

    getWickedWitch: function (witch, wizard) {                                                                          // This is my Boolean function.

    if (this.witch && this.wizard) {                                                                                    // Are witch and wizard both present?

        say("There was the witch! \"Lion, hand me that bucket of water!\" I yelled, then I threw it on the witch and she melted away.");
        wizardAndWitch.witch = false;                                                                                    // Witch has melted; reassign variable.
        status = "Oh, Wizard, now that the Witch of the West is dead, will you help us?";

    } else {

    status = "I turned to the wizard and asked, \"Oh, great and powerful Oz, will you help us?\"";

    };

    return status;
    },

    seeTheWizard: function () {

    }
}

var progress = function(distance) {                                                                                     // function that deals with distance

    if ((distance > 1) && (distance < journeyLength)) {                                                                 // Boolean comparison

        say("We've traveled " + distance + " miles.  We only have " + (journeyLength - distance) + " to go!");

        incrementStop(stopNumber);

        return distance;

    } if (distance < 1) {

        say("I don't think we're in Kansas anymore, Toto!");

        incrementStop(stopNumber);

    } else {

        say("We have arrived!");

    }


};

var getFriend = function(number) {                                                                                      // shortens JSON data call with incremented var

    var friend = characters.goodGuys[friendNumber];

    return(friend);
};



// Begin storytelling


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
say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);
say("We met " + getFriend(friendNumber).name + " with the " + getFriend(friendNumber).characteristic + ".");
incrementFriend(friendNumber);
progress(stopNumber);
say(wizardAndWitch.getWickedWitch());
