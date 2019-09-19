var buttonChoices = ["Demolition Implosions", "Fail", "Bike Crash", "Baby Goats", "Elephants", "Fish"];
// creates ready-to-click buttons using topics in above array.. (buttonChoices)
function createButtons() {
    document.getElementById("buttonsDiv").innerHTML = "";
    for (var i = 0; i < buttonChoices.length; i++) {
        varNewButton = "<button class='buttonToClick' onclick = 'getGiphyData(\"" + buttonChoices[i] + "\")' >" + buttonChoices[i] + "</button>";
        document.getElementById("buttonsDiv").innerHTML += varNewButton;
    }
    // Start All and Stop All buttons
    varNewButton = "<button class='buttonToClick' onclick = 'startAll()' >Start ALL Gifs</button>";
    document.getElementById("buttonsDiv").innerHTML += varNewButton;
    varNewButton = "<button class='buttonToClick' onclick = 'stopAll()' >Stop ALL Gifs</button>";
    document.getElementById("buttonsDiv").innerHTML += varNewButton;
}

// Add event listener to react when user enters new topic.. Creates button and automatically pull related updated Gif's.
document.getElementById("addTopic").addEventListener("click", function () {
    buttonChoices.push(document.getElementById("topic").value);
    createButtons();
    getGiphyData(document.getElementById("topic").value);
    console.log(document.getElementById("topic").value);
});


function getGiphyData(topic) {
    var newGifInnerHtml = "";
    document.getElementById("results").innerHTML = "Gif's coming Soon!";
    // Selecting the input element and get its value 

    var response = [];
    response.length = 0;
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=" + topic + "&offset=11&rating=R&lang=en&limit=10&random=4564&weirdness=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        document.getElementById("results").innerHTML = "";

        // Start a for loop to create giph diplay div's with onclick events to start and stop motion.
        for (var i = 0; i < response.data.length; i++) {
            var newDiv = "";
            newDiv = " <div class='gifBox'> <img class='gifDiv' topic='" + topic + "' id='gif-" + i + "' onclick='stopStartMotion(" + i + ")' now='moving' stillUrl='" + response.data[i].images.fixed_height_still.url + "' movingUrl='" + response.data[i].images.fixed_height.url + "' src='" + response.data[i].images.fixed_height.url + "'><div class='gifTitleDiv'>\"" + topic + "\"  Rated: " + response.data[i].rating + "</div></div>";
            document.getElementById("results").innerHTML += newDiv;
        }

    });
}



function stopStartMotion(gifId) {
    //If someone clicks on a gif..
    // get the value of the gif div that was clicked.
    theStillURL = document.getElementById("gif-" + gifId).getAttribute("stillUrl");
    theMovingURL = document.getElementById("gif-" + gifId).getAttribute("movingUrl");
    theNow = document.getElementById("gif-" + gifId).getAttribute("now");
    // console.log("Before if then, theNow  = "+theNow)

    if (theNow === "moving") {
        // console.log("if moving -theNow = "+theNow);
        document.getElementById("gif-" + gifId).setAttribute("src", theStillURL);
        document.getElementById("gif-" + gifId).setAttribute("now", "still");
    } else {
        // console.log("else -theNow = "+theNow);
        document.getElementById("gif-" + gifId).setAttribute("src", theMovingURL);
        document.getElementById("gif-" + gifId).setAttribute("now", "moving");
    }
    // console.log("AFter if then, now  = "+document.getElementById("gif-"+gifId).getAttribute("now"))
}


// Start All / Stop All
function startAll() {
     for (var i = 0; i < 10; i++) {
        // theStillURL = document.getElementById("gif-" + i).getAttribute("stillUrl");
        var theMovingURL = document.getElementById("gif-" + i).getAttribute("movingUrl");

        document.getElementById("gif-" + i).setAttribute("src", theMovingURL);
        document.getElementById("gif-" + i).setAttribute("now", "moving");
    }
}
function stopAll() {
    for (var i = 0; i < 10; i++) {
        theStillURL = document.getElementById("gif-" + i).getAttribute("stillUrl");
        theMovingURL = document.getElementById("gif-" + i).getAttribute("movingUrl");
        document.getElementById("gif-" + i).setAttribute("src", theStillURL);
        document.getElementById("gif-" + i).setAttribute("now", "still");
    }
}



// create default buttons
createButtons();

