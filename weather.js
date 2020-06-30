$("document").ready(function () {
    console.log("Hello World")

    // var selectedCity = $("#dropDown").val();


    var selectedCity = $('#dropMenu').find(":selected").text();
    console.log(selectedCity);
    

    var weartherQuery = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "d9d510d60f97d35c269584bef800f1b0";

    
    weartherQuery +=  selectedCity + "&appid=" + apiKey;
    console.log(weartherQuery);

    function callApi (weatherQuery) {
        $.ajax({
            url: weatherQuery,
            method: "GET"
        }).then(function (response){
            console.log("test");
            var selectedWeather = 
        });
    }




});


