const fetch = require("node-fetch");
//'&appid=1889e5a93eae80776956083ea2e9f74d'

 exports.getweather  = function(req, res) {
    //console.log(req.baseUrl);
    
    const search = req.params.city;

    async function getWeather() {
        let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=1889e5a93eae80776956083ea2e9f74d');
        let data = await response.json();
        return data;
          
    }
    
    getWeather().then(data => {
        //data.name == null
        if (data.cod === '404') {
            let error_obj = {message : "Please Introduce a Valid City"};
            res.status(404).json(error_obj.message);
            //res.write("error");
        }
        else {
            res.json({data});
        }
        res.end();
    })
};
