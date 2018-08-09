
// image array
var imageArray = [
    9,
    "../assets/images/acc53540f78d0c1803e46d5e0191cf9c--post-punk-punk-art.jpg",
    // "../assets/images/belly-top-10.jpg",
    // "../assets/images/cdc1b37b713a50e13a83d2ae6291ef16.jpg",
    // "../assets/images/Cocteau Twins_header_0.jpg",
    // "../assets/images/Medicine+1.jpg",
    // "../assets/images/MI0001332907.jpg",
    // "../assets/images/MI0004411418.jpg",
    // "../assets/images/MV5BZ-smaller.jpg",
    // "../assets/images/Pale-Saints-r01.jpg",
    // "../assets/images/the-sundays.jpeg",
    ];




    // var myImage = document.getElementById("mainImage");

    // var imageArray = ["_images/image1.jpg","_images/image2.jpg","_images/image3.jpg",
    //   "_images/image4.jpg","_images/image5.jpg","_images/image6.jpg"];
    
    // var imageIndex = 0; 
    
    // function changeImage() {
    //   myImage.setAttribute("src",imageArray[imageIndex]);
    //   imageIndex = (imageIndex + 1) % imageArray.length;
    // }









// on page load
window.onload = function() {
    $("#start").click(clock.start);
    $("#bandImages").append(imageArray[1]);
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

