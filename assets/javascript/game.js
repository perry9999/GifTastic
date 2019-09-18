var response={};



// https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=face palm&limit=5&offset=0&rating=R&lang=en





      function getGiphyData (topic){


            // Selecting the input element and get its value 
            var newTopic = document.getElementById("topic").value;
            
            // Displaying the value
// alert(newTopic);

      $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q="+newTopic+"&offset=0&rating=R&lang=en&limit=10",
        method: "GET"
      }).then(function(response) {
        console.log(response);

        document.getElementById("results").innerHTML="";
        for(var i=0;i<response.data.length;i++){
                document.getElementById("results").innerHTML+="<img src='"+response.data[i].images.original.url+"'>";
        }
        


    });

    


  //  function refreshGifs(){
    // save old stuff 
        // OldGifs=document.getElementById("results").innerHTML;

        // data[1].images.fixed_height_small
        // .images.original.url

// add old stuff to the end..
// document.getElementById("results").innerHTML+=OldGifs;
    }
    


    // https://api.giphy.com/v1/gifs/random?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&tag=&rating=R&lang=en&limit=10