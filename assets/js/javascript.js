$("button").on("click", function() {
            var animal = $(this).attr("data-animal");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                animal + "&api_key=dc6zaTOxFJmzC&limit=10";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).done(function(response) {

                console.log(queryURL);
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='item'>");

                    var rating = results[i].rating;

                    var p = $("<p>").text("Rating: " + rating);

                    var animal = $("<img>");
                    animal.attr("src", results[i].images.fixed_height.url);

                    gifDiv.prepend(p);
                    gifDiv.prepend(animal);

                    $("#gifs-appear-here").prepend(gifDiv);

                }
            });
        });