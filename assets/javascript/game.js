$(document).ready(function() {
    var crystals = ["crystalOne","crystalTwo","crystalThree","crystalFour"];
    var targetScore = (Math.floor((Math.random()*120)+19));
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    // Start Game
    function initiateGame (){
        $("#targetScore").text("Target Score: " + targetScore);
        $("#userScore").text("Your Score: " + userScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }
    initiateGame();
    
    function restartGame (){
        targetScore = (Math.floor((Math.random()*120)+19));
        userScore = 0;
        $("#targetScore").text("Target Score: " + targetScore);
        $("#userScore").text("Your Score: " + userScore);
        $("#wins").text("Wins: " + wins);
        $("#losses").text("Losses: " + losses);
    }

    for (var i=0;i<crystals.length;i++){
        // div with individual id's
        var crystalValues = $("<button>");
        crystalValues.attr("id",crystals[i]);
        console.log(crystals[i]);
        $("#crystalValues").append(crystalValues);
        // adding the randomized number inside the div created above
        crystals[i] = (Math.floor((Math.random()*12)+1));
        console.log(crystals[i]);
        $(crystalValues).attr("value",crystals[i]);
        $(crystalValues).append(crystals[i]);
    }
    // When user clicks crystal with id crystalOne
    $("#crystalOne").on("click", function() {
        alert("You've clicked crystal one.");
        userScore += parseInt($(this).val())
        $("#userScore").text("Your Score: " + userScore);
        winOrLose();
    });
    // When user clicks crystal with id crystalTwo
    $("#crystalTwo").on("click", function() {
        alert("You've clicked crystal two.");
        userScore += parseInt($(this).val())
        $("#userScore").text("Your Score: " + userScore);
        winOrLose();
    });
    // When user clicks crystal with id crystalThree
    $("#crystalThree").on("click", function() {
        alert("You've clicked crystal three.");
        userScore += parseInt($(this).val())
        $("#userScore").text("Your Score: " + userScore);
        winOrLose();
    });
    // When user clicks crystal with id crystalFour
    $("#crystalFour").on("click", function() {
        alert("You've clicked crystal four.");
        userScore += parseInt($(this).val())
        $("#userScore").text("Your Score: " + userScore);
        winOrLose();
    });
    // User Score : Target Score results in win or loss
    function winOrLose (){
        if (userScore === targetScore){
            wins++
            $("#wins").text("Wins: " + wins);
            restartGame();
        }
        else if(userScore > targetScore){
            losses++
            $("#losses").text("Losses: " + losses);
            restartGame();
        }
    }
});