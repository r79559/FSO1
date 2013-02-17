// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: SDI Project 2
// Class: SDI
// Functions and Variables and Arguments, Oh My!

// Variables

var travelerNames = [ "I", "The Scarecrow", "The Tin Man", "The Cowardly Lion" ],
    travelerNeeds = [ "a home", "a brain", "a heart", "the nerve" ],
    wayHome = "The Yellow Brick Road",
    witch = true,
    wizard = true;

var say = function(message) { console.log(message); };                                     // Saving a few characters.

var traveler = function(name, stop) {                                               // This is my procedure returning only output
        introduction = "\"I'm " + name[stop] + "\" he said.  \"Are you going to see the Wizard?\"";
        say(introduction);


        if (stopNumber == 1) {                                                          // this determines response and grammar
            say("\"I am!\" I replied.  \"Come on and we'll both follow " + wayHome + "!\"");
        } else {
            say("\"We are!\" I responded.  \"Come on and we'll all follow " + wayHome + "!\"");
    } // end if block for grammar.

}; // traveler

var getFriends = function(stopNumber) {                 // This is my Number function / while loop.  My Procedure function is nested within.

    while (stopNumber < travelerNames.length) {                                             // While loop begins
        
        traveler(travelerNames, stopNumber);

        stopNumber++;

    } // while loop
    return stopNumber;
    
}; // meetSomeoneNew

var getHelp = function(needs, totalMunchkins) {         // This is my Array function.
        
    var count = 1;
    while (count < travelerNeeds.length) {                                                  // Cycles through Array
            
        say("\"I need " + needs[count] + ",\" said " +  travelerNames[count] + ".");           
        count++;
    }

    munchkinsEach = totalMunchkins / needs.length;
    
    helpers = "We each got " + munchkinsEach + " munchkins to help us prepare to meet the Wizard.  Finally, we step into his presence!";
    
    return helpers;
    
    };
    
var getWickedWitch = function (witch, wizard) {         // This is my Boolean function.

    if (witch && wizard) {                                                               // Are witch and wizard both present?

        say("There was the witch! \"Lion, hand me that bucket of water!\" I yelled, then I threw it on the witch and she melted away.");
        witch = false;                                                                     // Witch has melted; reassign variable.
    }

    status = "I turned to the wizard and asked, \"Oh, great and powerful Oz, will you help us?\"";

    return status;
};

var getHome = function(magicPhrase , slipperType) {    // This is my pitiful little String function.
  
      iconicPhrase = "click your " + slipperType + " heels together and say, '" + magicPhrase + "' three times";
      return iconicPhrase;
    
};


say("Hi!  I'm Dorothy, and I'm following " + wayHome + ".  Wait!  Who do we have here?"); // Just kicking off the story.

var totalFolks = getFriends(1); // Calls Number function and nested Procedure.

say("So off the " + totalFolks + " of us went to try to find my way home.");

say("As we came into the Emerald City, we came upon an enormous wooden door on which we knocked.  The grumpy man in the window asked what we wanted.");

say("\"We need to see the Wizard, sir!  You see, my friends here, we need help. I need to get home.\"");

say(getHelp(travelerNeeds, 20)); // Calls Array function.

say(getWickedWitch(witch, wizard)); // Calls Boolean function.

say("\"Your wishes have all been granted, Dorothy.  To get home, simply " + (getHome("There's no place like home", "ruby")) + ".\""); // Calls String function.

say("I did.  And, by George, it worked!");                                              // Ties is all up with a big ol' bow.