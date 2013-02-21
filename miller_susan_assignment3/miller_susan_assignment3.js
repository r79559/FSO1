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
var items = ["my basket", "my dog Toto"];
var friendNumber = 1;                                                                                                   // determines which friend is focus
// var incrementFriend = function(number) {friendNumber = number + 1;};                                                    // increments friendNumber, moves to next object

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

    askTheWizard: function (go) {
        say("\"What do you want?\"");                                                                                  //
        if (go = true) {
        for (x = 0; x < characters.goodGuys.length; x++) {                                                              // For loop
            var character = characters.goodGuys[x];
            if (character.journeyman === true) {
                if (character.name === "Dorothy") {
                    say("\"Please, sir, Mr. Oz, sir, I'd like " + character.need + ", sir,\" " + character.name + " pleaded.");
                } else {
                say("\"I need " + character.need + ",\" said " + character.name + ".");
                }
            }
        }
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
    add: function() {
        var newItems = items.push("the ruby slippers");
        return newItems;
    },
    goHome: function(clicks) {

        say(this.color);
    }
};


function readyToGo(things) {
    var i=0
    say("I gathered: ");
    while (i < items.length) {say(things[i]); i++; };
    say("And with a deep breath, I was off.")
};

var progress = function(distance) {                                                                                     // function that deals with distance

    if ((journeyLength - distance === 1)) {

        say("The sign said we were " + (journeyLength - distance ) + " mile from The Emerald City.  \"We're almost there!\"");

        incrementStop(stopNumber);

    } else if ((distance > 1) && (distance < journeyLength)) {                                                                 // Boolean comparison

        say("The sign said we were " + (journeyLength - distance) + " miles from The Emerald City.  \"Let's go!\"");

        incrementStop(stopNumber);

    } else if (distance < 1) {

        say("\"I don't think we're in Kansas anymore, Toto!\" I said, holding him close.");

        incrementStop(stopNumber);

    } else {

        say("\"Look!\" I exclaimed,  \"It's the Emerald City!\"");

    }

    return distance;

};

var friend = {
    increment: function(number) {friendNumber = number + 1;},
    meet: function(number) {
        var character = characters.goodGuys[friendNumber];
        if (character.name === "Munchkins") {
            say("Standing before me were " + character.number + " " + character.name + " with " + character.characteristic
                + ". \"Welcome to " + character.location + ",\" they cheered."); return;
        } if (character.name === "Glinda the Good Witch") {
            say("Suddenly, from " + character.location + ", " + character.name + " appeared in her " + character.characteristic + ".");
            rubySlippers.add("flick of her wand");
            return;
        } else {
            say("At " + character.location + ", we met " + character.name + " with the " + character.characteristic + ".");
        }
    }

};



// Begin storytelling



say("When the clouds cleared, Toto and I cautiously peeked out of the front door.");
progress(stopNumber);
friend.meet(friendNumber);
friend.increment(friendNumber);

friend.meet(friendNumber);
friend.increment(friendNumber);

readyToGo(items);

progress(stopNumber);
friend.meet(friendNumber);
friend.increment(friendNumber);
progress(stopNumber);


friend.meet(friendNumber);
friend.increment(friendNumber);
progress(stopNumber);

friend.meet(friendNumber);
friend.increment(friendNumber);
progress(stopNumber);

say(wizardAndWitch.getWickedWitch());

wizardAndWitch.getNeeds(wizardAndWitch.askTheWizard(true));