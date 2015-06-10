//Below is all the code needed to have a slick Form Validation. This file consists of 9 separate functions, each targetting their respective field.
//This was done to allow the errors to appear as the user enters their data using the "onchange" element attribute before they submit their form, saving 
//time for the user on correcting their mistakes.

//After the 9 functions, there will be another function which is the master function consisting of the exact code from each of the 9 functions to check
//the form all at once using the "onsubmit" element attribute in the <form> tags.

//At the bottom, there will be one final function which clears all the shown errors upon a form reset so the user may start afresh.

//I have chosen to create a separate JavaScript file in order to maintain a tidy coding on the each of the HTML pages,
//and to immitate the CSS etiquette of efficiency; "one file for all pages to call on."




var retext = /^[a-zA-Z-]+$/;     //regex variable to check if text field only contain alpha characters.

var reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   //regex variable to check if the email field consists of all the characters needed for a valid email.

var rephonenumber = /^(\d{10,11})+$/;   //regex variable to check if phonenumberephone field consists of only numbers and from 10 - 11 characters.

var callback = /^([01]\d|2[0-3]):?([0-5]\d)|\s*anytime\s*$/;     //regex variable to check whether the user input is either a time (in 24 hours) or the string "anytime".

var redate = /((0)[1-9]|(1)[0-9]|(2)[0-9]|(3)[0-1])[\/](0[1-9]|1[012])[\/](20)(1)[4-7]/;     //regex varable to check if the date is in the format DD/MM/YYYY and only accepts years 2014-2017.

function checkFirstName() {     //I have used separate functions in order for the "onchange" event to work independantly depending on the field changed.
    var valid = true;   //Setting the variable "valid" to the boolean data type true.

    if (!retext.test(document.bookingsform.firstname.value)) {      //Using if statement which tests the user's input and see if it doesn't match the regex variable retext - if argument is true, it proceeds to the code within the braces
        document.bookingsform.firstname.style.border = "1px solid red";     //Targetting the border style of input named "name" and giving it a red border to show the error.
        document.getElementById("firsttext").innerHTML = "Invalid first name.";   //Targets the div element id'd "text" and displays the text "Invalid text."
        document.bookingsform.firstname.title = "Please enter your first name.";
        document.getElementById("firsttext").style.display = "block";       //Sets the display style of the div to block.
        valid = false;      //Changes the value of the variable to false.
    } else {
        document.bookingsform.firstname.style.border = "1px inset #EBE9ED";     //If the user's input DOES match the regex variable retext it will take away the red border and the error message.
        document.bookingsform.firstname.style.borderRadius = "2px";
        document.getElementById("firsttext").style.display = "none";
    }
}


//Exact same function as above, except targetting the Last Name field rather than the First Name.

function checkLastName() {      
    var valid = true;      

    if (!retext.test(document.bookingsform.lastname.value)) {       
        document.bookingsform.lastname.style.border = "1px solid red";      
        document.getElementById("lasttext").innerHTML = "Invalid last name.";        
        document.bookingsform.lastname.title = "Please enter your last name.";
        document.getElementById("lasttext").style.display = "block";        
        valid = false;       
    } else {
        document.bookingsform.lastname.style.border = "1px inset #EBE9ED";      
        document.bookingsform.lastname.style.borderRadius = "2px";
        document.getElementById("lasttext").style.display = "none";
    }
}


//Exact same function below, except using the appropriate RegEx for the Email field.

