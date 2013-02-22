// alert("JavaScript works!");

// Author: Susan R. Miller
// Project: Assignment 3
// Course: SDI 1302
// Title: The JavaScript Wizard of Oz

var say = function(message) { console.log(message); };                                                                  // for ease.

var stopNumber = 0;                                                                                                     // which stop on trip.
var blockLength = 2;                                                                                                    // how long is point a to point b?
var incrementStop = function(number) {stopNumber = number + blockLength;};                                              // function to increment stopNumber var
var journeyLength = 7;                                                                                                 // total length of journey
var items = ["my basket", "my dog Toto"];
var friendNumber = 1;

var path = {
    name: "Yellow Brick Road"
};

var shoes = {
    rubySlippers: {
        name: "ruby slippers",
        descriptive: "glittering",
        color: "red",
        heelClicks: 3,
        phrase: "There's no place like home!"},
    add: function(action) {
        say("With a " + action + ", my feet began to tingle.  Looking down, I saw a beautiful pair of " + this.rubySlippers.color + " " + this.rubySlippers.name + ".");
        items.push("the ruby slippers");
        return items;
    },
    stepAway: function(magicalAction) {
        shoes.rubySlippers.describe = magicalAction;
        say(characters.goodGuys[friendNumber].name + " reassured me, and told me if I wanted to get home, I should go see The Wizard.")
        say("The Munchkins opened a pathway for me, revealing a " + path.name + ".  I looked at them in confusion.");
        say("\"Follow " + path.name + ",\" they said. \"Follow " + path.name + "!\"  Slowly, their chants turned to song.");
        say("I glanced down at Toto and realized the " + shoes.rubySlippers.name + " were " + shoes.rubySlippers.describe + "ing!");

    },
    goHome: function(repeat) {
        say("I closed my eyes and spoke carefully, clicking my heels each time");
        for (repeat > 0; repeat--;) {
            say("\"There's no place like home.\"");
            var clicksLeft = this.rubySlippers.heelClicks;
            while (clicksLeft > 0) {
                say("click!");
                clicksLeft--;
            }
        }

        ;
    }
};

var friend = {
    increment: function(number) {friendNumber = number + 1;},
    meet: function(number) {
        var character = characters.goodGuys[number];
        if (character.name === "Munchkins") {
            say("Standing before me were " + character.number + " " + character.name + " with " + character.characteristic
                + ". \"Welcome to " + character.location + ",\" they cheered."); return;
        } if (character.name === "Glinda the Good Witch") {
            say("Suddenly, from " + character.location + ", " + character.name + " appeared in her " + character.characteristic + ".");
            shoes.add("flick of her wand");
        } else {
            say("At " + character.location + ", we met " + character.name + " with the " + character.characteristic + ".  He said he needed " + character.need + ".");
        }
    }

};

var enemy = {
    getEnemy: function(name, characteristic, phrase)
    {
        enemy.enemyInfo = {name: name, characteristic: characteristic, phrase: phrase};
        return enemy.enemyInfo;
    },
    meetEnemy: function(present)
    {
        if (present === true) {

            say("There was a menacing sizzle and boom behind the munchkins.  When the smoke cleared, there stood " + this.enemyInfo.name + " with her " + this.enemyInfo.characteristic + "!");
            say("The Munchkins screamed and hid as " + characters.goodGuys[friendNumber].name + " attempted to shoo her away.");
            say("\"You stole my dead sister's " + shoes.rubySlippers.name + "!\" " + this.enemyInfo.name + " shrieked, and then laughed. " + this.enemyInfo.phrase);
            say("Then, in a poof, she was gone.");

        }
    }
};

var progress = function(distance) {                                                                                     // function that deals with distance

    if ((journeyLength - distance === 1)) {

        say("The sign said we were " + (journeyLength - distance ) + " mile from The Emerald City.  \"We're almost there!\"");

        incrementStop(stopNumber);

    } else if ((distance > 1) && (distance < journeyLength)) {                                                                 // Boolean comparison

        say("The sign said we were " + (journeyLength - distance) + " miles from The Emerald City.  \"Let's go see The Wizard!\"");

        incrementStop(stopNumber);

    } else if (distance < 1) {

        say("\"I don't think we're in Kansas anymore, Toto!\" I said, holding him close.");

        incrementStop(stopNumber);

    } else if (distance >= journeyLength) {

        return journeyLength;

    } else {

        say("\"Look!\" I exclaimed,  \"It's the Emerald City!\"");

    }

};

var wizardAndWitch = {
    wizard: true,

    arrive: function(verbPastTense) {
        say("Then we saw it, the sparkling Emerald City!  We " + verbPastTense + " all the way to the palace where we were led directly into The Wizard's presence.")
    },

    getWickedWitch: function (witch) {                                                                                       // This is my Boolean function.
        if (witch && this.wizard) {                                                                                // Are witch and wizard both present?
            say("There was the " + enemy.enemyInfo.name + "! " + enemy.enemyInfo.phrase + "she shrieked.");
            say("\"Lion, hand me that bucket of water!\" I yelled, then I threw it on the witch and she melted away.");
            wizardAndWitch.witch = false;                                                                               // Witch has melted; reassign variable.
            var status = "Oh, Wizard, now that the Witch of the West is dead, will you help us?  We've traveled " + progress(stopNumber) + " miles to see you!";
        } else {
            var status = "I turned to the wizard and asked, \"Oh, great and powerful Oz, will you help us?\"";
        }
        return status;
    },

    askTheWizard: function (go) {
        say("\"What do you want?\"");                                                                                  //
        if (go === true) {
            for (var x = 0; x < characters.goodGuys.length; x++) {                                                              // For loop
                var character = characters.goodGuys[x];
                if (character.journeyman === true) {
                    if (character.name === "Dorothy") {
                        say("\"Please, sir, Mr. Oz, sir, I'd like " + character.need + ", sir,\" " + character.name + " pleaded.");
                    } else {
                        say("\"I need " + character.need + ",\" said " + character.name + ".");
                    }
                }
            }
            var wishesStated = true;
        } else {
            var wishesStated = false;
        }
        return wishesStated;                                                                                            // Boolean return
    },

    getNeeds: function (value) {                                                                                        // Method: Procedure, Argument: Boolean
        if (value === true) { say("\"Then you shall have it, for The Great and Powerful Oz has spoken!  The magic is all in your shoes, Dorothy.  They're all you need,\" he said with a wink."); }
        else { say("Speak up!")}
    }
};

var move = {
    readyToGo: function(things) {
        var i=0;
        say("I gathered: ");
        while (i < items.length) {say(things[i]); i++; }
                say("And with a deep breath, I was off.")
        },
    routineA: function() {
        progress(stopNumber);
        friend.meet(friendNumber);
        friend.increment(friendNumber);
        },
    oz: function() {
        wizardAndWitch.arrive("skipped");
        say(wizardAndWitch.getWickedWitch(true));
        wizardAndWitch.getNeeds(wizardAndWitch.askTheWizard(true));
        }

}

// Begin storytelling



say("When the clouds cleared, Toto and I cautiously peeked out of the front door.");
move.routineA();
friend.meet(friendNumber);
enemy.getEnemy("The Wicked Witch of the West", "hideous green skin", "\"I'll get you, my pretty!\"");
enemy.meetEnemy(true);
shoes.stepAway("glitter");
move.readyToGo(items);
friend.increment(friendNumber);
friend.meet(friendNumber);
friend.increment(friendNumber);
move.routineA();
move.routineA();
progress(stopNumber);
move.oz();
shoes.goHome(shoes.rubySlippers.heelClicks);
say("And, just like that, I was home!");