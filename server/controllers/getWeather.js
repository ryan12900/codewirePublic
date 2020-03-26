const fetch = require("node-fetch");
//'&appid=1889e5a93eae80776956083ea2e9f74d'


 exports.weather  = function(req, res,body) {
    //console.log(req.baseUrl);
    
    const search = req.params.city;


    async function getWeather() {
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=1889e5a93eae80776956083ea2e9f74d');
        let data = await response.json();
        return data;
          
    }
    
    getWeather().then(data => {
        if (data.name == null) {
            res.write("Enter a valid city");
        }
        else {
            res.json({data});
        }
        res.end();
    })
};
