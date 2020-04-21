# Routes

## Users
* _users/register_ - Route to register a user. Expects the following parameters:
     ````
    {
        firstName: String,
        lastName: String,
        email: String,
        password: String,
        password2: String (must equal pw.... this is the confirm password box).
        role: String (must be either 'agent' or 'customer')
      
    }

* _users/login_ - Route to login a user. Expects the following parameters:
     ````
    {
        email: String,
        password: String,
    }
  ````

## Weather
* _weather/cityName_ - Route to a specific city's weather information: Returns the following parameters:
    ````
    {
        cityName: String,
        weatherMain: String,
        weatherDescription: String,
        visibility: number,
        windSpeed: number,
    }
    ````
  
## Accidents
* _accident/states=:stateName_ - Route to a state's (or states', use commas as delimiter, not case sensitive) accident list (data from 2010-present, max 5000). Returns the following parameters:
    ````
    {
        "CountyName": String (includes county number in parentheses),
        "CrashDate": JSON Date String,
        "Fatals": Number,
        "Peds": Number,
        "Persons": Number,
        "St_Case": Number,
        "State": Number,
        "StateName": String,
        "TotalVehicles": Number
    }
    ````
* _accident/states=:stateName/years=:year_ - Route to list of state (or states, comma as delimiter, not case sensitive) accidents by year (can input start and end date separated by commas). Returns the following parameters:
    ````
    {
        "CountyName": String (includes county number in parentheses),
        "CrashDate": JSON Date String,
        "Fatals": Number,
        "Peds": Number,
        "Persons": Number,
        "St_Case": Number,
        "State": Number,
        "StateName": String,
        "TotalVehicles": Number
    }
    ````
* _accident/state=:stateName/county=:county/years=:year_ - Route to accident list for specific county (numerical code) in specific state (not case sensitive) by year (can input start and end date separated by commas). Returns the following parameters:
    ````
    {
        "CITY": Number,
        "CITYNAME": String (or "Not Applicable"),
        "COUNTY": Number,
        "COUNTYNAME": String (includes county number in parentheses),
        "CaseYear": Number,
        "FATALS": Number,
        "LATITUDE": Number,
        "LONGITUD": Number,
        "STATE": Number,
        "STATENAME": String,
        "ST_CASE": Number,
        "TOTALVEHICLES": Number,
        "TWAY_ID": String,
        "TWAY_ID2": String,
        "VE_FORMS": Number
    }
    ````
* _accident/analytics/state=:stateName/years=:year_ - Route to summary data of crash counts in a specific state (not case sensitive) for each year provided (single or start and end year separated by a comma). Returns the following parameters:
    ````
    {
        "CaseYear": String,
        "CrashCounts": Number,
        "TotalFatalCounts": Number
    }
    ````
* _accident/state=:stateName/city=:cityName/year=:year_ - Route to accident list of a city in a given year. Returns the same parameters as /state/county/year.
* _/state=:stateName/county=:countyName/city=:cityName/year=:year_ - Route to accident list of a city in a given year, county included to improve query speed. Returns the same parameters as /state/county/year.

## Admin
* _admin/accident_ - Route to create and upload and accident. See models/Accident for more details.
* _admin/accidents_ - Route to pull all created accidents stored in the database. See models/Accident for more details on returned schema.
* _admin/accident/:id_ - Route to delete the specified accident based on id.

## Customer
* _customer/:userId/quiz_ - Route to update quiz score of user specified by Id.
* _customer/:agentId_ - Route to read client based on agent Id provided.