// alert("JavaScript works!");

// Susan R. Miller
// SDI 1302
// Project 1
// February 6, 2013
// My First JavaScript Code to Date

// Variables

var areThereAliens = false,
	theDate = 2015,
	theAgents = "Doggett and Reyes",
	theBadGuys = "\"The Consortium\"";

// Outputs

console.log("They say it is " + areThereAliens + " that there are aliens.");
console.log("The year is " +theDate + ". The date of invasion was set to December 21, 2012.");
console.log(theAgents + " are the agents working the X-files.");
console.log("They are, however, being thwarted by " + theBadGuys + ".");


// Conditionals

if (areThereAliens === true) {
	if (theDate > 2012) {
		theDate = theDate - 2012;
		console.log("Aliens invaded " + theDate + " year(s) ago.  You likely did not survive.");			} else {
		console.log("The year is " + theDate + ".  They are coming soon.");				
	}
	
} else {
	if (theAgents === "Mulder and Scully") {
		console.log("The Truth is out there, and " + theAgents + " will find it.");
	} else {
		console.log("What the bleep?! " + theBadGuys + " succeeded? No more Scully and Mulder? We're doomed! Pass the Morleys.");
	}	
}