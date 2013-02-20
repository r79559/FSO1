// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The Little Flowchart That Could

var say = function(message) { console.log(message); };

var stopNumber = 0;

var increment = function(number) {stopNumber = number++; return;};

var progress = function(distance) {

    increment(stopNumber);

    if (distance > 1) {

        var NewDistance = distance + 5;

        say("We've traveled " + NewDistance + " miles.");

        return NewDistance;

    } else {

        var NewDistance = distance + 5;

        say("Let's go!");

        return 0;

    };


};

var miles = progress(stopNumber);

say(miles);
say(miles);
progress(stopNumber);


