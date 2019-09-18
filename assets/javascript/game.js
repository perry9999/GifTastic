var gifData = [];
// https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=face palm&limit=5&offset=0&rating=R&lang=en


function getGiphyData(topic) {
    var newGifInnerHtml="";

    // Selecting the input element and get its value 
    var newTopic = document.getElementById("topic").value;

    // Displaying the value
    // alert(newTopic);

    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=" + newTopic + "&offset=0&rating=R&lang=en&limit=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
       document.getElementById("results").innerHTML = "";
        for (var i = 0; i < response.data.length; i++) {
            newGifInnerHtml+= "<img id='gif-"+i+"'  src='" + response.data[i].images.fixed_height.url + "'>";
            gifData.push(response.data[i]);
            }

            document.getElementById("results").innerHTML = newGifInnerHtml;

            // document.getElementById("results").innerHTML += "<img src='" + response.data[i].images.fixed_height.url + "'>";
    

    });
}


function stopMotion(gifId){


    document.getElementById("gif-"+gifId).src = gifData[gifId].images.fixed_height_still.url;

}

function logGifData(){
console.log(gifData);
}
    // https://api.giphy.com/v1/gifs/random?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&tag=&rating=R&lang=en&limit=10