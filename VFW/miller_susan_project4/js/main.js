//
// Author: Susan R. Miller
// Course: VFW 1303
// Week 4
//

// DOM load check
window.addEventListener("DOMContentLoaded", function () {

// getElementById Function
    function $(x){
        var theElement = document.getElementById(x);
        return theElement;
    }

    // shortcut variables
    var addChore = $("addNew"),
        addChoreTop = $("addNewTop"),
        showChores = $("showAll"),
        showChoresTop = $("showAllTop"),
        resetChores = $("resetAll"),
        resetChoresTop = $("resetAllTop"),
        errorMsg = $("errors"),
        choreDoer = ["Select a Person", "Mom", "Papa", "Daughter"],
        dateOptions = ["Select a Due Date", "Today", "Tomorrow", "Future"],
        doneValue;

/* Create and populate chore types */
    function listDoers() {
        var selectLi = $("person"),
            makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "choredoer");
        for (var i = 0, j = choreDoer.length; i < j; i++) {
            var makeOption = document.createElement("option"),
                optText = choreDoer[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    listDoers(); // Makes the drop-down happen.
/* End create and populate chore types */

/* Create and populate date options */
    function listDates() {
        var selectLi = $("date"),
            makeSelect = document.createElement("select");
        makeSelect.setAttribute("id", "duedate");
        for (var i = 0, j = dateOptions.length; i < j; i++) {
            var makeOption = document.createElement("option"),
                optText = dateOptions[i];
            makeOption.setAttribute("value", optText);
            makeOption.innerHTML = optText;
            makeSelect.appendChild(makeOption);
        }
        selectLi.appendChild(makeSelect);
    }

    listDates(); // Makes the drop-down happen.
/* End create and populate date options */




// Date function
    function chooseDate() {
        if (setDate.value === "Today") {
        	$("datevalue").removeAttribute("value");
            var today = new Date(),
                todayMonth = (today.getMonth() + 1),
                todayDay = today.getDate(),
                todayYear = today.getFullYear(),
                todayDate = todayMonth + "/" + todayDay + "/" + todayYear;
                $("dateselect").style.display = "none";
                $("datevalue").setAttribute("value", todayDate);
            return todayDate;
        } else if (setDate.value === "Tomorrow") {
        	$("datevalue").removeAttribute("value");
            var tomorrow = new Date();
            tomorrow.setDate (tomorrow.getDate () + 1);
            var tomMonth = (tomorrow.getMonth() + 1),
                tomDay = tomorrow.getDate(),
                tomYear = tomorrow.getFullYear(),
                tomDate = tomMonth + "/" + tomDay + "/" + tomYear;
                $("dateselect").style.display = "none";
                $("datevalue").setAttribute("value", tomDate);
            return tomDate;
        } else if (setDate.value === "Future") {
        	$("datevalue").removeAttribute("value");
	            $("dateselect").style.display = "block";
	            $("future").addEventListener("change", function() {
	            	$("datevalue").setAttribute("value", $("future").value);
	            });
        }

    }



// Sets up function to check for value of selected radio buttons.
    function radioCheck(){
        var radios = document.forms[0].done;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked){
                doneValue = radios[i].value;
            }
        }
    }

// Toggles what shows when
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

// Validate
    function validate(e) {
        var getDoer = $("choredoer"),
            getName = $("chorename"),
            getDate = $("duedate");


        //Error Message Reset
	        errorMsg.innerHTML = "";

	        getDoer.style.border = "1px solid black";
	        getName.style.border = "1px solid black";
	        getDate.style.border = "1px solid black";
        //Error Messages
        var msgs = [];

        //Chore Doer Validation
        if(getDoer.value === "Select a Person"){
            var doerError = "Please select a person.";
            getDoer.style.border = "1px solid red";
            msgs.push(doerError);
        }

        //Chore Name Validation
        if(getName.value === ""){
            var nameError = "Please enter a chore name.";
            getName.style.border = "1px solid red";
            msgs.push(nameError);
        }


        //Due Date Validation mm/dd/yyyy
        if(getDate.value === "Select a Due Date") {
            var pickDate = "Please select a due date.";
            msgs.push(pickDate);
        } else if((getDate.value === "Future") && !($("datevalue").hasAttribute("value"))) {
        	var dateError = "Please select a valid date.";
            $("future").style.border = "1px solid red";
            msgs.push(dateError);

        }


        // Display errors if present
        if (msgs.length >= 1){
            for (var i = 0, j = msgs.length; i<j; i++) {
                var text = document.createElement("li");
                text.innerHTML = msgs[i];
                errorMsg.appendChild(text);
            }
            e.preventDefault();
            return false;
        //Save Chore if all is well.  Send key value through.
        } else {
            saveChore(this.key);
        }
    }

// Assures proper order of date
	function dateCheck() {
		var rawDate = $("datevalue").getAttribute("value");
		if (rawDate.charAt(4) === "-") {
			var brokenDate = rawDate.split("-");
			var reordered = brokenDate[1] + "/" + brokenDate[2] + "/" + brokenDate[0];
			$("datevalue").setAttribute("value", reordered)
		}
	}


// Saves chore
    function saveChore(key) {
        // Check for existing key, set one if needed
        var id;
        if(!key){
            id = Math.floor(Math.random()*1000000);
        } else {
            id = key;
        }
        // Gather and store values as object with form label and value
        radioCheck();
        dateCheck();
        var item = {};
            item.chore = ["Chore Name: ", $("chorename").value];
            item.who = ["Person Responsible: ", $("choredoer").value];
            item.date = ["Date Due: ", $("datevalue").getAttribute("value")];
            item.effort = ["Level of Difficulty: ", $("difficulty").value];
            item.done = ["Is it Done? ", doneValue];

        // Save to localStorage
        localStorage.setItem(id, JSON.stringify(item));
        alert("Your chore has been saved!");
    }

// Shows all chores
    function showAll() {   // want to work on how CSS outputs this so each chore is in own div class item
        if (localStorage.length >= 1) {
        // Replaces form with chores
            toggleControls("on");

        // Creates newContainer div id = data and appends to document
            var newContainer = document.createElement("div");
            newContainer.setAttribute("id", "data");
            document.body.appendChild(newContainer);

        // Creates ordered list and appends to newContainer
            var olList = document.createElement("ol");
            newContainer.appendChild(olList);

        // Assures the data id where chores are displayed is toggled on
            $("data").style.display = "block";

        // Steps through each store in localStorage
            for (var i=0, j=localStorage.length; i<j; i++) {

            // Creates li for each individual chore
                var olBullet = document.createElement("li");
                olBullet.setAttribute("class", "item");
                olList.appendChild(olBullet);

            // Gets data fro localStorage back into an object
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                var item = JSON.parse(value);

            // Creates new ul so each element of chore will be on own line
                var itemize = document.createElement("ul");
                olBullet.appendChild(itemize);

            // Creates li for edit and delete links for each item
                var itemLinks = document.createElement("li");

                getImage(item.who[1], itemize);

                // Itemizes specific data elements of chore
                    for (var m in item) {

                    // Creates li for each element of chore
                        var newItem = document.createElement("li");
                        itemize.appendChild(newItem);

                    // Reads and fills in li with data, then appends to ul
                        var itemValue = item[m][0] + " " + item[m][1];
                        newItem.innerHTML = itemValue;
                        itemize.appendChild(itemLinks);
                    }

            // Adds edit and delete items to end of individual chore
                makeItemLinks(key, itemLinks);
            }

    // Returns alert if localStorage is empty
        } else {
            alert("There is no data in localStorage so default data was added.");
            insertJSON();
        }
    }

// Adds Image

	function getImage(doerName, itemize) {
		var imgLi = document.createElement("li");
		itemize.appendChild(imgLi);
		var newImg = document.createElement("img"),
			setSrc = newImg.setAttribute("src", "images/" + doerName + ".png");
		imgLi.appendChild(newImg);

	}


// Autofill with JSON data
	function insertJSON() {
		// store info from JSON.js
		for (var n in json) {
			var id = Math.floor(Math.random()*1000000);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	}

// Dynamically creates item links to edit and delete
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

// Edit chore
    function editChore(){

    // Get Data from localStorage
        var value = localStorage.getItem(this.key);
        var item = JSON.parse(value);

    // Show form and not chore list
        toggleControls("off");

    // Populate for with existing data
        $("chorename").value = item.chore[1];
        $("choredoer").value = item.who[1];
        $("duedate").value = item.date[1];
        $("difficulty").value = item.effort[1];

    // Loop required to determine which (if any) radios were checked
        var radios = document.forms[0].done;
        for (var i = 0; i<radios.length; i++) {
            if (radios[i].value === "no" && item.done[1] === "no") {
                radios[i].setAttribute("checked", "checked");
            } else if (radios[i].value === "yes" && item.done[1] === "yes") {
                radios[i].setAttribute("checked", "checked");
            }
        }

    // Switches content and function of Add Chore button
        addChore.removeEventListener("click", saveChore);
        addChore.innerHTML = "Save Changes";
        var editSubmit = addChore;

    // Sends through validation
        editSubmit.addEventListener("click", validate);

    // Assures key gets passed through
        editSubmit.key = this.key;
    }

// Delete specific chore
    function deleteChore() {

    // Checks which radio button is selected
        radioCheck();

    // Assures chore has been done and confirms deletion
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
                    alert("That's okay.  Let me know when you're ready to delete it.");
                }
            }
    // Doesn't allow deletion if chore not marked as completed
        } else {
            alert("Oops!  Looks like you're not done with this chore yet!\nYou can't delete it quite yet.");
        }
    }

// Delete all chores - empty local.storage
    function empty() {

    // Insistent confirmation of chore deletion
        var check = confirm("Are you sure you want to clear all chores?");
        if (check) {
            var again = confirm("Are you REALLY sure you want to clear all chores?");
            if (again) {
                var certain = confirm("Mom knows if you're deleting them without finishing.  You know this, right?");
                if (certain) {
                    localStorage.clear();
                    window.location.reload();

    // Responses to not chosing to delete
                } else {
                    alert("Smart move.");
                }
            } else {
                alert("I thought so.");
            }
        } else {
            alert("Good job!");
        }
    }


// Listeners
    addChore.addEventListener("click", validate);
    showChores.addEventListener("click", showAll);
    resetChores.addEventListener("click", empty);
    showChoresTop.addEventListener("click", showAll);
    resetChoresTop.addEventListener("click", empty);
    var setDate = $("duedate");
    setDate.addEventListener("change", chooseDate);

}); /* Closes DOM load check function */