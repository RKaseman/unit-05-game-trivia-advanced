
$(document).ready(function () {

    // image array
    var images = [ 
        "./assets/images/question-mark-sm.png",
        "./assets/images/acc53540f78.jpg",
        "./assets/images/belly-top-10.jpg",
        "./assets/images/cdc1b37b713a50e13a83d2ae6291ef16.jpg",
        "./assets/images/Cocteau Twins_header_0.jpg",
        "./assets/images/Medicine+1.jpg",
        "./assets/images/MI0001332907.jpg",
        "./assets/images/MI0004411418.jpg",
        "./assets/images/MV5BZ-smaller.jpg",
        "./assets/images/Pale-Saints-r01.jpg",
        "./assets/images/the-sundays.jpeg",
        "./assets/images/x.jpg",
        "./assets/images/Slowdive1-1024x682.jpg"
        ];

    // quiz Array
    var quiz = [
        {
            displayArray: ["Name", "That", "Band"]
        },
        {
            displayArray: ["The Jesus and Mary Chain", "My Bloody Valentine", "Lush"],
            theAnswer: 2
        },
        {
            displayArray: ["Belly", "Medicine", "Cocteau Twins"],
            theAnswer: 1
        },
        {
            displayArray: ["Mazzy Star", "The Sundays", "Lush"],
            theAnswer: 3
        },
        {
            displayArray: ["My Bloody Valentine", "Cocteau Twins", "Pale Saints"],
            theAnswer: 2
        },
        {
            displayArray: ["Lush", "Medicine", "Belly"],
            theAnswer: 2
        },
        {
            displayArray: ["Throwing Muses", "My Bloody Valentine", "Belly"],
            theAnswer: 1
        },
        {
            displayArray: ["Pale Saints", "Medicine", "Mazzy Star"],
            theAnswer: 3
        },
        {
            displayArray: ["Throwing Muses", "The Jesus and Mary Chain", "The Sundays"],
            theAnswer: 2
        },
        {
            displayArray: ["Pale Saints", "Cocteau Twins", "Mazzy Star"],
            theAnswer: 1
        },
        {
            displayArray: ["Throwing Muses", "The Sundays", "Lush"],
            theAnswer: 2
        }];

    // variables: count 1 sec, timer off, quiz at 1
    var intervalId;
    var timerOn = false;
    var quizCounter = 1;


    // starting image
    $("#bandImages").html("<img src='" + images[0] + "'/>");

    // starting text
    $("ul").append("<li>" + quiz[0].displayArray[0] + "</li><li>" + quiz[0].displayArray[1] + "</li><li>" + quiz[0].displayArray[2] + "</li>");

    // click the button to begin
    $("#beginQuestions").on("click", function () {
        // hides the button
        $("button").hide();
        // starts timer
        clock.start();
        // starts song playing
        playAudio();
        // switches to first answer list
        ask();
    });


    // start song playing function
    function playAudio() {
        $("#myAudio")[0].play();
    }


    // presents answer lists from the array for its .length
    function ask() {

        if (quizCounter < quiz.length) {
            $("#bandImages").html("<img src='" + images[quizCounter] + "'/>");
            $("ul").html("<li class='clickRegion' numberIndex='1'>" 
            + quiz[quizCounter].displayArray[0] + "</li><li class='clickRegion' numberIndex='2'>" 
            + quiz[quizCounter].displayArray[1] + "</li><li class='clickRegion' numberIndex='3'>" 
            + quiz[quizCounter].displayArray[2] + "</li>");
        } else {
            return;
        }
    };


    // right/wrong answers are tallied, quizCounter advances by 1
    var guesses = {
        correct: 0,
        wrong: 0,
        plusScore: function() {
            guesses.correct++;
            $("#rightAnswer").text("Right: " + guesses.correct);
            quizCounter++;
        },
        minusScore: function() {
            guesses.wrong++;
            $("#wrongAnswer").text("Wrong: " + guesses.wrong);
            quizCounter++;
        },
    };


    // employed click regions for answer list
    $("#guesses").on("click", ".clickRegion", function() {
        if (quizCounter === 10) {
            // ends operation and offers analysis for 4 outcomes
            $("#myAudio")[0].pause();
            clearInterval(intervalId);
            timerOn = false;
            $("#bandImages").html("<img src='" + images[quizCounter + 2] + "'/>");
            if (guesses.correct === 0) {
                $("ul").html("<li>" + "It's ok." + "</li><li>" + "They've always been" + "</li><li>" + "underappreciated." + "</li>");
            }
            else if (guesses.correct > 0 && guesses.correct < 5) {
                $("ul").html("<li>" + "Not bad." + "</li><li>" + "They aren't " + "</li><li>" + "bad either." + "</li>");
            }
            else if (guesses.correct > 4 && guesses.correct < 9) {
                $("ul").html("<li>" + "Very good." + "</li><li>" + "Are you a closet " + "</li><li>" + "shoegazer?" + "</li>");
            }
            else {
                (guesses.correct > 8)
                $("ul").html("<li>" + "Outstanding." + "</li><li>" + "You clearly know " + "</li><li>" + "your shoegazers." + "</li>");
            }
        }
        // if the answer is correct or not add to right or wrong count
        var displayArrayPicked = Number($(this).attr("numberIndex"));
        if (displayArrayPicked === quiz[quizCounter].theAnswer) {
            guesses.plusScore();
        } else {
            guesses.minusScore();
        }
        ask();
    });

    // timer
    var clock = {
        time: 82,
        start: function() {
            if (!timerOn) {
                intervalId = setInterval(clock.count, 1000);
                timerOn = true;
            }
        },
        count: function() {
            clock.time--;
            var converted = clock.timeConverter(clock.time);
            $("#clockDisplay").text(converted);
            if (clock.time === 0) {
                clearInterval(intervalId);
                timerOn = false;
                $("#clockDisplay").text("Out of Time");
                $("#bandImages").html("<img src='" + images[11] + "'/>");
                $("ul").html("<li>" + "It's ok." + "</li><li>" + "They've always been" + "</li><li>" + "underappreciated." + "</li>");
            }
        },
        timeConverter: function(t) {
            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            if (minutes === 0) {
                minutes = "00";
            }
            else if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return minutes + ":" + seconds;
        }
    }; // end timer

});

