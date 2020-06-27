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
        
        // Hacky way to get the date of the fixture. Will improve this later
        console.log(fixtures.matches[0].utcDate);
        var rawDate = fixtures.matches[0].utcDate;
        rawDate.toString();
        // 2020-07-02T19:15:00Z // Original date format, need to conver to 2020-07-02 19:15:00 UTC
        rawDate2 = rawDate.replace("T", " ");
        rawDate3 = rawDate2.replace("Z", " UTC");
        console.log("rawDate2 " + rawDate2);
        console.log("rawDate3 " + rawDate3);
        var date = new Date(rawDate3);
        console.log(date.toString());
    });
});
    