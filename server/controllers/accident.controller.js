//const Example = require('../models/examples.server.model.js')
const fetch = require('node-fetch');

const stateIds = ['alabama','alaska','','arizona','arkansas','california','','colorado','connecticut','delaware','district of columbia','florida','georgia','','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon','pennsylvania','puerto rico','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virginia','virgin islands','washington','west virginia','wisconsin','wyoming'];

function getIdList(req){
    let stateEntry = req.params.stateName;
    stateEntry = stateEntry.toLowerCase();
    let stateList = stateEntry.split(',');
    let idList=[];
    stateList.forEach(state=>{
        function getIndex(checkState) {
            return state === checkState;
        }
        let id = stateIds.findIndex(getIndex) +1;
        idList.push(id);
    });
    return idList;
}

exports.byStateCityYear=(req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data));
        res.end();
    })

    async function getAccidents(IDs){
        console.log('year=',req.params.year);

        let search = true;
        let response;
        let i = 1;
        let data;
        let cityNameUp = req.params.cityName.toUpperCase();
        console.log('city name=',cityNameUp);
        while(search){
            response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCrashesByLocation?fromCaseYear='+req.params.year+'&toCaseYear='+req.params.year+'&state='+IDs+'&county='+i+'&format=json')
                .catch(err=>console.log(err));
            data = await response.json();

            if (data.Results[0].length>0){
                console.log('county:', data.Results[0][0].COUNTYNAME);

                for(let accident of data.Results[0]){
                    if (accident.CITYNAME === cityNameUp){
                        search = false;
                        break;
                    }
                }
            }

            i++;
        }

        return data.Results[0].filter(accident=>accident.CITYNAME===cityNameUp);
    }
}

exports.analytics=(req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/analytics/GetInjurySeverityCounts?fromCaseYear='+years[0]+'&toCaseYear='+years[1]+'&state='+IDs+'&format=json');
        let data = await response.json();
        return data;
    }
}

exports.byStateCountyYear=(req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCrashesByLocation?fromCaseYear='+years[0]+'&toCaseYear='+years[1]+'&state='+IDs+'&county='+req.params.county+'&format=json');
        let data = await response.json();
        return data;
    }
}

exports.byStateYear= (req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states='+IDs+'&fromYear='+years[0]+'&toYear='+years[1]+'&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        let data = await response.json();
        return data;
    }
};

exports.byState = (req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states='+IDs+'&fromYear=2010&toYear=2020&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        let data = await response.json();
        return data;
    }
};

exports.accidents = function(req, res) {
    async function getAccidents(){
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states=1,51&fromYear=2010&toYear=2020&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        let data = await response.json();
        return data;
    }

    getAccidents().then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    })
};