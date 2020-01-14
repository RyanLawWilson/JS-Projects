//When the user clicks a character, text is changed, image is changed, and active button may change.
function displayChoice(character) {
    //Changes text to display user's choice
    var characterDescription = character.getAttribute("data-character-type");
    document.getElementById("characterSelectText").innerHTML = "You chose " + character.innerHTML + " - " + characterDescription;
    
    //Turns off the active effect on all of the buttons
    var characterArray = document.getElementsByClassName("character");
    var numOfCharacters = characterArray.length;
    for (var i = 0; i < numOfCharacters; i++) {
        characterArray[i].className = characterArray[i].className.replace(" active", "");
    }

    //Changes image based on user's choice
    switch (character.innerHTML) {
        case "Jigglypuff":
            document.getElementById("characterImage").src = "images/jigglypuff.jpg";
            document.getElementById("jigglypuff").className += " active";
            break;
        case "King Dedede":
            document.getElementById("characterImage").src = "images/kingdedede.jpg";
            document.getElementById("kingdedede").className += " active";
            break;
        case "King K. Rool":
            document.getElementById("characterImage").src = "images/kingkrool.jpg";
            document.getElementById("kingkrool").className += " active";
            break;
        default:
            document.getElementById("characterImage").src = "images/unknownCharacter.jpg";
    }
}