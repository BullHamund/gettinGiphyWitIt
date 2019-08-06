$(document).ready(function() {
$(function() {
    addButtons(memeArray, "searchButton", "#meme-buttons");
    console.log("Page loaded");
})
    // an array of places in NYC
    var memeArray = ["doge",
        "kermit meme",
        "arthur meme",
        "dank meme gifs",
        "donald trump gifs",
        "feels",
        "judge judy",
        "like a boss",
        "sips tea",
        "steal yo girl"
    ];
    // function to add and append buttons
    function addButtons(memeArray,classToAdd,areaToAddTo) {
        $(areaToAddTo).empty();
        for(var i = 0; i < memeArray.length;i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", memeArray[i]);
            a.text(memeArray[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click", ".searchButton", function() {
        $("#gifs-here").empty();
        var type = $(this).data('type');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=MFCxtiGGppfvi4vmxsmeXWZ82NRKiTzO&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
              console.log(response);
            for(var i=0; i < response.data.length; i++) {
                var searchDiv = $("<div class='search-item'>");
                var rating = response.data[i].rating;
                var p = $("<p>").text("rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.addClass("searchImage");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#gifs-here").append(searchDiv);
            }
          })
    })

    $(document).on("click", ".searchImage", function() {
        var state = $(this).attr("data-state");
        if(state == "still") {
            $(this).attr("src", $(this).data('animated'));
            $(this).attr("data-state", "animated");
        } else {
            $(this).attr("src", $(this).data('still'));
            $(this).attr("data-state", "still");
        }
    })
 
    $("#add-meme").on("click", function() {
        var newSearch = $("input").eq(0).val();
        memeArray.push(newSearch);
        addButtons(memeArray, "searchButton", "#meme-buttons");
        return false;
    })

});