function checkEmail() {
    var valid = true;

    if (!reEmail.test(document.bookingsform.email.value)) {
        document.bookingsform.email.style.border = "1px solid red";
        document.getElementById("emailwarn").innerHTML = "Invalid email.";
        document.bookingsform.email.title = "Please enter an email address.";
        document.getElementById("emailwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.email.style.border = "1px inset #EBE9ED";
        document.bookingsform.email.style.borderRadius = "2px";
        document.getElementById("emailwarn").style.display = "none";
    }
}


//Using the RegEx for checking phone numbers.

function checkTel() {
    var valid = true;

    if (!rephonenumber.test(document.bookingsform.phonenumber.value)) {
        document.bookingsform.phonenumber.style.border = "1px solid red";
        document.getElementById("phonenumberwarn").innerHTML = "Invalid phone number.";
        document.bookingsform.phonenumber.title = "Please enter a phone number.";
        document.getElementById("phonenumberwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.phonenumber.style.border = "1px inset #EBE9ED";
        document.bookingsform.phonenumber.style.borderRadius = "2px";
        document.getElementById("phonenumberwarn").style.display = "none";
    }
}


//Using the RegEx which checks for a time or the specific string "anytime".

function checkCallTime() {
    var valid = true;

    if (!callback.test(document.bookingsform.contactconvenience.value)) {
        document.bookingsform.contactconvenience.style.border = "1px solid red";
        document.getElementById("callbackwarn").innerHTML = "Enter a time in the format HH:MM or type \"anytime\".";
        document.bookingsform.contactconvenience.title = "Please enter a time in the format HH:MM or type \"anytime\".";
        document.getElementById("callbackwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.contactconvenience.style.border = "1px inset #EBE9ED";
        document.bookingsform.contactconvenience.style.borderRadius = "2px";
        document.getElementById("callbackwarn").style.display = "none";
    }
}

function checkRadio() {
    var valid = true;
    var radios = document.getElementsByName("smoking");     //Setting the var "radios" to the radio buttons named smoking.

    if (!(radios[0].checked || radios[1].checked)) {     //Checks whether either the first or second radio button is checked or not.
        document.getElementById("radiowarn").innerHTML = "Please select either Smoking or Non-Smoking.";    //If not, it displays the same error alert as the above functions with an appropriate comment.
        document.getElementById("radiowarn").style.display = "block";
        valid = false;
    } else {
        document.getElementById("radiowarn").style.display = "none";     //If it does, then errors are hidden.
    }
}

//The below function checks whether the date input is current, future or the past.
//The function will return false if the date is in the past and will only accept today or the future.

function isFutureDate(idate) {      //The parameter of this function is the "idate" variable, which is defined in the next function down.
    var today = new Date(), idateParts = idate.split("/");      //Two variables defined. "today" retrieves the current date and time using the Date library. "idateParts" removes the "/" from the input date.
    today.setHours(12, 0, 0, 0);    //This normalises the time so that the function in theory ignores the time aspect of the Date library.

    idate = new Date(idateParts[2], idateParts[1] - 1, idateParts[0], 12, 0, 0, 0).getTime();   //The variable "idate" is then reassigned to a value of the split version of the original "idate" value.
    return (idate - today) >= 0 ? true : false;     //Boolean testing. Questioning whether the value of "idate" - "today" is more than or equal to 0. If it's true, then it will return true. If false, it returns false.
}

//This function checks if the date input follows the format I want by testing it against the 
//"redate" RegEx. If it passes the format it will then call on the above function
//and then test the input to see if it's a valid date from either today or in the future.
//It will then either show the warning like the other functions or not.

function checkDate() {
    var valid = true;
    var idate = document.getElementById("date");

    if (redate.test(idate.value)) {
        if (isFutureDate(idate.value)) {    //The paramter is the value of the variable "idate".
            idate.style.border = "1px inset #EBE9ED";
            idate.style.borderRadius = "2px";
            document.getElementById("datewarn").style.display = "none";
        } else {
            idate.style.border = "1px solid red";
            document.getElementById("datewarn").innerHTML = "Enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
            idate.title = "Please enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
            document.getElementById("datewarn").style.display = "block";
            valid = false;
        }
    } else {
        idate.style.border = "1px solid red";
        document.getElementById("datewarn").innerHTML = "Enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
        idate.title = "Please enter a date in the format DD/MM/YYYY. ";
        document.getElementById("datewarn").style.display = "block";
        valid = false;
    }
}

function checkTime() {
    var valid = true;
    var e = document.getElementById("time");     //Sets the random variable "e" to the select list ID'd "time".
    var strUser = e.options[e.selectedIndex].value;     //Sets the random variable "strUser" to the value of select item in the list.

    if (strUser == 0) {     //If the value of the selected item is equal to 0 then the form will show an error similar to all the other functions.
        e.style.border = "1px solid red";
        document.getElementById("timewarn").innerHTML = "Please select a time.";
        e.title = "Please select a time.";
        document.getElementById("timewarn").style.display = "block";
        valid = false;
    } else {     //If the value is more than 0 it will hide the error.
        e.style.border = "1px inset #EBE9ED";
        e.style.borderRadius = "2px";
        document.getElementById("timewarn").style.display = "none";
    }
}


//Exact same function as above used for the Party Size list, except the random variable "e" is replaced with "f" and "strUser" with "strUser1".

function checkPartySize() {
    var valid = true;
    var f = document.getElementById("partysize");
    var strUser1 = f.options[f.selectedIndex].value;

    if (strUser1 == 0) {
        f.style.border = "1px solid red";
        document.getElementById("partywarn").innerHTML = "Please select your party size.";
        f.title = "Please select your party size.";
        document.getElementById("partywarn").style.display = "block";
        valid = false;
    } else {
        f.style.border = "1px inset #EBE9ED";
        f.style.borderRadius = "2px";
        document.getElementById("partywarn").style.display = "none";
    }
}


//Below is a master function which contains an exact copy of all the functions above to be called up during an "onsubmit" event. This will process the form all at once and will show all errors at once.
//However, there are slight additions to the code to aid with the presenting of form data on the resulting "Thank You" page.

function checkForm() {
    var valid = true;
    var radios = document.getElementsByName("smoking");     //Restablishing the variable "radios" since this variable was called in a function and doesn't exist until that function is called.
    var smoking = "Smoking";    //Setting the variables "smoking" and "nonSmoking" to their string data type equivalent.
    var nonSmoking = "Non-smoking";
    var check = document.getElementsByName("dietarySpecific");
    
    //The below variables will just consist of appropriate strings in which
    //the checkbox value code will call upon.

    var nut = "Nut Allergy";
    var glu = "Gluten Allergy";
    var lac = "Lactose Intolerance";
    var other = "Other; Specified in Special Instructions";
    var nutGlu = nut + glu;
    var none = "";

    if (!retext.test(document.bookingsform.firstname.value)) {
        document.bookingsform.firstname.style.border = "1px solid red";
        document.getElementById("firsttext").innerHTML = "Invalid first name.";
        document.bookingsform.firstname.title = "Please enter your first name.";
        document.getElementById("firsttext").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.firstname.style.border = "1px inset #EBE9ED";
        document.bookingsform.firstname.style.borderRadius = "2px";
        document.getElementById("firsttext").style.display = "none";
        sessionStorage.setItem("First Name", document.bookingsform.firstname.value);     //During the "onsubmit" event, this function will check the form. If each field is validated correctly, the input will then be stored in the HTML5 feature sessionStorage.
    }                                                                                    //sessionStorage stores data in "Items" and will only be stored for the browser session. If the browser is closed, the data is wiped.

    if (!retext.test(document.bookingsform.lastname.value)) {      
        document.bookingsform.lastname.style.border = "1px solid red";      
        document.getElementById("lasttext").innerHTML = "Invalid last name.";        
        document.bookingsform.lastname.title = "Please enter your last name.";
        document.getElementById("lasttext").style.display = "block";        
        valid = false;      
    } else {
        document.bookingsform.lastname.style.border = "1px inset #EBE9ED";      
        document.bookingsform.lastname.style.borderRadius = "2px";
        document.getElementById("lasttext").style.display = "none";
        sessionStorage.setItem("Last Name", document.bookingsform.lastname.value);     //Storing the input for the Last Name input into an item called "Last Name".
    }

    if (!reEmail.test(document.bookingsform.email.value)) {
        document.bookingsform.email.style.border = "1px solid red";
        document.getElementById("emailwarn").innerHTML = "Invalid email.";
        document.bookingsform.email.title = "Please enter an email address.";
        document.getElementById("emailwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.email.style.border = "1px inset #EBE9ED";
        document.bookingsform.email.style.borderRadius = "2px";
        document.getElementById("emailwarn").style.display = "none";
        sessionStorage.setItem("Email", document.bookingsform.email.value);     //Follows the same procedure as above.
    }

    if (!rephonenumber.test(document.bookingsform.phonenumber.value)) {
        document.bookingsform.phonenumber.style.border = "1px solid red";
        document.getElementById("phonenumberwarn").innerHTML = "Invalid phone number.";
        document.bookingsform.phonenumber.title = "Please enter a phone number.";
        document.getElementById("phonenumberwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.phonenumber.style.border = "1px inset #EBE9ED";
        document.bookingsform.phonenumber.style.borderRadius = "2px";
        document.getElementById("phonenumberwarn").style.display = "none";
        sessionStorage.setItem("Phone Number", document.bookingsform.phonenumber.value);
    }

    if (!callback.test(document.bookingsform.contactconvenience.value)) {
        document.bookingsform.contactconvenience.style.border = "1px solid red";
        document.getElementById("callbackwarn").innerHTML = "Enter a time in the format HH:MM or type \"anytime\".";
        document.bookingsform.contactconvenience.title = "Please enter a time in the format HH:MM or type \"anytime\".";
        document.getElementById("callbackwarn").style.display = "block";
        valid = false;
    } else {
        document.bookingsform.contactconvenience.style.border = "1px inset #EBE9ED";
        document.bookingsform.contactconvenience.style.borderRadius = "2px";
        document.getElementById("callbackwarn").style.display = "none";
        sessionStorage.setItem("When can we call you?", document.bookingsform.contactconvenience.value);
    }

    if (!(radios[0].checked || radios[1].checked)) {
        document.getElementById("radiowarn").innerHTML = "Please select either Smoking or Non-Smoking.";
        document.getElementById("radiowarn").style.display = "block";
        valid = false;
    } else if (radios[0].checked) {
        document.getElementById("radiowarn").style.display = "none";
        sessionStorage.setItem("Smoking", smoking);     //Storing data from radio buttons is different. You have to check which value has been selected otherwise the value is null, hence the extra Else If statements for this code.
    } else if (radios[1].checked) {                     //If the value is 1 (the second radio button)...
        document.getElementById("radiowarn").style.display = "none";
        sessionStorage.setItem("Smoking", nonSmoking);      //sessionStorage will create an Item called "Smoking" and will store the variable "nonSmoking" delcared at the beginning of the function.
    }                                                       //If the value is 0 (the first radio button), it will instead store the variable "smoking" wich was declared at the beginning of the function.


    //The below code doesn't validate whether the check boxes have been ticked or not, it checks which values have been ticked.
    //It consists of all the possible combinations that a user could choose. Whether it'll be all four options or just the one.
    //The combinations are listed in priority, i.e. 4 ticked boxes takes precedence over 3 ticked boxes.
    //Finding the value of check boxes is the exact same as radio buttons, i.e 0 is the first check box, 1 is the second...

    if (check[0].checked && check[1].checked && check[2].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + glu + ", " + lac + ", " + other));     //If the user chooses all 4 options, the item "Allergy" will store a concatenation of all
    } else if (check[0].checked && check[1].checked && check[2].checked) {                     //4 variables delcared above relating to the check box field.
        sessionStorage.setItem("Allergy", (nut + ", " + glu + ", " + lac));
    } else if (check[0].checked && check[1].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + glu + ", " + other));
    } else if (check[0].checked && check[2].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + lac + ", " + other));
    } else if (check[1].checked && check[2].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (glu + ", " + lac + ", " + other));     //The same as above but with a concatenation of the 3 respective variables.
    } else if (check[0].checked && check[1].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + glu));
    } else if (check[0].checked && check[2].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + lac));
    } else if (check[0].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (nut + ", " + other));
    } else if (check[1].checked && check[2].checked) {
        sessionStorage.setItem("Allergy", (glu + ", " + lac));
    } else if (check[1].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (glu + ", " + other));
    } else if (check[2].checked && check[3].checked) {
        sessionStorage.setItem("Allergy", (lac + ", " + other));
    } else if (check[0].checked) {
        sessionStorage.setItem("Allergy", nut);
    } else if (check[1].checked) {
        sessionStorage.setItem("Allergy", glu);
    } else if (check[2].checked) {
        sessionStorage.setItem("Allergy", lac);
    } else if (check[3].checked) {
        sessionStorage.setItem("Allergy", other);
    } else {
        sessionStorage.setItem("Allergy", none);
    }

    var idate = document.getElementById("date");

    if (redate.test(idate.value)) {
        if (isFutureDate(idate.value)) {
            idate.style.border = "1px inset #EBE9ED";
            idate.style.borderRadius = "2px";
            document.getElementById("datewarn").style.display = "none";
            sessionStorage.setItem("Date", idate.value);
        } else {
            idate.style.border = "1px solid red";
            document.getElementById("datewarn").innerHTML = "Enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
            idate.title = "Please enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
            document.getElementById("datewarn").style.display = "block";
            valid = false;
        }
    } else {
        idate.style.border = "1px solid red";
        document.getElementById("datewarn").innerHTML = "Enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
        idate.title = "Please enter a date in the format DD/MM/YYYY. Make sure it's today or the future.";
        document.getElementById("datewarn").style.display = "block";
        valid = false;
    }

    var e = document.getElementById("time");
    var strUser = e.options[e.selectedIndex].value;

    if (strUser == 0) {
        e.style.border = "1px solid red";
        document.getElementById("timewarn").innerHTML = "Please select a time.";
        e.title = "Please select a time.";
        document.getElementById("timewarn").style.display = "block";
        valid = false;
    } else {
        e.style.border = "1px inset #EBE9ED";
        e.style.borderRadius = "2px";
        document.getElementById("timewarn").style.display = "none";
        sessionStorage.setItem("Time", document.getElementById("time").value);
    }

    var f = document.getElementById("partysize");
    var strUser1 = f.options[f.selectedIndex].value;

    if (strUser1 == 0) {
        f.style.border = "1px solid red";
        document.getElementById("partywarn").innerHTML = "Please select your party size.";
        f.title = "Please select your party size.";
        document.getElementById("partywarn").style.display = "block";
        valid = false;
    } else {
        f.style.border = "1px inset #EBE9ED";
        f.style.borderRadius = "2px";
        document.getElementById("partywarn").style.display = "none";
        sessionStorage.setItem("Party Size", document.getElementById("partysize").value);
    }

    sessionStorage.setItem("Special", document.getElementById("specialInstructions").value);

    return valid;       //When the form is submitted, this function will check it and test if the value for "valid" is true. If it's false, then the form will not proceed.
}


