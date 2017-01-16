var axios = require('axios');

//makes a variable that can't be changed!!!!!
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=18a6d3061be3608490c08fc2c16d1203';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    
        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },function(res){
            //open map doesn't use 404 for bad requests, they use their own syntax
            throw new Error("Unable to fetch weather for that location");
        });
    }
}