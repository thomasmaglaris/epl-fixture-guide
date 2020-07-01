// Constants 
const FOOTBALL_APIKEY = "31c88a22681c400c82675891090ba891"; // Football data API Key
const WEATHER_APIKEY = "d9d510d60f97d35c269584bef800f1b0"; // Open weather map API KEY

// Variables
var teamID = "";
var homeTeam = "";
var teamCity = "test";
var homeTeamLat = "";
var homeTeamLon = "";

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
        $("#displayFixture").empty();

        // console.log(fixtures);

        // Gets home & away team
        for (var i = 0; i < 1; i++) {
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
            $("#displayFixture").append(teamFixtures);
        }

    });
});

$("#Submit").on("click", function (event) {
    event.preventDefault();

    // Timeout function used to wait for fixture info to load first
    // Weather API relies on fixture info, so order is important
    setTimeout(function () {
        var home = $("#0").text();
        // Takes the first word from the home team name
        var homeTeam = home.slice(6).split(" ");
        var homeTeamName = homeTeam[0];

        // Checks the home team name and sets the variable to the city associated with that home team
        if ((homeTeamName == "Arsenal") || (homeTeamName == "Chelsea") || (homeTeamName == "Crystal") || (homeTeamName == "Tottenham") || (homeTeamName == "West")) {
            homeTeamCity = "London,gb";
            homeTeamLat = "51.51"; // London's latitude (all lat & lon's sourced from Open Weather API)
            homeTeamLon = "-0.13"; // London's longitude 
        }
        else if (homeTeamName == "Aston") {
            homeTeamCity = "Birmingham,gb";
            homeTeamLat = "52.48"; // Birmingham's latitude
            homeTeamLon = "-1.9";  // Birmingham's longitude 
        }
        else if (homeTeamName == "AFC") {
            homeTeamCity = "Bournemouth,gb";
            homeTeamLat = "50.72"; // Bournemouth's latitude
            homeTeamLon = "-1.88"; // Bournemouth's longitude
        }    
        else if (homeTeamName == "Brighton") {
            homeTeamCity = "Brighton,gb";
            homeTeamLat = "50.83";  // Brighton's latitude
            homeTeamLon = "-0.14,"; // Brighton's longitude
        } 
        else if (homeTeamName == "Burnley") {
            homeTeamCity = "Burnley,gb";
            homeTeamLat = "53.8";  // Burnley's latitude
            homeTeamLon = "-2.23"; // Burnley's longitude
        } 
        else if (homeTeamName == "Leicester") {
            homeTeamCity = "Leicester,gb";
            homeTeamLat = "52.64"; // Leicester's latitude
            homeTeamLon = "-1.13"; // Leicester's longitude
        } 
        else if ((homeTeamName == "Everton") || (homeTeamName == "Liverpool")) {
            homeTeamCity = "Liverpool,gb";
            homeTeamLat = "53.41"; // Liverpool's latitude
            homeTeamLon = "2.98";  // Liverpool's longitude
        } 
        else if (homeTeamName == "Manchester") {
            homeTeamCity = "Manchester,gb";
            homeTeamLat = "53.48"; // Manchester's latitude
            homeTeamLon = "-2.24"; // Manchester's longitude
        } 
        else if (homeTeamName == "Newcastle") {
            homeTeamCity = "Newcastle,gb";
            homeTeamLat = "51.85"; // Newcastle's latitude
            homeTeamLon = "-2.8";  // Newcastle's longitude
        }
        else if (homeTeamName == "Norwich") {
            homeTeamCity = "Norwich,gb";
            homeTeamLat = "52.63"; // Norwich's latitude
            homeTeamLon = "1.3";   // Norwich's longitude
        } 
        else if (homeTeamName == "Sheffield") {
            homeTeamCity = "Sheffield,gb";
            homeTeamLat = "53.38"; // Sheffield's latitude
            homeTeamLon = "-1.47"; // Sheffield's longitude
        }
        else if (homeTeamName == "Southampton") {
            homeTeamCity = "Southampton,gb";
            homeTeamLat = "50.9"; // Southmapton's latitude
            homeTeamLon = "-1.4"; // Southampton's longitude
        }
        else if (homeTeamName == "Watford") {
            homeTeamCity = "Watford,gb";
            homeTeamLat = "51.66"; // Watford's latitude
            homeTeamLon = "-0.4";  // Watford's longitude
        }
        else if (homeTeamName == "Wolverhampton") {
            homeTeamCity = "Wolverhampton,gb";
            homeTeamLat = "52.59"; // Wolverhampton's latitude
            homeTeamLon = "-2.12"; // Wolverhampton's latitude
        } 
        // Error check to see if any of the above info needs tweaking
        else {
            console.log("Couldn't find team name for " + homeTeamName);
        }

        console.log(homeTeamCity);

        // queryURL for current weather data using city name as search parameter
        var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + homeTeamCity + "&appid=" + WEATHER_APIKEY;
        // queryURL for future daily forecast weather data using latitude and longitude as search parameters
        var futureWeatherQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + homeTeamLat + "&lon=" + homeTeamLon + "&exclude=minutely,&appid=" + WEATHER_APIKEY + "&units=metric";

        // Creating current weather info for home team city
        function callWeather(weatherQuery) {
            $.ajax({
                url: weatherQuery,
                method: "GET"
            }).then(function (currentWeather) {
                
                console.log(currentWeather);

                // displaying icons
                var weatherIconNum = currentWeather.weather[0].icon;
                var weatherUrl = "http://openweathermap.org/img/wn/" + weatherIconNum + "@2x.png"; //@2x.
                var weatherIconDisplay = $("<img>").attr("src", weatherUrl);
                
                // basic weather info
                var ul = $("<ul>");
                var cityli = $("<li>");
                var humidityli = $("<li>");
                var templi = $("<li>");
                
                var cityName = cityli.text("Home Team's City: " + currentWeather.name);
                var humidity = humidityli.text("Humidity: " + currentWeather.main.humidity + "%");
                var temp = templi.text("Temperature: " + Math.round(currentWeather.main.temp - 273.15) + "°C");
                
                var list = ul.append(cityName, humidity, temp);
                $("#displayWeather").append(weatherIconDisplay, list);    
            });
        }

        // Creating future weather info for home team city (hopefully on the date the match is scheduled for)
            function callFutureWeather(futureWeatherQuery) {
                $.ajax({
                    url: futureWeatherQuery,
                    method: "GET"
                }).then(function (futureWeather) {
                    
                    console.log(futureWeather);
    
                });
            }

        clear();
        callWeather(weartherQuery);
        callFutureWeather(futureWeatherQuery);
        
    }, 3000);
});


// clear weather result
function clear() {
    $("#displayWeather").empty();
}

