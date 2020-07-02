// Constants 
const FOOTBALL_APIKEY = "31c88a22681c400c82675891090ba891"; // Football data API Key
const WEATHER_APIKEY = "d9d510d60f97d35c269584bef800f1b0"; // Open weather map API KEY

// Variables
var teamID = "";
var homeTeam = "";
var teamCity = "";
var homeTeamCity = "";
var homeTeamLat = "";
var homeTeamLon = "";
var gbFormattedFixtureDate = "";
var formattedDateList = [];

$("#Submit").on("click", function () {
    var teamID = $("#dropMenu").val();

    var queryURLByID = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/" + teamID + "/matches?status=SCHEDULED"; // use to get scheduled matches from team id
    // var queryURLTeams = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/teams"; // use to get a list of teams, to find team id's
    console.log(queryURLByID);

    $.ajax({
        headers: { 'X-Auth-Token': '31c88a22681c400c82675891090ba891' },
        url: queryURLByID,
        type: 'GET',
    }).done(function (fixtures) {

        // Clears last fixtures on new search
        $("#displayFixture").empty();

        console.log(fixtures);

        // Use of for loop in case we want to add support for more than one fixture in the future
        for (var i = 0; i < 1; i++) {

            // creates a div to hold the fixture
            var fixtureDiv = $("<div>");   

            // Home Team
            homeTeam = $("<h4>");
            homeTeam.text("(H) " + fixtures.matches[i].homeTeam.name);

            var vs = $("<h6>");
            vs.text("vs");
            vs.attr("class", "vs");

            // Sets the ID of the home team to it's index (we use this in the Open Weather API call)
            homeTeam.attr("id", i);
            homeTeam.attr("class", "homeTeam")
            

            // Away Team
            awayTeam = $("<h4>");
            awayTeam.text("(A) " + fixtures.matches[i].awayTeam.name);
            awayTeam.attr("class", "awayTeam")

            // Gets fixture date in UTC and changes it to user's local time
            var rawDate = fixtures.matches[i].utcDate;
            rawDate.toString();
            date = rawDate.replace("T", " ").replace("Z", " UTC");
            var userFixtureDate = new Date(date);
            var userFormattedFixtureDate = moment(userFixtureDate).format('MMMM Do YYYY, h:mm:ss a');
            userMatchDate = $("<h6>");
            userMatchDate.text("Date: " + userFormattedFixtureDate.toString() + " (user's local time)"); 

            fixtureDiv.append(userMatchDate, homeTeam, vs, awayTeam);
            fixtureDiv.attr("id", "fixtureDiv") // use this to style the div
            $("#displayFixture").append(fixtureDiv); // appends the div to the page

            // Gets fixture date and converts it to local time in London
            var gbFixtureDate = new Date(date).toLocaleString("en-US", { timeZone: "Europe/London" });
            // Formats the fixture date, using this to compare with future forecast date in open weather api
            gbFormattedFixtureDate = moment(gbFixtureDate).format('MMMM Do YYYY');
        }

    });
});

$("#Submit").on("click", function (event) {
    event.preventDefault();

    // Timeout function used to wait for fixture info to load first
    // Weather API relies on fixture info, so order is important
    setTimeout(function () {
        // Finds the home team name
        var home = $("#0").text();
        // Takes the first word from the home team name
        var homeTeam = home.slice(4).split(" ");
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

        // queryURL for current weather data using city name as search parameter
        var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + homeTeamCity + "&appid=" + WEATHER_APIKEY;
        // queryURL for future daily forecast weather data using latitude and longitude as search parameters
        var futureWeatherQuery = "https://api.openweathermap.org/data/2.5/onecall?lat=" + homeTeamLat + "&lon=" + homeTeamLon + "&exclude=minutely,hourly,&appid=" + WEATHER_APIKEY + "&units=metric";

        // Creating current weather info for home team city
        function callWeather(weatherQuery) {
            $.ajax({
                url: weatherQuery,
                method: "GET"
            }).then(function (currentWeather) {

                console.log(currentWeather);

                // creates a div to hold the current weather data
                var currentDiv = $("<div>");

                // name of city
                var cityName = $("<p>");
                cityName.text("Current weather in " + currentWeather.name);

                // displaying icons
                var weatherIconNum = currentWeather.weather[0].icon;
                var weatherUrl = "http://openweathermap.org/img/wn/" + weatherIconNum + ".png"; //@2x.
                var weatherIconDisplay = $("<img>")
                weatherIconDisplay.attr("src", weatherUrl);

                // temperature
                var temp = $("<p>");
                temp.text("Temperature: " + Math.round(currentWeather.main.temp - 273.15) + "°C");

                // humidity
                var humidity = $("<p>");
                humidity.text("Humidity: " + currentWeather.main.humidity + "%");

                // appends weather info to the div
                currentDiv.append(cityName, weatherIconDisplay, temp, humidity);
                currentDiv.attr("id", "currentWeather") // can use this to style
                $("#displayWeather").append(currentDiv); // appends div to the page
            });
        }

        // Creating future weather info for home team city (hopefully on the date the match is scheduled for)
        function callFutureWeather(futureWeatherQuery) {
            $.ajax({
                url: futureWeatherQuery,
                method: "GET"
            }).then(function (futureWeather) {

                console.log(futureWeather);
                // resets array to blank
                formattedDateList = [];

                // gets the date for the next 8 days from open weather maps daily forecast api
                // note: 8 days is the most open weather data's free API supports
                for (var i = 0; i < 8; i++) {
                    var dateDT = futureWeather.daily[i].dt;
                    // converts timestamp into human readable date
                    var date = new Date(dateDT * 1000);
                    var formattedDate = moment(date).format('MMMM Do YYYY');
                    // adds date to list of formatted dates
                    formattedDateList.push(formattedDate);
                }

                console.log(gbFormattedFixtureDate); // date to compare
                console.log(formattedDateList); // list of dates to compare to

                // checks if the match date is within the next 8 days
                if (formattedDateList.includes(gbFormattedFixtureDate)) {
                    console.log("true");
                    // finds where the date of the fixture matches inside the list of formatted dates
                    index = formattedDateList.findIndex(str => gbFormattedFixtureDate.includes(str));
                }
                // if the match date is not within the next 8 days
                else {
                    console.log("false");
                    // sets index to 0, this will display tomorrows weather 
                    // (this is a temporary fix to avoid the code breaking when a team's next fixture is more than 8 days away)
                    index = 0;
                }    

                console.log(index); // check to see if it matches

                // New div for match forecast
                var forecastDiv = $("<div>");

                // Matchday heading
                var matchdayHeading = $("<h5>");
                fhomeTeamCityName = homeTeamCity.replace(",gb", "");
                matchdayHeading.text("Matchday Weather in " + fhomeTeamCityName + " (" + gbFormattedFixtureDate + ")");

                // Gets the icon
                var icon = $("<img>");
                var iconCode = futureWeather.daily[index].weather[0].icon;
                var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";
                icon.attr("src", iconURL);

                // Gets the temperature
                var temp = $("<p>");
                // No conversion needed, as units=metric was added to futureWeatherQuery URL
                temp.text("Temperature: " + futureWeather.daily[index].temp.day + "°C");

                // Gets the humidity
                var humidity = $("<p>");
                humidity.text("Humidity: " + futureWeather.daily[index].humidity + "%");

                // Appends the data to the div
                forecastDiv.append(matchdayHeading, icon, temp, humidity);
                forecastDiv.attr("id", "forecastWeather"); // can use this to style
                $("#displayWeather").append(forecastDiv); // apends div to the page

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
