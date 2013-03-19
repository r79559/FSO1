//
// Author: Susan R. Miller
// Course: VFW 1303
// Week 2
//  Note: If I can't get the localStorage to cooperate, I have no idea where to
//        start on recalling.  It'll clear, though!

// assures DOM loaded
window.addEventListener("DOMContentLoaded", function() {


    // getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }

    // Create and populate chore types
    function listTypes(){
        var formTag = document.getElementsByTagName("form"),
            selectLi = $("select"),
            makeSelect = document.createElement("select");
            makeSelect.setAttribute("id", "choretype");
        for (var i = 0, j = choreTypes.length; i<j; i++) {
            var makeOption = document.createElement("option");
            var optText = choreTypes[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    var choreTypes = ["Select a Chore Type", "House", "Hygiene", "Pet", "School"],
        doneValue;
    listTypes();

    // shortcut variables


    var addChore = $("addNew");
    var showChores = $("showAll");
    var resetChores = $("resetAll");


    var empty = function () {
        var check = confirm("Are you sure you want to clear all chores?");
        if (check) {
            localStorage.clear();
        } else {
            alert("Let me know if you reconsider.");
        }
    };

    var radioCheck = function(){
        var radios = document.forms[0].done;
        for (var i = 0; i<radios.length; i++) {
            if (radios[i].checked){
                doneValue = radios[i].value;
            }
        }
    };

    var saveChore = function () {
        var id = Math.floor(Math.random()*1000000);
        // Gather and store values as object with form label and value
        radioCheck();
        var item = {};
            item.type = ["Chore Type: ", $("choretype").value];
            item.chore = ["Chore Name: ", $("chorename").value];
            item.who = ["Person Responsible: ", $("person").value];
            item.date = ["Date Due: ", $("duedate").value];
            item.effort = ["Level of Difficulty: ", $("difficulty").value];
            item.done = ["Is it Done? ", doneValue];
        // Save to localStorage
        localStorage.setItem(id, JSON.stringify(item));
        alert("Your chore has been saved!");
    };

    var showAll = function () {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "item");
        $("content").appendChild(newDiv);
        var ulList = document.createElement("ul");
        newDiv.appendChild(ulList);
        for (var i=0, j=localStorage.length; i<j; i++) {
            var ulBullet = document.createElement("li");
            ulList.appendChild(ulBullet);
            var key = localStorage.key[i];
            var value = localStorage.getItem(key);
            var item = JSON.parse(value);
            var itemize = document.createElement("ol");
            ulBullet.appendChild(itemize);
                for (var m = 0, n = item.length; m<n; i++) {
                    var newItem = document.createElement("li");
                    itemize.appendChild(newItem);
                    var itemValue = item[m][0] = ": " + item[m][1];
                    newItem.innerHTML = itemValue;
                }
        }


    };

    // listeners

    addChore.addEventListener("click", saveChore);
    showChores.addEventListener("click", showAll);
    resetChores.addEventListener("click", empty);

});