// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: SDI Project 2
// Class: SDI
// Functions and Variables and Arguments, Oh My!

// Variables

var travelerNames = [ "The Scarecrow", "The Tin Man", "The Cowardly Lion" ],
    travelerNeeds = [ "a brain", "a heart", "the nerve" ],
    heelClicks = 3,
    wayHome = "The Yellow Brick Road";

var say = function(message) { console.log(message); };                                     // Saving a few characters.

var meetSomeoneNew = function(stopNumber) {                 // This is my Number function / while loop.  My Procedure function is nested within.

    while (stopNumber < travelerNames.length) {                                             // While loop begins
        
        var traveler = function(name, stop) {                                               // This is my procedure returning only output
            introduction = "Hi, I'm " + name[stop] + ".  Are you going to see the Wizard, too? Because life would be just peachy if I only had " + (travelerNeeds[stop]) + ".";
            say(introduction);
        
            
            if (stopNumber == 0) {                                                          // this determines response and grammar
                    say("Then come on along!  That's where I'm going, too!");
                } else {                       
                    say("Then come on along!  That's where we're going, too!");
            } // end if block for grammar.
            
        }; // traveler
        
        traveler(travelerNames, stopNumber);

        stopNumber++;

    }; // while loop
}; // travel

say("Hi!  I'm Dorothy, and I'm following " + wayHome + ".  Wait!  Who do we have here?"); // Just kicking off the story.

meetSomeoneNew(0); // Calls Number function and nested Procedure.



