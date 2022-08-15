let weather = {
    "apiKey": "984be8a173c2967981319900a49deeb3",
    getWeather: function (zip) {
        get(
            "https://api.openweathermap.org/data/2.5/weather?zip=" 
            + zip 
            + "&appid=" 
            + this.apikey)
            .then((response) => response.json())
    },
    display: function(data) {

    }
}