function validateForm() {
    var firstName1 = document.getElementById("fName").value;
    var lastName1 = document.getElementById("lName").value;
    var email1 = document.getElementById("email").value;

    if (firstName1 == "" /*|| firstName1.search("[][!\"#$%&'()*+,./:;<=>?@\^_`{|}~-0-9]") == -1*/) {
        document.getElementById("testText").innerHTML = "INVALID";
        alert("You must have a valid first name!");
        return false;
    }

    if (lastName1 == "" /*|| lastName1.search("[][!\"#$%&'()*+,./:;<=>?@\^_`{|}~-][0-9]") == -1*/) {
        document.getElementById("testText").innerHTML = "INVALID";
        alert("You must have a valid last name!");
        return false;
    }

    if (email1 == "" /*|| email1.search("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])") == -1*/) {
        document.getElementById("testText").innerHTML = "INVALID";
        alert("You must have a valid email!");
        return false;
    }



    //OR, the W3schools way



    //Retruns a 2-dimensional array of all of the forms on the page.
    var firstName2 = document.forms["contactForm"]["fname"].value;
    var lastName2 = document.forms["contactForm"]["fname"].value;
    var email2 = document.forms["contactForm"]["fname"].value;
}