//Below is a list of variables that contain the values that the Items contain. This is used for printing out the data on the Thank You page.

var fName = sessionStorage.getItem("First Name");     //getItem retrieves the previous created Item I've created by calling on the Item's name.
var lName = sessionStorage.getItem("Last Name");      //The value of this item is then stored in the variable I have created.
var email = sessionStorage.getItem("Email");     //I then call on these variables on the Thank You html file.
var pNumber = sessionStorage.getItem("Phone Number");
var contactCon = sessionStorage.getItem("When can we call you?");
var diet = sessionStorage.getItem("Allergy");
var smoke = sessionStorage.getItem("Smoking");
var date = sessionStorage.getItem("Date");
var time = sessionStorage.getItem("Time");
var partySize = sessionStorage.getItem("Party Size");
var special = sessionStorage.getItem("Special");

//The function below just changes the style of all the inputs from the red back to normal.
//It will set the error message display style from "block" to "none".
//When the user presses reset the "onreset" attribute will call this function and clean the
//errors so the user may start afresh.

function clearForm() {
    document.bookingsform.firstname.style.border = "1px inset #EBE9ED";
    document.bookingsform.firstname.style.borderRadius = "2px";
    document.bookingsform.lastname.style.border = "1px inset #EBE9ED";
    document.bookingsform.lastname.style.borderRadius = "2px";
    document.getElementById("firsttext").style.display = "none";
    document.getElementById("lasttext").style.display = "none";
    document.bookingsform.email.style.border = "1px inset #EBE9ED";
    document.bookingsform.email.style.borderRadius = "2px";
    document.getElementById("emailwarn").style.display = "none";
    document.bookingsform.phonenumber.style.border = "1px inset #EBE9ED";
    document.bookingsform.phonenumber.style.borderRadius = "2px";
    document.getElementById("phonenumberwarn").style.display = "none";
    document.bookingsform.contactconvenience.style.border = "1px inset #EBE9ED";
    document.bookingsform.contactconvenience.style.borderRadius = "2px";
    document.getElementById("callbackwarn").style.display = "none";
    document.getElementById("radiowarn").style.display = "none";
    document.getElementById("date").style.border = "1px inset #EBE9ED";
    document.getElementById("date").style.borderRadius = "2px";
    document.getElementById("datewarn").style.display = "none";
    document.getElementById("time").style.border = "1px inset #EBE9ED";
    document.getElementById("time").style.borderRadius = "2px";
    document.getElementById("timewarn").style.display = "none";
    document.getElementById("partysize").style.border = "1px inset #EBE9ED";
    document.getElementById("partysize").style.borderRadius = "2px";
    document.getElementById("partywarn").style.display = "none";
}
