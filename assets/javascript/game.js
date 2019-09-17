      // Performing GET requests to the OMDB API and logging the responses to the console












// https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=face palm&limit=5&offset=0&rating=R&lang=en





      function doThatThing (topic){
      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q="+topic+"&offset=0&rating=R&lang=en&limit=5",
        method: "GET"
      }).then(function(response) {
        console.log(response);

for(var i=0;i<response.data.length;i++){
        document.getElementById("results").innerHTML+="<img src='"+response.data[i].images.original.url+"'>";
}


    });
    }