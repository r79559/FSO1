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

