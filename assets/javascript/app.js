$(function () {
    addButtons(landmarkArray, "searchButton", "#landmark-buttons");
    console.log("Page loaded");
});
    // an array of places in NYC
    var landmarkArray = ["vuca meme",
        "kermit meme",
        "arthur meme",
        "dank meme gifs",
        "donald trump gifs",
        "feels",
        "judge judy",
        "like a boss",
        "sips tea",
        "steal yo girl",
    ]
    // function to add and append buttons
    function addButtons(landmarkArray, classToAdd, areaToAddTo) {
        $(areaToAddTo).empty();
        for(var i = 0; i < landmarkArray.length;i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type", landmarkArray[i]);
            a.text(landmarkArray[i]);
            $(areaToAddTo).append(a);
        }
    }

    $(document).on("click", ".searchButton", function() {
        var type = $(this).data('type');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=MFCxtiGGppfvi4vmxsmeXWZ82NRKiTzO&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
          }).done(function(response) {
            for(var 1=0; i < response.data.length; i++) {
                var searchDiv = $("<div class='search'>")
            }
          })
    })
