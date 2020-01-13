//Use a switch statement to customize based on a lot of choices.
function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = " is a great color";
    switch (colors) {
        case "Red":
            color_output = "Red" + color_string;
            break;
        case "Yellow":
            color_output = "Yellow" + color_string;
            break;
        case "Green":
            color_output = "Green" + color_string;
            break;
        case "Blue":
            color_output = "Blue" + color_string;
            break;
        case "Pink":
            color_output = "Pink" + color_string;
            break;
        case "Purple":
            color_output = "Purple" + color_string;
            break;
       default:
           color_output = "Please enter a color exactly as written on the above listd.";
    }

    document.getElementById("output").innerHTML = color_output;
}

//Gives an array so you have to use [#] to select the specific element.  Using getElementsById()
function Hello_World_Function() {
    document.getElementsByClassName("click")[0].innerHTML = "That feels a lot better";
    document.getElementsByClassName("click")[1].innerHTML = "We are centered now!";

    for (var i = 0; i < document.getElementsByClassName("click").length; i++) {
        var A = document.getElementsByClassName("click");
        A[i].className += " text-center bg-dark";
        A[i].className = A[i].className.replace("text-dark","text-success");
    }
}



var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function drawCircle() {
    ctx.moveTo(50, 50);
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawSquare() {
    ctx.moveTo(150, 150);
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
}

function drawLinearGradient() {
    //Make a linear gradient from x1 y1 to x2 y2.
    var grd = ctx.createLinearGradient(0,0,500,400);

    grd.addColorStop(0, "red");
    grd.addColorStop(0.5, "green");
    grd.addColorStop(1, "blue");

    
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 500, 400);
}