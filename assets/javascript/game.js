
var buttonChoices = ["Demolition Implosions", "Baby Goats", "Elephants", "Fish"];

function createButtons()
    {
    document.getElementById("buttonsDiv").innerHTML =""; 
        for(var i=0;i<buttonChoices.length;i++){
        varNewButton = "<button class='buttonToClick' onclick = 'getGiphyData(\""+buttonChoices[i]+"\")' >" +buttonChoices[i]+ "</button>";
        document.getElementById("buttonsDiv").innerHTML += varNewButton;
        }
    }


document.getElementById("addTopic").addEventListener("click", function () {
    buttonChoices.push( document.getElementById("topic").value);
    createButtons();
});

function getGiphyData(topic) {
    var newGifInnerHtml = "";
    document.getElementById("results").innerHTML = "Gif's coming Soon!";

    // Selecting the input element and get its value 
    // var newTopic = document.getElementById("topic").value;

    //   var newTopic = document.getElementById("topic").value;
    //var newTopic=topic;

    var response = [];
    response.length = 0;
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=" + topic + "&offset=0&rating=R&lang=en&limit=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        document.getElementById("results").innerHTML = "";
        for (var i = 0; i < response.data.length; i++) {
            var newDiv = "";

            newDiv =" <div class='gifBox'> <img class='gifDiv' id='gif-" + i + "' onclick='stopMotion(" + i + ")' now='moving' stillUrl='" + response.data[i].images.fixed_height_still.url + "' movingUrl='" + response.data[i].images.fixed_height.url + "' src='" + response.data[i].images.fixed_height.url + "'><div class='gifTitleDiv'>Rated: "+response.data[i].rating+"</div></div>";
            document.getElementById("results").innerHTML += newDiv;
        }
    });
}



function stopMotion(gifId) {
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


// create default buttons
createButtons();
  











