// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The Little Flowchart That Could

var progress = function(distance) {

    newDistance = distance + 5;
    return newDistance;

};

var stopNumber = 0;

var say = function(message) { console.log(message); };

say(progress(stopNumber = stopNumber + 1));

say(progress(stopNumber = stopnumber + 1));

say("hi");