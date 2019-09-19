

document.getElementById("findGiphys").addEventListener("click",function(){
    var newTopic = document.getElementById("topic").value;
    getGiphyData(newTopic);  //run getGiphyData function..
});


function getGiphyData(topic) {
    var newGifInnerHtml="";
    document.getElementById("results").innerHTML="Gif's coming Soon!";

    // Selecting the input element and get its value 
    var newTopic = document.getElementById("topic").value;
    var response=[];
    response.length=0;
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?api_key=cb4rAUUugv4ls0srWM88sPsfKiYgFIyg&q=" + newTopic + "&offset=0&rating=R&lang=en&limit=10",
        method: "GET"
    }).then(function (response) {
        console.log(response);
       document.getElementById("results").innerHTML = "";
        for (var i = 0; i < response.data.length; i++) {
            // onclick='stopMotion("+i+")'
            document.getElementById("results").innerHTML+="<img class='gifDiv' id='gif-"+i+"'  now='moving' stillUrl='"+response.data[i].images.fixed_height_still.url+"' movingUrl='"+response.data[i].images.fixed_height.url+"' src='" + response.data[i].images.fixed_height.url + "'>";

            document.getElementById("gif-"+i).addEventListener("click",function(){ stopMotion("gif-"+i);    });
            



        }



            // document.getElementById("results").innerHTML = newGifInnerHtml;

                        //create listener
 
            
            // document.getElementById("results").innerHTML += "<img src='" + response.data[i].images.fixed_height.url + "'>";

    });
}

// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);


 function stopMotion(gifId){
    //If someone clicks on a gif..
// get the value of the gif div that was clicked.

// console.log("Before if then, now  = "+document.getElementById("gif-"+gifId).getAttribute("now"))
   

    theStillURL=    document.getElementById("gif-"+gifId).getAttribute("stillUrl");
    theMovingURL=    document.getElementById("gif-"+gifId).getAttribute("movingUrl");
    theNow =     document.getElementById("gif-"+gifId).getAttribute("now"); 
    // console.log("Before if then, theNow  = "+theNow)
 
            if(theNow==="moving"){
                // console.log("if moving -theNow = "+theNow);
                document.getElementById("gif-"+gifId).setAttribute("src",theStillURL); 
                document.getElementById("gif-"+gifId).setAttribute("now","still"); 
            }else{
                // console.log("else -theNow = "+theNow);
                document.getElementById("gif-"+gifId).setAttribute("src",theMovingURL); 
                document.getElementById("gif-"+gifId).setAttribute("now","moving"); 
            }
            // console.log("AFter if then, now  = "+document.getElementById("gif-"+gifId).getAttribute("now"))
        }

