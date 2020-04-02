//const Example = require('../models/examples.server.model.js')
const fetch = require('node-fetch');

const stateIds = ['alabama','alaska','','arizona','arkansas','california','','colorado','connecticut','delaware','district of columbia','florida','georgia','','hawaii','idaho','illinois','indiana','iowa','kansas','kentucky','louisiana','maine','maryland','massachusetts','michigan','minnesota','mississippi','missouri','montana','nebraska','nevada','new hampshire','new jersey','new mexico','new york','north carolina','north dakota','ohio','oklahoma','oregon','pennsylvania','puerto rico','rhode island','south carolina','south dakota','tennessee','texas','utah','vermont','virginia','virgin islands','washington','west virginia','wisconsin','wyoming'];

function getIdList(req){
    let stateEntry = req.params.stateName;
    //console.log('State: ',stateEntry);
    stateEntry = stateEntry.toLowerCase();
    //console.log('State (small): ',stateEntry);
    //res.write(stateEntry);
    let stateList = stateEntry.split(',');
    //console.log('stateList: ', stateList);
    let idList=[];
    stateList.forEach(state=>{
        //res.write(state);
        function getIndex(checkState) {
            return state === checkState;
        }
        let id = stateIds.findIndex(getIndex) +1;
        idList.push(id);
        //idList.push(id+',');
        //res.write(id.toString());
    });
    return idList;
    //console.log('idList: ',idList);
}

exports.analytics=(req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        //console.log(IDs);
        //console.log('County: ',req.params.county);
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        //console.log('froYear: ',years[0]);
        //console.log('toYear',years[1]);
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/analytics/GetInjurySeverityCounts?fromCaseYear='+years[0]+'&toCaseYear='+years[1]+'&state='+IDs+'&format=json');
        //console.log('response: ', response);
        let data = await response.json();
        //console.log('first data: ', data);
        return data;
    }
}

exports.byStateCountyYear=(req,res)=>{
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        //console.log(IDs);
        //console.log('County: ',req.params.county);
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        //console.log('froYear: ',years[0]);
        //console.log('toYear',years[1]);
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCrashesByLocation?fromCaseYear='+years[0]+'&toCaseYear='+years[1]+'&state='+IDs+'&county='+req.params.county+'&format=json');
        //console.log('response: ', response);
        let data = await response.json();
        //console.log('first data: ', data);
        return data;
    }
}

exports.byStateYear= (req,res)=>{
    //let idList=getIdList(req);
    getAccidents(getIdList(req).toString()).then((data)=>{
        res.write(JSON.stringify(data.Results));
        res.end();
    });

    async function getAccidents(IDs){
        //console.log(IDs);
        let years = req.params.year.split(',');
        if (years.length === 1){
            years.push(years[0]);
        }
        //console.log('froYear: ',years[0]);
        //console.log('toYear',years[1]);
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states='+IDs+'&fromYear='+years[0]+'&toYear='+years[1]+'&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        //console.log('response: ', response);
        let data = await response.json();
        //console.log('first data: ', data);
        return data;
    }
};

exports.byState = (req,res)=>{
    //let idList=getIdList(req);
    getAccidents(getIdList(req).toString()).then((data)=>{
        //res.write('hit');

        //console.log('Results: ', data.Results);
        res.write(JSON.stringify(data.Results));

        //data.Results.forEach(result=>res.send(result));
        res.end();
    });

    async function getAccidents(IDs){
        //console.log(IDs);
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states='+IDs+'&fromYear=2010&toYear=2020&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        //console.log('response: ', response);
        let data = await response.json();
        //console.log('first data: ', data);
        return data;
    }

    //res.end();
};

exports.accidents = function(req, res) {
    async function getAccidents(){
        let response = await fetch('https://crashviewer.nhtsa.dot.gov/CrashAPI/crashes/GetCaseList?states=1,51&fromYear=2010&toYear=2020&minNumOfVehicles=1&maxNumOfVehicles=100&format=json');
        //console.log('response: ', response);
        let data = await response.json();
        //console.log('first data: ', data);
        return data;
    }

    getAccidents().then((data)=>{
        //res.write('hit');

        //console.log('Results: ', data.Results);
        res.write(JSON.stringify(data.Results));

        //data.Results.forEach(result=>res.send(result));
        res.end();
    })
};