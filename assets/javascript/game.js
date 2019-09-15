var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function () {
    $(".crystals").empty();
    random_result = Math.floor((Math.random() * 99) + 19);
    $("#result").html("Random Result: " + random_result);
    
    for (var i = 0; i < 4; i++) {

        var random = Math.floor((Math.random() * 11) + 1);
        

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random

        });
        crystal.html(random);
        $(".crystals").append(crystal);



    }
    $("#previous").html("Total Score: " + previous);

}

startGame();


$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));
    previous += num;
    $("#previous").html("Total Score: " + previous);

    if (previous > random_result) {
        alert("You Lost!");
        lost++;
        $("#lost").html(lost);

        previous=0;
        $("#previous").html("Total Score: " + previous);
        startGame();

    }
    else if (previous === random_result) {
        alert("You Win!");
        win++;
        $("#win").html(win);
        previous=0;
        $("#previous").html("Total Score: " + previous);
        startGame();
    }
    console.log(previous);


})

//Pseudocode

//A game with 4 crystals and a random total score
//total score will be between 19-120
//Every crystal needs to have a random number assigned to it (1-12)

//A new random number should be generated every single time user wins or loses

//When clicking any crystal, it should add with the previous result until it hits/passes the total score
//If it is not equal, the game resets, and we increment the loss counter
//if it is equal, increment the win counter