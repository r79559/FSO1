// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The Little Flowchart That Could

var say = function(message) { console.log(message); };

var stopNumber = 0;

var increment = function(number) {stopNumber = number + 5; return;};

var progress = function(distance) {


    if (distance > 1) {

        say("We've traveled " + distance + " miles.");

        increment(stopNumber);

        return distance;

    } else {

        say("Let's go!");

        increment(stopNumber);

        return 0;

    };


};

var miles = progress(stopNumber);

progress(stopNumber);
progress(stopNumber);
progress(stopNumber);
progress(stopNumber);

