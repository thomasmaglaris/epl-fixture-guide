// Constants 
const APIKEY = "31c88a22681c400c82675891090ba891"; // Football data API Key

// Variables
var teamID = "";
var homeTeam = "";
var teamCity = "test";

$("#Submit").on("click", function () {
    var teamID = $("#dropMenu").val();
    console.log(teamID);

    var queryURLByID = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/" + teamID + "/matches?status=SCHEDULED"; // SCHEDULED MATCHES FROM TEAM ID
    // var queryURLTeams = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/teams"; // GET TEAMS
    console.log(queryURLByID);

    $.ajax({
        headers: { 'X-Auth-Token': '31c88a22681c400c82675891090ba891' },
        url: queryURLByID,
        type: 'GET',
    }).done(function (fixtures) {

        // Clears last fixtures on new search
        $("#upcomingFixture").empty();

        console.log(fixtures);

        // Gets home & away team
        for (var i = 0; i < 6; i++) {
            homeTeam = $("<h4>");
            homeTeam.text("Home: " + fixtures.matches[i].homeTeam.name);
            homeTeam.attr("id", i);
            awayTeam = $("<h4>");
            awayTeam.text("Away: " + fixtures.matches[i].awayTeam.name);

            // Gets fixture date in UTC and changes it to user's local time
            var rawDate = fixtures.matches[i].utcDate;
            rawDate.toString();
            date = rawDate.replace("T", " ").replace("Z", " UTC");
            var fixtureDate = new Date(date);
            var formattedFixtureDate = moment(fixtureDate).format('MMMM Do YYYY, h:mm:ss a');

            matchDate = $("<h6>");
            matchDate.text("Date: " + formattedFixtureDate.toString()); // TODO: Format this date better
            teamFixtures = $("<div>");
            teamFixtures.append(matchDate, homeTeam, awayTeam);
            $("#upcomingFixture").append(teamFixtures);
        }

    });
});

$("#Submit").on("click", function (event) {
    event.preventDefault();
    // Select a option from dropdown menu

    // var teamCity = $("#dropMenu2 option:selected").text().split(" ")[0];
    // console.log(teamCity);

    setTimeout(function () {
        var home = $("#0").text();
        var homeTeam = home.slice(6).split(" ");
        var testHomeTeam = homeTeam[0];
        console.log(homeTeam);
        console.log(testHomeTeam);
        // return homeTeam;

        // .split(" ")[0]

        // condition for london base team
        if ((testHomeTeam == "Crystal") || (testHomeTeam == "West") || (testHomeTeam == "Arsenal")) {
            teamCity = "london";
            // / openweather api
            console.log(teamCity);

        }
        else {
            teamCity = "test2";
        }


        // // openweather api
        // var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=";
        // var apiKey = "d9d510d60f97d35c269584bef800f1b0";


        // constructing openweather api url
        // weartherQuery += teamCity + "&appid=" + apiKey;



        // console.log(weartherQuery);
        console.log(teamCity);

        var apiKey = "d9d510d60f97d35c269584bef800f1b0";
        var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + teamCity + "&appid=" + apiKey;
        // weartherQuery += teamCity + "&appid=" + apiKey;

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
                $("#weather").append(weatherIconDisplay, list);

            });
        }

    }, 5000);
});


// clear weather result
function clear() {
    $("#weather").empty();
}


// });

