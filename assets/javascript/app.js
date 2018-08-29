
$(document).ready(function () {

// image array
var images = [ 
    "../Trivia-Game/assets/images/question-mark-sm.png",
    "../Trivia-Game/assets/images/acc53540f78.jpg",
    "../Trivia-Game/assets/images/belly-top-10.jpg",
    "../Trivia-Game/assets/images/cdc1b37b713a50e13a83d2ae6291ef16.jpg",
    "../Trivia-Game/assets/images/Cocteau Twins_header_0.jpg",
    "../Trivia-Game/assets/images/Medicine+1.jpg",
    "../Trivia-Game/assets/images/MI0001332907.jpg",
    "../Trivia-Game/assets/images/MI0004411418.jpg",
    "../Trivia-Game/assets/images/MV5BZ-smaller.jpg",
    "../Trivia-Game/assets/images/Pale-Saints-r01.jpg",
    "../Trivia-Game/assets/images/the-sundays.jpeg",
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
        displayArray: ["Throwing Muses", "Cocteau Twins", "Pale Saints"],
        theAnswer: 2
    },
    {
        displayArray: ["Lush", "Medicine", "Belly"],
        theAnswer: 2
    },
    {
        displayArray: ["Throwing Muses", "Medicine", "Belly"],
        theAnswer: 1
    },
    {
        displayArray: ["Throwing Muses", "Medicine", "Mazzy Star"],
        theAnswer: 3
    },
    {
        displayArray: ["Throwing Muses", "The Jesus and Mary Chain", "Mazzy Star"],
        theAnswer: 2
    },
    {
        displayArray: ["Pale Saints", "The Jesus and Mary Chain", "Mazzy Star"],
        theAnswer: 1
    },
    {
        displayArray: ["Throwing Muses", "The Sundays", "Mazzy Star"],
        theAnswer: 2
    }];
    console.log(quiz[0].displayArray);


var intervalId;
var timerOn = false;
var quizCounter = 0;


$("#bandImages").html("<img src='" + images[0] + "'/>");

$("ul").append("<li>" + quiz[0].displayArray[0] + "</li><li>" + quiz[0].displayArray[1] + "</li><li>" + quiz[0].displayArray[2] + "</li>");

$("#beginQuestions").on("click", function () {
    clock.start();
    ask();
});


function ask() {

    if (quizCounter < quiz.length) {

        for (i = 1; i < images.length; i++) {
            $("#bandImages").html("<img src='" + images[0 + 1] + "'/>");
        };

        for (j = 1; j < quiz.length; j++) {
            $("ul").html("<li id='clickRegion' numberIndex= " + quiz[this.index].displayArray.indexOf(choice) + ">" + choice);

    // $("#bandImages").text(quiz[this.index]);
    // console.log("quiz[this.index] = " + quiz[this.index]);
    // for (var choice of quiz[ask.index].displayArray) {
    // }
        }
    } else {
        return;
    }
};

var guesses = {
    correct: 0,
    wrong: 0,
    plusScore: function() {
        guesses.correct++;
        $("#rightAnswer").text(guesses.correct);
        ask.index++;
        ask.new();
    },
    minusScore: function() {
        guesses.wrong++;
        $("#wrongAnswer").text(guesses.wrong);             
        ask.index++;
        ask.new();
    },
};

$("#guesses").on("click", "#clickRegion", function() {
    if (ask.index >= quiz.length) {return;}
    var displayArrayPicked = Number($(this).attr("numberIndex"));
    console.log("displayArrayPicked = " + displayArrayPicked);
    if (displayArrayPicked === quiz[ask.index].theAnswer) {
        guesses.plusScore();
    } else {
        guesses.minusScore();
    }
    ask.new()
});

// $("#guesses").on("click", function() {
    // var imageSwitch;
    // for (var i = 2; i < images.length; i++) {
        // $("#bandImages").html("<img src='" + images[i++] + "'/>");

    // }
// });

// timer
var clock = {

    time: 30,

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
            $("#clockDisplay").text("tbd");
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

