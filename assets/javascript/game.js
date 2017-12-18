$(document).ready(function () {

    var start = new Audio("assets/audio/whip.wav");
    start.play();
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

    var targetNumber = Math.floor(Math.random() * 101 + 19);
    $("#random").html(targetNumber);

    var crystalValue1 = Math.floor(Math.random() * 10 + 1);
    console.log(crystalValue1);
    var crystalValue2 = Math.floor(Math.random() * 10 + 1);
    console.log(crystalValue2);
    var crystalValue3 = Math.floor(Math.random() * 10 + 1);
    console.log(crystalValue3);
    var crystalValue4 = Math.floor(Math.random() * 10 + 1);
    console.log(crystalValue4);


    //function to reset game (zero user's value, new target value, new crystals' values, )

    function resetGame() {
        targetNumber = Math.floor(Math.random() * 101 + 19);
        $("#random").html(targetNumber);
        crystalValue1 = Math.floor(Math.random() * 10 + 1);
        crystalValue2 = Math.floor(Math.random() * 10 + 1);
        crystalValue3 = Math.floor(Math.random() * 10 + 1);
        crystalValue4 = Math.floor(Math.random() * 10 + 1);
        userValue = 0;
        $("#userNumber").html(userValue);
    }

    //function (.on("click", function()) for the crystals (need to add crystal's number to the user's value, update
    //user's value on game screen,)
    $('#crystal1').on("click", function () {
        var click = new Audio("assets/audio/crystals.mp3");
        click.play();
        userValue = userValue + crystalValue1;
        $('#userNumber').html(userValue);
        check();
    });

    $('#crystal2').on("click", function () {
        var click = new Audio("assets/audio/crystals.mp3");
        click.play();
        userValue = userValue + crystalValue2;
        $('#userNumber').html(userValue);
        check();
    });

    $('#crystal3').on("click", function () {
        var click = new Audio("assets/audio/crystals.mp3");
        click.play();
        userValue = userValue + crystalValue3;
        $('#userNumber').html(userValue);
        check();
    });

    $('#crystal4').on("click", function () {
        var click = new Audio("assets/audio/crystals.mp3");
        click.play();
        userValue = userValue + crystalValue4;
        $('#userNumber').html(userValue);
        check();
    });


    //create win/lose conditions (if/else)
    function check() {
        if (userValue == targetNumber) {
            var win = new Audio("assets/audio/indy.mp3");
            win.play();
            alert("You have chosen...wisely");
            wins++;
            $("#winCount").html(wins);
            resetGame();
        }
        else if (userValue > targetNumber) {
            var lose = new Audio("assets/audio/poorly.mp3");
            lose.play();
            alert("You have chosen...poorly");
            losses++;
            $("#lossCount").html(losses);
            resetGame();
        }
    }
})