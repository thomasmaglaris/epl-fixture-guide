// Constants 
const APIKEY = "31c88a22681c400c82675891090ba891"; // Football data API Key

// Variables
var teamID = "";

$("#Submit").on("click", function() {
    var teamID = $("#dropdown").val();

    var queryURLByID = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/" + teamID + "/matches?status=SCHEDULED"; // SCHEDULED MATCHES FROM TEAM ID
    // var queryURLTeams = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/teams"; // GET TEAMS

    $.ajax({
        headers: { 'X-Auth-Token': '31c88a22681c400c82675891090ba891' }, 
        url: queryURLByID,
        type: 'GET',
    }).done(function(fixtures) {
        
        // Clears last fixtures on new search
        $("#upcomingFixture").empty();

        // console.log(fixtures);
        
        // Gets home & away team
        homeTeam = $("<h4>");
        homeTeam.text("Home: " + fixtures.matches[0].homeTeam.name);
        awayTeam = $("<h4>");
        awayTeam.text("Away: " + fixtures.matches[0].awayTeam.name);
        
        // Gets fixture date in UTC and changes it to user's local time
        var rawDate = fixtures.matches[0].utcDate;
        rawDate.toString();
        date = rawDate.replace("T", " ").replace("Z", " UTC");
        var fixtureDate = new Date(date);
        matchDate = $("<h6>");
        matchDate.text("Date: " + fixtureDate.toString()); // TODO: Format this date better

        teamFixtures = $("<div>");
        teamFixtures.append(homeTeam, awayTeam, matchDate);
        $("#upcomingFixture").append(teamFixtures);

    });
});
    