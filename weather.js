$("document").ready(function () {
    console.log("Hello World");

    $("#Submit").on("click", function (event) {
        event.preventDefault();
        // Select a option from dropdown menu
        var teamCity = $("#drop-down option:selected").text().split(" ")[0];
        console.log(teamCity);
        


        // condition for london base team
        if ( (teamCity == "Crystal") || ( teamCity == "West") || ( teamCity == "Arsenal")) {
            teamCity = "london";
            console.log(teamCity);
        }

        // openweather api
        var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=";
        var apiKey = "d9d510d60f97d35c269584bef800f1b0";


        // constructing openweather api url
        weartherQuery += teamCity + "&appid=" + apiKey;

    

        console.log(weartherQuery);



        callWeather(weartherQuery);
        clear();

        // Creating weather infor & Icon api
        function callWeather(weatherQuery) {
            $.ajax({
                url: weatherQuery,
                method: "GET"
            }).then(function (response) {

    // displaying icons
                var weatherIconNum = response.weather[0].icon;
                var weatherUrl = "http://openweathermap.org/img/wn/" + weatherIconNum + "@2x.png";
                var weatherIconDisplay = $("<img>").attr("src", weatherUrl);
                
    // basic weather info
                var ul = $("<ul>");
                var cityli = $("<li>");
                var humidityli = $("<li>");
                var templi = $("<li>");

                var cityName = cityli.text("City: " + response.name);
                var humidity = humidityli.text("Humidity: " + response.main.humidity + "%");
                var temp = templi.text("Temperature: " + Math.round(response.main.temp - 273.15) + "°C");

                var list = ul.append(cityName, humidity, temp);
                $("#weather").append(weatherIconDisplay, list );

            });
        }
        
    });


// clear weather result
function clear() {
    $("#weather").empty();
}


});

