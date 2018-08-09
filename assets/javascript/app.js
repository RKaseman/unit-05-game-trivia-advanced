
// image array
var imageArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 
    "../Trivia-Game/assets/images/acc53540f78d0c1803e46d5e0191cf9c--post-punk-punk-art.jpg",
    // "../images/belly-top-10.jpg",
    // "../images/cdc1b37b713a50e13a83d2ae6291ef16.jpg",
    // "../images/Cocteau Twins_header_0.jpg",
    // "../images/Medicine+1.jpg",
    // "../images/MI0001332907.jpg",
    // "../images/MI0004411418.jpg",
    // "../images/MV5BZ-smaller.jpg",
    // "../images/Pale-Saints-r01.jpg",
    // "../images/the-sundays.jpeg",
    ];
    console.log(imageArray);

var quiz = {
    choice1: "Belly",
    choice2: "Cocteau Twins",
    choice3: "The Jesus and Mary Chain",
    choice4: "Lush",
    choice5: "Mazzy Star",
    choice6: "Medicine",
    choice7: "My Bloody Valentine",
    choice8: "Pale Saints",
    choice9: "The Sundays",
    choice10: "Throwing Muses",
    }
    console.log(quiz);

// on page load
window.onload = function() {
    var randomQuiz = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    $("#bandImages").html("<img src='../Trivia-Game/assets/images/acc53540f78d0c1803e46d5e0191cf9c--post-punk-punk-art.jpg'/>", imageArray[9]);
    $("#start").click(clock.start);
    $("#bx1").text(quiz.choice10);
    $("#bx2").text(quiz.choice4);
    $("#bx3").text(quiz.choice2);
};

//  :01 increment
var intervalId;
// clock pace bug prevention
var clockRunning = false;
// clock object
var clock = {
    time: 5,
    reset: function() {
        clock.time = 5;
        $("#display").text("00:00" + "t");
    },
    start: function() {
        // start game
        if (!clockRunning) {
            intervalId = setInterval(clock.count, 1000);
            clockRunning = true;
        }
    },
    count: function() {
        clock.time--;
        // var converted = current time passed into the clock.timeConverter function
        var converted = clock.timeConverter(clock.time);
        // <div>: display converted
        $("#display").text(converted);
        if (clock.time === 0) {
            clearInterval(intervalId);
            clockRunning = false;
            $("#display").text("tbd");
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
    },
    sceneSwitch: function() {

    }
};

