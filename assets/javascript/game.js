//Starting with Pseudocode

//need to have jQuery set up so that the application runs/initializes when document is loaded (document).ready())
$(document).ready(function () {

    //define global variables (wins, losses, user's value, target value)

    var wins = 0;
    var winCount = 0;
    var losses = 0;
    var lossCount = 0;
    var userValue = 0;
    var targetNumber;
    var crystalValue1;
    var crystalValue2;
    var crystalValue3;
    var crystalValue4;

    //function to initialize (target value, crystals' values,)?

    //select random number (math.floor) to be target value & show value (.append? .html?)

    var targetNumber = Math.floor(Math.random() * 100 + 10);
    $("#random").html(targetNumber);

    //select random number (math.floor) to be value of each crystal (define 4 variables for corresponding crystals to
    //hold values)

    var crystalValue1 = Math.floor(Math.random() * 10 + 10);
    console.log(crystalValue1);
    var crystalValue2 = Math.floor(Math.random() * 10 + 10);
    console.log(crystalValue2);
    var crystalValue3 = Math.floor(Math.random() * 10 + 10);
    console.log(crystalValue3);
    var crystalValue4 = Math.floor(Math.random() * 10 + 10);
    console.log(crystalValue4);


    //function to reset game (zero user's value, new target value, new crystals' values, )

    function resetGame() {
        var targetNumber = Math.floor(Math.random() * 100 + 10);
        $("#random").html(targetNumber);
        var crystalValue1 = Math.floor(Math.random() * 10 + 10);
        var crystalValue2 = Math.floor(Math.random() * 10 + 10);
        var crystalValue3 = Math.floor(Math.random() * 10 + 10);
        var crystalValue4 = Math.floor(Math.random() * 10 + 10);
        var userValue = 0;
        $("#userNumber").html(userValue);
    }

    //function (.on("click", function()) for the crystals (need to add crystal's number to the user's value, update
    //user's value on game screen,)

    //On click event for crystals
    $('#crystal1').on("click", function () {
        userValue = userValue + crystalValue1;
        console.log("New userTotal= " + userValue);
        //Sets win/lose conditions
        if (userValue == targetNumber) {
            alert("Nice! You won!");
            wins++;
            $("#winCount").html(wins);
            resetGame(); 
        }
        else if (userValue > targetNumber) {
            alert("Nice! You wo...wait...sorry, you lost...try again!");
            losses++;
            $("#lossCount").html(losses);
            resetGame();
        }
    });


    //create win/lose conditions (if/else)
    // if (userValue == targetNumber) {
    //     alert("Nice! You won!");
    //     wins++;
    //     $("#winCount").html(wins);
    // }
    // else if (userValue > targetNumber) {
    //     alert("Nice! You wo...wait...sorry, you lost...try again!");
    //     losses++;
    //     $("#lossCount").html(losses);
    //     //run reset game function;
    // }


})