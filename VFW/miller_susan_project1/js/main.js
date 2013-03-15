//
// Author: Susan R. Miller
// Course: VFW 1303
// Week 2
//

// assures DOM loaded
window.addEventListener("DOMContentLoaded", function() {

    // getElementById Function
    function $(x){
        var theElement = document.getElementbyId(x);
        return theElement;
    }

var main = $("content");

// shortcut variables
var type = $("choretype");
var chore = $("chorename");
var who = $("person");
var date = $("duedate");
var effort = $("difficulty");
var done = $("chores").complete;
var addChore = $("addNew");
var showChores = $("showAll");
var resetChores = $("resetAll");

var choreTypes = ["Select a Chore Type", "House", "Hygiene", "Pet", "School"];




var empty = function () {
    var check = confirm("Are you sure you want to clear all chores?");
    if (check) {
        localStorage.clear();
    } else {
        alert("Let me know if you reconsider.");
    }
};




// listeners

type.addEventListener("blur", captureChore);
who.addEventListener("blur", captureWho);
date.addEventListener("click", captureDate);
effort.addEventListener("click", captureEffort);

addChore.addEventListener("click", saveChore);
showChores.addEventListener("click", showAll);
resetChores.addEventListener("click", empty);


/*
var addChore = document.getElementById("addNew");
var showChores = document.getElementById("showAll");
var resetChores = document.getElementById("resetAll");

var ulList = document.createElement("ul");

var newDiv = document.createElement("div");

newDiv.setAttribute("class", "item");
main.appendChild(newDiv);
newDiv.appendChild(ulList);

for (i=0, j=info.length; i<j; i++) {
    var ulBullet = document.createElement("li");
    ulBullet.innerHTML = info[i];
    ulList.appendChild(ulBullet);
}

console.log(newDiv);
*/

/*
// capture functions
    var captureChore = function (){
        localStorage.setItem("Chore Type", type.value);
    };

    var captureWho = function (){
        localStorage.setItem("Person", who.value);
    };

    var captureDate = function (){
        localStorage.setItem("Due Date", date.value);
    };

    var captureEffort = function (){
        localStorage.setItem("Difficulty", effort.value);
    };




// getData functions

    var getData1 = function (){
        var typeKey = localStorage.key("Chore Type");
        var typeValue = localStorage.getItem(typeKey);
        type.value = typeValue;
    };

    var getData2 = function () {
        var whoKey = localStorage.key("Person");
        var whoValue = localStorage.getItem(whoKey);
        who.value = whoValue;
    };

    var getData3 = function () {
        var dateKey = localStorage.key("Due Date");
        var dateValue = localStorage.getItem(dateKey);
        date.value = dateValue;
    };

    var getData4 = function () {
        var effortKey = localStorage.key("Difficulty");
        var effortValue = localStorage.getItem(effortKey);
        effort.value = effortValue;
    };


// getData calls

    getData1();
    getData2();
    getData3();
    getData4();

// other functions
*/


// Confirm clearing the list.

});