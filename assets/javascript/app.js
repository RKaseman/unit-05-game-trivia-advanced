
// image array
var imageArray = [ 
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
var quiz = [{
    nameThatBand: "displayArray test1",
    displayArray: ["The Jesus and Mary Chain", "My Bloody Valentine", "Lush"],
    theAnswer: 1
    },
    {
    nameThatBand: "displayArray test2",
    displayArray: ["Belly", "Medicine", "Cocteau Twins"],
    theAnswer: 2
    },
    {
    nameThatBand: "displayArray test3",
    displayArray: ["Mazzy Star", "The Sundays", "Pale Saints"],
    theAnswer: 3
    },
    {
    nameThatBand: "displayArray test4",
    displayArray: ["Throwing Muses", "Lush", "Pale Saints"],
    theAnswer: 4
    },
    {
    nameThatBand: "displayArray test5",
    displayArray: ["Lush", "Medicine", "Belly"],
    theAnswer: 5
    }
];

console.log(quiz);
console.log(quiz[0].displayArray);
console.log(quiz[0].theAnswer);
console.log(quiz[1].displayArray);
console.log(quiz[1].theAnswer);
console.log(quiz[2].displayArray);
console.log(quiz[2].theAnswer);
console.log(quiz[3].displayArray);
console.log(quiz[3].theAnswer);
console.log(quiz[4].displayArray);
console.log(quiz[4].theAnswer);

window.onload = function() {
    $("#beginQuestions").on("click", clock.start);
    $("#bandImages").html("<img src='" + imageArray[0] + "'/>");
    setDisplay();
};

var setDisplay = function() {
    $("ul").append("<li>" + quiz[0].displayArray + "</li>");
};

var intervalId;
var timerOn = false;

var ask = {
    index: 0,
    new: function() {
        if (ask.index < quiz.length) {
            $("#bandImages").text(quiz[this.index].nameThatBand);
            console.log("quiz[this.index].nameThatBand = " + quiz[this.index].nameThatBand);
            $("#header").text("");
            for (var choice of quiz[ask.index].displayArray) {
                $("#guesses").append("<li id='clickRegion' numberIndex= " + quiz[this.index].displayArray.indexOf(choice) + ">" + choice);
            }
        }
        else {return;}
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
});

$("#guesses").on("click", function() {
    // var imageSwitch;
    // for (var i = 2; i < imageArray.length; i++) {
        // $("#bandImages").html("<img src='" + imageArray[i++] + "'/>");

    // }
    ask.new()
});

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

