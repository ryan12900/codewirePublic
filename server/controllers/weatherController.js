//import request from 'request';
const Example = require('../models/examples.server.model.js')

 exports.hello = function(req, res,body) {
    //console.log(req.baseUrl);
    
    var search = req.baseUrl.substring(1);
    //console.log(search);
    const fetch = require("node-fetch");

    var name = "";
    var name2 = "";

    async function getWeather() {
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=1889e5a93eae80776956083ea2e9f74d');
        let data = await response.json();
        name2 = data.name; 
        return data;
          
    }
    
    getWeather().then(data => {
        if (data.name == null) {
            res.write("Enter a valid city");
        }
        else {
        res.write("City Name: " + data.name + "\n");
        res.write("Weather: " + data.weather[0].main + " (" + data.weather[0].description + ")\n");
        res.write("Visibility: " + data.visibility + "\n");
        res.write("Wind speed: " + data.wind['speed']);
        console.log(data);
        //name = data.name;
        //name3 = data.name;
        }
        res.end();
    })
    

   
   
    
    console.log(name);
    console.log(name2);
  
};