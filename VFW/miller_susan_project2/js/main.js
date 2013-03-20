//
// Author: Susan R. Miller
// Course: VFW 1303
// Week 3
//

// assures DOM loaded
window.addEventListener("DOMContentLoaded", function() {


    // getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }

    // shortcut variables
    var addChore = $("addNew");
    var addChoreTop = $("addNewTop");
    var showChores = $("showAll");
    var showChoresTop = $("showAllTop");
    var resetChores = $("resetAll");
    var resetChoresTop = $("resetAllTop");
    var errorMsg = $("errors");


    /* Create and populate chore types */

    var choreTypes = ["Select a Chore Type", "House", "Hygiene", "Pet", "School"],
        doneValue;

    function listTypes(){
        var selectLi = $("select"),
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

    listTypes(); // Makes the drop-down happen.

    /* End Create and Populate Chore Types */



    // Sets up function to check for value of selected radio buttons.
    function radioCheck(){
        var radios = document.forms[0].done;
        for (var i = 0; i<radios.length; i++) {
            if (radios[i].checked){
                doneValue = radios[i].value;
            }
        }
    }


    function toggleControls(n){
        switch(n){
            case "on":
                $("choreform").style.display = "none";
                addChoreTop.style.display = "inline";
                showChoresTop.style.display = "none";
                resetChoresTop.style.display = "inline";
                $("buttonRowBottom").style.display = "none";
                break;
            case "off":
                $("choreform").style.display = "block";
                addChoreTop.style.display = "none";
                showChoresTop.style.display = "inline";
                resetChoresTop.style.display = "inline";
                $("buttonRowBottom").style.display = "block";
                $("data").style.display = "none";
                break;
            default:
                return false;
        }
    }

    // Saves chore
    function saveChore(key) {
        // Check for existing key, set one if needed
        if(!key){
            var id = Math.floor(Math.random()*1000000);
        } else {
            id = key;
        }
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
    }

    function showAll() {   // want to work on how CSS outputs this so each chore is in own div class item
        if (localStorage.length >= 1) {
            toggleControls("on");
            var newContainer = document.createElement("div");
            newContainer.setAttribute("id", "data");
            document.body.appendChild(newContainer);
            var olList = document.createElement("ol");
            newContainer.appendChild(olList);
            $("data").style.display = "block";
            for (var i=0, j=localStorage.length; i<j; i++) {
                var itemLinks = document.createElement("li");
                var newDiv = document.createElement("div");
                newDiv.setAttribute("class", "item");
                olList.appendChild(newDiv);
                var olBullet = document.createElement("li");
                newDiv.appendChild(olBullet);
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var item = JSON.parse(value);
                var itemize = document.createElement("ul");
                olBullet.appendChild(itemize);
                    for (var m in item) {
                        var newItem = document.createElement("li");
                        itemize.appendChild(newItem);
                        var itemValue = item[m][0] + " " + item[m][1];
                        newItem.innerHTML = itemValue;
                        itemize.appendChild(itemLinks);
                    }
                makeItemLinks(key, itemLinks);
            }
        } else {
            alert("You don't have any chores stored at this time.");
        }
    }

    function makeItemLinks(key, itemLinks) {
        // Make Edit Chore Link
        var editLink = document.createElement("a");
        editLink.href = "#";
        editLink.className = "small";
        editLink.key = key;
        var editText = "Edit This Chore";
        editLink.addEventListener("click", editChore);
        editLink.innerHTML = editText;
        itemLinks.appendChild(editLink);

        // Make Delete Chore Link
        var deleteLink = document.createElement("a");
        deleteLink.href = "#";
        deleteLink.className = "small";
        deleteLink.key = key;
        var deleteText = "Delete This Chore";
        deleteLink.addEventListener("click", deleteChore);
        deleteLink.innerHTML = deleteText;
        itemLinks.appendChild(deleteLink);
    }

    function editChore(){
        // Get Data from localStorage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

        // Show form
        toggleControls("off");

        // Populate with data
        $("choretype").value = item.type[1];
        $("chorename").value = item.chore[1];
        $("person").value = item.who[1];
        $("duedate").value = item.date[1];
        $("difficulty").value = item.effort[1];
        var radios = document.forms[0].done;
        for (var i = 0; i<radios.length; i++) {
            if (radios[i].value == "no" && item.done[1] == "no") {
                radios[i].setAttribute("checked", "checked");
            } else if (radios[i].value == "yes" && item.done[1] == "yes") {
                radios[i].setAttribute("checked", "checked");
            }
        }
        // Switches content and function of Add Chore button
        addChore.removeEventListener("click", saveChore);
        addChore.innerHTML = "Save Changes";
        var editSubmit = addChore;
        // Save for validation
        editSubmit.addEventListener("click", validate);
        editSubmit.key = this.key;
    }

    function deleteChore() {
        radioCheck();
        if (doneValue === "Yessiree!") {
            var ask = confirm("Looks like you're done!  Ready to delete this chore?");
            if(ask){
                localStorage.removeItem(this.key);
                window.location.reload();
            } else {
                var assure = confirm("If you're really done, you can delete it.");
                if(assure){
                    localStorage.removeItem(this.key);
                    window.location.reload();
                } else {
                    alert("That's okay.  Let me know when you're ready to delete it.")
                }
            }
        } else {
            alert("Oops!  Looks like you're not done with this chore yet!\nYou can't delete it quite yet.")
        }
    }

    function validate(e) {
        var getType = $("choretype");
        var getName = $("chorename");
        var getPerson = $("person");
        var getDate = $("duedate");

        //Error Message Reset

        errorMsg.innerHTML = "";
        getType.style.border = "1px solid black";
        getName.style.border = "1px solid black";
        getPerson.style.border = "1px solid black";
        getDate.style.border = "1px solid black";


        //Error Messages
        var msgs = [];

        //Chore Type Validation
        if(getType.value === "Select a Chore Type"){
            var typeError = "Please select a chore type.";
            getType.style.border = "1px solid red";
            msgs.push(typeError);
        }

        //Chore Name Validation
        if(getName.value === ""){
            var nameError = "Please enter a chore name.";
            getName.style.border = "1px solid red";
            msgs.push(nameError);
        }

        //Person Validation
        if(getPerson.value === ""){
            var personError = "Please enter a first name.";
            getPerson.style.border = "1px solid red";
            msgs.push(personError);
        }

        //Due Date Validation
        var rex = /^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/;
        if(!(rex.exec(getDate.value))) {
            var dateError = "Please enter a valid date in mm/dd/yyyy format.";
            getDate.style.border = "1px solid red";
            msgs.push(dateError);
        }

        //Display errors
        if (msgs.length >= 1){
            for (var i = 0, j = msgs.length; i<j; i++) {
                var text = document.createElement("li");
                text.innerHTML = msgs[i];
                errorMsg.appendChild(text);
            }
            e.preventDefault();
            return false;
        } else {
            //Save Chore if all is well.  Send key value through.
            saveChore(this.key);
        }

    }

    function empty() {
        var check = confirm("Are you sure you want to clear all chores?");
        if (check) {
            var again = confirm("Are you REALLY sure you want to clear all chores?");
            if (again) {
                var certain = confirm("Mom knows if you're deleting them without finishing.  You know this, right?");
                if (certain) {
                    localStorage.clear();
                    window.location.reload();
                } else {
                    alert("Smart move.")
                }
            } else {
                alert("I thought so.")
            }
        } else {
            alert("Good job!");
        }
    }


    // listeners
    addChore.addEventListener("click", validate);
    showChores.addEventListener("click", showAll);
    resetChores.addEventListener("click", empty);
    showChoresTop.addEventListener("click", showAll);
    resetChoresTop.addEventListener("click", empty);

});