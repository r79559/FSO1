//
// Author: Susan R. Miller
// Course: VFW 1303
// Week 2
//

var main = document.getElementById("content");

// form info variables
var type = document.getElementById("choretype");
var who = document.getElementById("person");
var date = document.getElementById("duedate");
var effort = document.getElementById("difficulty");
var done = document.getElementById("chores").complete;
var reset = document.getElementById("resetAll");


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

var captureDone = function (){
    localStorage.setItem("Completed?", done.value);
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

var getData5 = function () {
    var doneKey = localStorage.key("Completed?");
    var doneValue = localStorage.getItem(doneKey);
    done.value = doneValue;
};


// other functions

var clear = function () {
    var check = confirm("Are you sure you want to clear all chores?");
    if (check) {
        localStorage.clear();
    } else {

    }
};

// getData calls

getData1();
getData2();
getData3();
getData4();
getData5();


// listeners

type.addEventListener("blur", captureChore);
who.addEventListener("blur", captureWho);
date.addEventListener("click", captureDate);
effort.addEventListener("click", captureEffort);
done.addEventListener("click", captureDone);


reset.addEventListener("click", clear);


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



// Confirm clearing the list.