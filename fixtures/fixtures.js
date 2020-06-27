// Constants 
const APIKEY = "31c88a22681c400c82675891090ba891"; // Football data API Key

// Variables
var teamID = "";

$("#Submit").on("click", function() {
    var teamID = $(".eplTeam").val();

    var queryURLByID = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/teams/" + teamID + "/matches?status=SCHEDULED"; // SCHEDULED MATCHES FROM TEAM ID
    // var queryURLTeams = "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2/competitions/PL/teams"; // GET TEAMS

    $.ajax({
        headers: { 'X-Auth-Token': '31c88a22681c400c82675891090ba891' }, 
        url: queryURLByID,
        type: 'GET',
    }).done(function(fixtures) {
        
        // console.log(fixtures);
        
        // Gets fixture date in UTC and changes it to user's local time
        var rawDate = fixtures.matches[0].utcDate;
        rawDate.toString();
        date = rawDate.replace("T", " ").replace("Z", " UTC");
        var fixtureDate = new Date(date);
        console.log(fixtureDate.toString());
    });
});
    